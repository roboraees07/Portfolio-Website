import { links } from './site'

export type BlogPost = {
  id: string
  title: string
  date: string
  readTime: string
  excerpt: string
  content: string
  tags: string[]
  externalUrl?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'why-blogging',
    title: 'Why I Started Blogging',
    date: 'August 23, 2022',
    readTime: '2 min read',
    excerpt:
      'Sharing the journey from robotics workshops to AI research—and why writing helps clarify complex technical ideas.',
    content: `I started blogging to document experiments in AI, computer vision, and robotics that did not fit into a README alone. Writing forces clarity: every pipeline, failure, and metric has to make sense to someone else.

That habit carried into my research career—from AgriTech and smart agriculture to federated learning on edge devices. The blog is a bridge between community teaching (GDG on Campus, AISeekho) and formal publications.`,
    tags: ['Career', 'Writing', 'AI'],
    externalUrl: links.medium,
  },
  {
    id: 'inspirations',
    title: 'My Inspirations',
    date: 'August 23, 2022',
    readTime: '3 min read',
    excerpt:
      'Mentors, open-source communities, and STEM programs that shaped my path from Edwardes College to Özyeğin University.',
    content: `Inspiration came in layers: early STEM societies and robotics camps, university chapters (IEEE, IET, GDSC), and researchers who treated engineering as a service to society.

Pakistan's maker community and Google Developer programs showed me that AI is not only models—it is people, design, and communication. Those values still guide my work in precision agriculture, production ML, and PhD-oriented research.`,
    tags: ['STEM', 'Community', 'Mentorship'],
    externalUrl: links.medium,
  },
  {
    id: 'languages-hacker',
    title: 'Which Languages Should You Learn to Become a Strong AI Engineer?',
    date: 'August 23, 2022',
    readTime: '3 min read',
    excerpt:
      'A practical stack-first view: Python, C++ for edge, and the frameworks that matter for CV, LLMs, and deployment.',
    content: `There is no single "hacker language" for modern AI. Start with **Python** for ML/DL and prototyping. Add **SQL** for data pipelines, **Linux/Git** for reproducibility, and **C++/embedded basics** if you deploy on Jetson or microcontrollers.

For AI engineering specifically: PyTorch or TensorFlow, OpenCV, LangChain or similar for LLM apps, and cloud basics (GCP is a strong fit if you follow Google programs). Learn one domain deeply—computer vision, NLP, or robotics—before chasing every new framework.`,
    tags: ['Programming', 'AI Engineering', 'Education'],
    externalUrl: links.medium,
  },
  {
    id: 'federated-agri',
    title: 'Federated Learning & Precision Agriculture (Thesis Preview)',
    date: 'May 2026',
    readTime: '4 min read',
    excerpt:
      'YOLOPosev11 for weed growing-point localization—centralized vs federated training on greenhouse data.',
    content: `My MSc thesis at Özyeğin University focuses on **Enhanced YOLOPosev11** for precise weed growing-point localization, comparing centralized and federated learning for precision agriculture.

The goal is accurate, low-latency growing-point estimates on edge hardware (Jetson, Raspberry Pi) so laser-based weeding can operate safely in controlled greenhouses—aligned with TÜBİTAK R&D on smart weeding systems.`,
    tags: ['Research', 'Computer Vision', 'Federated Learning', 'Agriculture'],
  },
  {
    id: 'yoloseg-leaf',
    title: 'Hybrid YOLOSeg–CNN for Leaf Deficiency Detection',
    date: 'May 2026',
    readTime: '5 min read',
    excerpt:
      'Submitted work on segmentation plus multi-class nutrient deficiency under controlled environments.',
    content: `Our hybrid **YOLOSeg–CNN** framework targets precise leaf segmentation and multi-class nutrient deficiency detection in controlled agriculture—extending NCAI incubator research published at AIAI 2025.

The pipeline combines segmentation masks with CNN-based deficiency heads so agronomists get both where the leaf is and what it needs. The paper is submitted to the *Journal of Real-Time Image Processing*.`,
    tags: ['Research', 'YOLO', 'Agriculture', 'Deep Learning'],
  },
]
