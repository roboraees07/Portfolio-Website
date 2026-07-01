$legacy = 'https://raw.githubusercontent.com/roboraees07/Portfolio-Website/677f618/src/content/projects'
$destRoot = Join-Path $PSScriptRoot '..\public\media\projects'
$paths = @(
  'project-1/cover.png','project-1/dataset-view.png','project-1/diagram.png','project-1/results-1.png','project-1/results-2.png',
  'project-2/cover.png','project-2/Circuit Design.png','project-2/Circuit Simulation.png','project-2/Final-1.png','project-2/Final-2.png','project-2/PCB Fabrication.png','project-2/PCB Layout Design.png',
  'project-3/cover.png','project-3/Block Diagram.png','project-3/Light Following.png','project-3/Obstacle Avoidance.png',
  'project-4/cover.png','project-4/Heatmap.png','project-4/dataset Balance.png','project-4/results.png',
  'project-5/cover.png','project-5/2.1.png','project-5/2.2.png','project-5/2.3.png','project-5/2.4.png','project-5/3.1a.png','project-5/3.1b.png','project-5/3.1c.png','project-5/4.1a.png','project-5/4.1b.png','project-5/4.1c.png',
  'project-6/cover.png',
  'project-8/cover.png','project-8/Road Dataset.png','project-8/12 classes.png','project-8/FCN8.png','project-8/RESULTS-1.png','project-8/RESULTS-2.png',
  'project-9/cover.png','project-9/Hardware Model.png','project-9/Block Diagram-1.png','project-9/Circuit Diagram.png','project-9/semulation-model.png','project-9/Simulation Results.png','project-9/Simulation Results-1.png'
)
foreach ($rel in $paths) {
  $out = Join-Path $destRoot ($rel -replace '/', '\')
  $dir = Split-Path $out -Parent
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  $url = "$legacy/$($rel -replace ' ', '%20')"
  if (-not (Test-Path $out)) {
    Invoke-WebRequest -Uri $url -OutFile $out -TimeoutSec 60
    Write-Output "downloaded $rel"
  } else {
    Write-Output "exists $rel"
  }
}
$extras = @(
  @{ url = 'https://raw.githubusercontent.com/roboraees07/Arduino-based-line-following-Car/main/arduino-uno-pinout.jpg'; out = 'project-3/arduino-uno-pinout.jpg' },
  @{ url = 'https://raw.githubusercontent.com/roboraees07/IoT-Based-Home-Automation/main/Banner.jfif'; out = 'project-6/banner.jfif' }
)
foreach ($e in $extras) {
  $out = Join-Path $destRoot $e.out
  if (-not (Test-Path $out)) {
    Invoke-WebRequest -Uri $e.url -OutFile $out -TimeoutSec 60
    Write-Output "downloaded $($e.out)"
  }
}
