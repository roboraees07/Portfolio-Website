#!/usr/bin/env python3
"""Extract cleanly cropped MDPI LPDR figures from the published PDF."""
from __future__ import annotations

import re
import urllib.request
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "media" / "projects" / "project-5"
PDF_URL = (
    "https://mdpi-res.com/d_attachment/BDCC/BDCC-08-00155/article_deploy/"
    "BDCC-08-00155.pdf?version=1731324851"
)
PDF_PATH = ROOT / "tmp-bdcc1.pdf"
ZOOM = 2.5

FIGURE_PAGES = {
    1: "fig1-nonuniform-lp-samples",
    2: "fig2-dataset-samples",
    3: "fig3-lp-detection",
    4: "fig4-lp-recognition",
    5: "fig5-computational-complexity",
    6: "fig6-mean-std-comparison",
    7: "fig7-challenging-cases",
}


def ensure_pdf() -> Path:
    if not PDF_PATH.exists() or PDF_PATH.stat().st_size < 1_000_000:
        req = urllib.request.Request(PDF_URL, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=120) as resp:
            PDF_PATH.write_bytes(resp.read())
    return PDF_PATH


def caption_top(page: fitz.Page, figure_no: int) -> float | None:
    pattern = re.compile(rf"^Figure\s+{figure_no}\.", re.I | re.M)
    for block in page.get_text("blocks"):
        if pattern.match(block[4].strip()):
            return block[1]
    return None


def embedded_figure_rect(page: fitz.Page, min_area: float = 20_000) -> fitz.Rect | None:
    rect: fitz.Rect | None = None
    for info in page.get_image_info(xrefs=True):
        if info["width"] * info["height"] < min_area:
            continue
        box = fitz.Rect(info["bbox"])
        rect = box if rect is None else rect | box
    return rect


def figure_clip(page: fitz.Page, figure_no: int) -> fitz.Rect:
    embedded = embedded_figure_rect(page)
    cap_y = caption_top(page, figure_no)
    page_rect = page.rect

    if embedded and embedded.height > 80:
        clip = fitz.Rect(
            max(page_rect.x0 + 35, embedded.x0 - 4),
            max(page_rect.y0 + 60, embedded.y0 - 4),
            min(page_rect.x1 - 35, embedded.x1 + 4),
            min(cap_y - 6, embedded.y1 + 4) if cap_y else embedded.y1 + 4,
        )
        if clip.height > 60 and clip.width > 60:
            return clip

    top = 68
    bottom = cap_y - 8 if cap_y else page_rect.height - 70
    return fitz.Rect(page_rect.x0 + 42, top, page_rect.x1 - 42, bottom)


def render_figure(page: fitz.Page, figure_no: int, dest: Path) -> None:
    clip = figure_clip(page, figure_no)
    mat = fitz.Matrix(ZOOM, ZOOM)
    pix = page.get_pixmap(matrix=mat, clip=clip, alpha=False)
    dest.parent.mkdir(parents=True, exist_ok=True)
    pix.save(dest)


def main() -> None:
    doc = fitz.open(ensure_pdf())
    for figure_no, stem in FIGURE_PAGES.items():
        page = doc[figure_no + 1 if figure_no < 9 else figure_no]  # noqa: PLR2004
        # Pages: fig1=2, fig2=9, fig3=11, fig4=12, fig5=15, fig6=16, fig7=17
        page_map = {1: 2, 2: 9, 3: 11, 4: 12, 5: 15, 6: 16, 7: 17}
        page = doc[page_map[figure_no] - 1]
        dest = OUT / f"{stem}.png"
        render_figure(page, figure_no, dest)
        print(f"{stem}.png ({dest.stat().st_size} bytes)")

    cover = OUT / "cover.png"
    cover.write_bytes((OUT / "fig1-nonuniform-lp-samples.png").read_bytes())
    print("cover.png <- fig1-nonuniform-lp-samples.png")

    for old in OUT.glob("fig*.jpeg"):
        old.unlink(missing_ok=True)

    doc.close()


if __name__ == "__main__":
    main()
