import { media } from '../utils/assets'

export const profile = {
  name: 'Engr.M. Raees Azam',
  shortName: 'Engr. Raees Azam',
  handle: '@raeesazam',
  title: 'AI Engineer & Researcher',
  tagline:
    'Building production AI systems and research-grade computer vision for precision agriculture, robotics, and intelligent automation.',
  location: 'Istanbul, Türkiye',
  email: 'raees.info07@gmail.com',
  status: 'MSc Artificial Intelligence @ Özyeğin University · Open to AI Engineering & PhD opportunities',
  portrait: media('profile', 'raees.png'),
  cvPath: `${import.meta.env.BASE_URL}cv.pdf`,
  researchStatement: `I architect AI systems that bridge rigorous research and real-world deployment—from federated and centralized deep learning on edge devices to agentic LLM pipelines in production. My work spans precision agriculture (weed localization, crop health, controlled-environment leaf analysis), computer vision (segmentation, detection, pose estimation), and embedded robotics (Jetson, Raspberry Pi, laser-guided automation).

Currently pursuing an MSc in Artificial Intelligence at Özyeğin University, I am advancing YOLO-based pose and segmentation methods under Prof. Dr. Çiğdem Eroğlu Erdem, with active industry roles in vision-language models, RAG systems, and HEC-funded smart agriculture at scale. I am motivated to contribute to PhD-level research and high-impact AI engineering teams abroad.`,
  stats: [
    { label: 'Publications & Submissions', value: '5+' },
    { label: 'AI / CV Projects', value: '15+' },
    { label: 'Students Trained', value: '500+' },
    { label: 'Research & Industry Roles', value: '10+' },
  ],
}

export const links = {
  linktree: 'https://linktr.ee/raeesazam',
  github: 'https://github.com/roboraees07',
  linkedin: 'https://www.linkedin.com/in/raeesazam/',
  scholar: 'https://scholar.google.com/citations?user=vm1YcoYAAAAJ&hl=en',
  googleDevelopers:
    'https://developers.google.com/profile/u/115769942136393563919',
  googleCloud:
    'https://www.cloudskillsboost.google/public_profiles/d6c27250-aebf-49de-ab76-31870aa1c4c5',
  medium: 'https://medium.com/@raees.info07',
  portfolioLegacy: 'https://roboleo.netlify.app/',
  roboleo: 'https://roboleo.netlify.app/',
  gdgOnCampus:
    'https://gdg.community.dev/gdg-on-campus-comsats-university-abbottabad-pakistan/',
  credly: 'https://www.credly.com/users/raeesazam',
  behance: 'https://www.behance.net/raeesazam',
  email: 'mailto:raees.info07@gmail.com',
}

export const thesis = {
  title:
    'Enhanced YOLOPosev11 for Precise Weed Growing Point Localization using Centralized and Federated Learning for Precision Agriculture',
  supervisor: 'Prof. Dr. Çiğdem Eroğlu Erdem',
  university: 'Özyeğin University',
  domains: ['Computer Vision', 'Federated Learning', 'Large Language Models', 'Embedded Systems'],
}

export const whatIDo = [
  {
    title: 'Computer Vision & Deep Learning',
    description:
      'Segmentation, detection, and pose estimation (YOLO, FCN, CNN) for agriculture, medical imaging, and autonomous systems—with edge deployment on Jetson and Raspberry Pi.',
    icon: 'scan',
  },
  {
    title: 'Production AI & Agentic Systems',
    description:
      'RAG pipelines, ReAct agents, Document AI, VLMs, and LLM automation for enterprise clients—end-to-end from data scraping to monitored deployment.',
    icon: 'bot',
  },
  {
    title: 'Research & Federated Learning',
    description:
      'Peer-reviewed and submitted work in precision agriculture, LPDR, and nutrient deficiency detection; thesis on federated YOLOPose for weed localization.',
    icon: 'flask',
  },
  {
    title: 'Robotics, IoT & STEAM Education',
    description:
      'Embedded systems, agricultural UGV/drone integration, and training 500+ learners through GDSC, AISeekho, and national AI programs.',
    icon: 'cpu',
  },
]

export const education = [
  {
    period: '2026 – Present',
    degree: 'MSc Artificial Intelligence',
    school: 'Özyeğin University, Istanbul, Türkiye',
    detail: '1st semester · Thesis: CV, Federated Learning, LLMs, Embedded Systems',
    courses:
      'Digital Image Processing, Large Language Models, Computer Vision, Data Science, Mechatronics Engineering',
  },
  {
    period: '2020 – 2024',
    degree: 'BS Computer Engineering',
    school: 'COMSATS University Islamabad, Abbottabad Campus, Pakistan',
    detail: 'CGPA 3.27 · Most Practical and Conceptual Student',
    courses:
      'AI, ML, Neural Networks, DIP, Embedded Systems, Control Systems',
  },
  {
    period: '2017 – 2019',
    degree: 'FSc Computer Science',
    school: 'Edwardes College Peshawar, Pakistan',
    detail: '78.9% · Double Gold Medal · Student Talent Award 2018',
    courses: 'Computer Science, Physics, Mathematics',
  },
]

export const publications = [
  {
    title:
      'A Comparative Study on Detection and Recognition of Non-Uniform License Plates',
    authors: 'M. Arshid, M. R. Azam, Z. Mahmood',
    venue: 'Big Data and Cognitive Computing, vol. 8, no. 11, 2024',
    status: 'Published',
    impact: 'IF 3.7',
    link: 'https://doi.org/10.3390/bdcc8110155',
  },
  {
    title:
      'Deep Learning-Based Precise Leaf Analysis for Segmentation and Deficiency Classification under Controlled Environment',
    authors: 'M. R. Azam, Z. Shafiq, A. Shah, G. M. Khan',
    venue: 'AIAI 2025, IFIP WG 12.5 — Chapter 24',
    status: 'Published',
    link: 'https://doi.org/10.1007/978-3-031-97313-0_24',
  },
  {
    title:
      'A Comparative Study of Hybrid YOLOSeg–CNN Framework for Precise Leaf Segmentation and Multi-Class Nutrient Deficiency Detection',
    authors: 'M. R. Azam, Z. Shafiq, T. Arif, G. M. Khan',
    venue: 'Journal of Real-Time Image Processing',
    status: 'Submitted',
  },
  {
    title:
      'Text-Independent Speaker Recognition and Audio Integrity Verification in Next-Generation Communication Networks using MFCCs and Machine Learning',
    authors: 'M. Arshid, M. R. Azam, M. Danyal, S. M. Gulfam',
    venue:
      '2025 International Conference on Frontiers of Information Technology (FIT), Islamabad, Pakistan — IEEE',
    status: 'Published',
    link: 'https://ieeexplore.ieee.org/abstract/document/11333635',
  },
  {
    title:
      'Precise Weed Detection and Growing Point Localization Using Deep Learning and Watershed-Guided Post Processing',
    authors: 'M. R. Azam, Ç. Eroğlu Erdem',
    venue: 'Under writeup',
    status: 'In Preparation',
  },
  {
    title:
      'A Federated Learning Framework with Self-Supervised Pretraining for Label-Efficient Leaf Disease Classification',
    authors: 'M. Arshid, M. R. Azam, Ç. Eroğlu Erdem',
    venue: 'Under writeup',
    status: 'In Preparation',
  },
  {
    title:
      'Robust Sign Language Generation and Recognition: Real-Time Translation with Error Handling',
    authors: 'S. R. Z. Kazmi, M. R. Azam, S. M. Gulfam',
    venue: 'In preparation',
    status: 'In Preparation',
  },
]

export type Project = {
  id: string
  name: string
  category: 'research' | 'industry' | 'robotics'
  featured: boolean
  summary: string
  highlights: string[]
  tech: string[]
  image?: string
  links?: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    id: 'tubitak-weeding',
    name: 'TÜBİTAK — Smart Laser Weeding System',
    category: 'research',
    featured: true,
    summary:
      'R&D on autonomous weed detection and removal using fiber laser technology, custom CV models, and edge AI on Jetson Nano / Raspberry Pi in greenhouse environments.',
    highlights: [
      'Custom deep learning for weed localization and segmentation',
      'Real-time inference pipelines on embedded edge devices',
      'Sensor feedback for precision laser targeting and safe operation',
      'Aligned with MSc thesis on YOLOPosev11 + federated learning',
    ],
    tech: ['PyTorch', 'OpenCV', 'Jetson Nano', 'Raspberry Pi', 'Edge AI', 'IoT'],
    image: media('projects', 'project-10', 'prediction-vs-ground-truth.png'),
    links: [
      {
        label: 'GitHub — Weed Localization',
        url: 'https://github.com/roboraees07/An-Ensemble-Learning-Approach-for-Precise-Weed-Growing-Point-Localization-in-Agricultural-Fields',
      },
    ],
  },
  {
    id: 'ensemble-weed-localization',
    name: 'Ensemble Weed Growing Point Localization (CropAndWeed)',
    category: 'research',
    featured: true,
    summary:
      'Özyeğin University CV project: ensemble ML (LightGBM, RF, SVM, KNN) + watershed hybrid localization on CropAndWeed—94.82% CAR vs 73.1% SSD-300/VGG-16 baseline.',
    highlights: [
      '94.82% CAR (+21.72% vs WACV 2023 baseline)',
      '12.73 px MED — 56.3% lower localization error',
      'Pixel + bbox feature ensembles with watershed fusion',
    ],
    tech: ['LightGBM', 'Scikit-learn', 'OpenCV', 'Watershed', 'CropAndWeed', 'Python'],
    image: media('projects', 'project-10', 'cover.png'),
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/roboraees07/An-Ensemble-Learning-Approach-for-Precise-Weed-Growing-Point-Localization-in-Agricultural-Fields',
      },
    ],
  },
  {
    id: 'fed-mae-leafnet',
    name: 'Federated MAE Pretraining on LeafNet (Fed-MAE)',
    category: 'research',
    featured: true,
    summary:
      'Federated self-supervised learning for label-efficient leaf disease classification on LeafNetBinary5—Fed-MAE reaches ~99.1% central and ~98.2–98.6% under non-IID splits.',
    highlights: [
      'ViT-B/16 + FedAvg across 5 Dirichlet-partitioned clients',
      'Stable accuracy under α ∈ {100, 1.0, 0.5} heterogeneity',
      'Table II–style benchmark vs scratch, ImageNet MAE/BEiT, supervised ViT',
    ],
    tech: ['PyTorch', 'ViT', 'MAE', 'Federated Learning', 'FedAvg', 'LeafNet'],
    image: media('projects', 'project-11', 'cover.png'),
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/roboraees07/Federated-Learning-Framework-with-Self-Supervised-Pretraining-on-LeafNet',
      },
    ],
  },
  {
    id: 'medical-vqa-qwen2vl',
    name: 'Medical Vision QA with Qwen2-VL (Kaggle)',
    category: 'research',
    featured: true,
    summary:
      'Complete multimodal medical VQA on Kaggle: Qwen2-VL fine-tuned with LoRA on the Medical Vision LLM Dataset (3,834 train / 959 val)—BLEU, ROUGE, F1, and exact-match evaluation.',
    highlights: [
      'Qwen2-VL + LoRA (~1% trainable parameters)',
      'Medical Vision LLM Dataset — diagnostic Q&A from images',
      'Portable pipeline: Kaggle T4 GPU, Colab, or local PC',
    ],
    tech: ['Qwen2-VL', 'LoRA', 'PEFT', 'Transformers', 'PyTorch', 'Hugging Face'],
    image: media('projects', 'project-12', 'cover.png'),
    links: [
      {
        label: 'Kaggle Notebook',
        url: 'https://www.kaggle.com/code/raeesazam/notebookbc0be64ed5',
      },
    ],
  },
  {
    id: 'ncai-hec',
    name: 'HEC-Funded Smart Agriculture @ NCAI, UET Peshawar',
    category: 'research',
    featured: true,
    summary:
      'Data Engineer on PKR 140M+ HEC project: smart incubators, controlled-environment crop monitoring, and production ML for precision farming.',
    highlights: [
      '5 smart incubators deployed — 2× yield, 1.5× faster growth vs field',
      'First-author AIAI 2025 paper on leaf segmentation & deficiency detection',
      'FCN-8s, U-Net, YOLO, ResNet50 on drone and sensor data',
    ],
    tech: ['TensorFlow', 'Keras', 'YOLO', 'UNet', 'Jetson', 'Raspberry Pi', 'SQL'],
    image: media('projects', 'project-13', 'cover.png'),
    links: [{ label: 'CISNR Lab', url: 'https://cisnr.com/' }],
  },
  {
    id: 'agritech-fyp',
    name: 'AgriTech — AI Crop Monitoring (PEC & HEC Funded FYP)',
    category: 'research',
    featured: true,
    summary:
      'RGB aerial drone imagery, FCN-8s segmentation, CNN disease classification, and Flutter mobile app for Pakistani agricultural land.',
    highlights: [
      'PKR 350,000+ funding (PEC + Ignite)',
      'Google Solution Challenge 2024 — Global Top 100',
      '2nd Prize KP Capstone Expo 2024 · PEC fully funded FYP',
    ],
    tech: ['TensorFlow', 'FCN-8s', 'CNN', 'Flutter', 'ArduPilot', 'Mission Planner'],
    image: media('projects', 'project-7', 'cover.png'),
    links: [
      { label: 'FarmTech Repo', url: 'https://github.com/roboraees07/FarmTech' },
      {
        label: 'Solution Challenge',
        url: 'https://developers.google.com/community/gdsc-solution-challenge/winners',
      },
    ],
  },
  {
    id: 'leaf-yoloseg',
    name: 'Hybrid YOLOSeg–CNN Leaf & Nutrient Deficiency Detection',
    category: 'research',
    featured: true,
    summary:
      'Published AIAI 2025 chapter: YOLOSeg v8 leaf segmentation (97.18% Dice / 98.00% mAP50) plus CNN nutrient-deficiency classification in controlled environments.',
    highlights: [
      'Co-authored with Zeeshan Shafiq, Adil Shah, Gul Muhammad Khan (NCAI, UET Peshawar)',
      'Published in AIAI 2025 IFIP WG 12.5 Proceedings, Chapter 24',
      '13.5 ms/image inference; CNN deficiency accuracy 82.40%',
    ],
    tech: ['YOLOSeg v8', 'CNN', 'Segmentation', 'PyTorch'],
    image: media('projects', 'project-14', 'cover.png'),
  },
  {
    id: 'lpdr',
    name: 'License Plate Detection & Recognition (Pakistan Dataset)',
    category: 'research',
    featured: true,
    summary:
      'Published MDPI study (IF 3.7): comparative LPDR on 16,521-image Pakistani dataset — 98.41% mean detection, 98.96% recognition with CA-CenterNet.',
    highlights: [
      'Faster-RCNN 98.35% vs E2E 98.48% detection; DNN 98.90% vs CA-CenterNet 98.96% recognition',
      'Co-authored with Mehak Arshid & Zahid Mahmood — COMSATS Abbottabad Research Fellow',
      'E2E + CA-CenterNet recommended for real-time Pakistani ALPR pipelines',
    ],
    tech: ['Faster-RCNN', 'E2E', 'DNN', 'CA-CenterNet', 'OpenCV', 'PyTorch'],
    image: media('projects', 'project-5', 'cover.png'),
    links: [
      { label: 'MDPI Paper', url: 'https://doi.org/10.3390/bdcc8110155' },
      { label: 'Article', url: 'https://www.mdpi.com/2504-2289/8/11/155' },
    ],
  },
  {
    id: 'lungs-seg',
    name: 'Lungs Semantic Segmentation',
    category: 'research',
    featured: false,
    summary: 'Medical image segmentation using FCN-8 and VGG-based deep learning on lung CT/X-ray datasets.',
    highlights: ['FCN-8s architecture', 'Clinical decision support orientation'],
    tech: ['TensorFlow', 'Keras', 'FCN-8', 'OpenCV'],
    image: media('projects', 'project-1', 'cover.png'),
  },
  {
    id: 'road-seg',
    name: 'Self-Driving Car Road Image Segmentation',
    category: 'research',
    featured: false,
    summary: 'Semantic segmentation for autonomous driving road scenes.',
    highlights: ['Multi-class road scene understanding'],
    tech: ['Deep Learning', 'Segmentation', 'Python'],
    image: media('projects', 'project-8', 'cover.png'),
  },
  {
    id: 'malware',
    name: 'Mobile Apps Malware Classification',
    category: 'research',
    featured: false,
    summary: 'ML-based classification of Android malware applications.',
    highlights: ['Feature engineering for mobile security'],
    tech: ['Python', 'Scikit-learn', 'ML'],
    image: media('projects', 'project-4', 'cover.png'),
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/roboraees07/Classification-of-Android-Malware-Applications',
      },
    ],
  },
  {
    id: 'smart-car',
    name: 'Smart Car Robot — Line Follow, Obstacle & Light Tracking',
    category: 'robotics',
    featured: true,
    summary: 'Arduino-based mobile robot with multi-mode autonomous navigation.',
    highlights: ['Embedded control', 'Sensor fusion for navigation'],
    tech: ['Arduino', 'C++', 'Electronics'],
    image: media('projects', 'project-3', 'cover.png'),
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/roboraees07/Arduino-based-line-following-Car',
      },
    ],
  },
  {
    id: 'robotic-arm',
    name: 'Arduino Based Robotic Arm',
    category: 'robotics',
    featured: true,
    summary: 'Programmable robotic arm for STEAM education and prototyping.',
    highlights: ['Mechanical assembly', 'Motor control'],
    tech: ['Arduino', 'Servo Control'],
    image: media('projects', 'project-9', 'cover.png'),
  },
  {
    id: 'tetrax',
    name: 'TetraX — Modified RLC Trainer',
    category: 'robotics',
    featured: false,
    summary: 'Engineering education hardware — 2nd Prize TechFest 2021.',
    highlights: ['Inter-university exhibition winner'],
    tech: ['Electronics', 'Proteus'],
    image: media('projects', 'project-2', 'cover.png'),
  },
  {
    id: 'smart-home',
    name: 'IoT Smart Home Automation',
    category: 'robotics',
    featured: false,
    summary: 'Home automation with IoT sensors and control interfaces.',
    highlights: ['Edwardes STEM exhibition project'],
    tech: ['IoT', 'Arduino', 'Sensors'],
    image: media('projects', 'project-6', 'cover.png'),
    links: [{ label: 'GitHub', url: 'https://github.com/roboraees07/IoT-Based-Home-Automation' }],
  },
  {
    id: 'jazzcash-fraud',
    name: 'JazzCash Fraud Detection System',
    category: 'industry',
    featured: false,
    summary: 'Production ML for fraudulent transaction detection using XGBoost, LGBM, and ensembles.',
    highlights: ['Stixor Technologies · Real-world fintech scale'],
    tech: ['XGBoost', 'LightGBM', 'Python'],
    image: media('projects', 'project-4', 'Heatmap.png'),
  },
  {
    id: 'toll-anpr',
    name: 'Smart Toll Collection — YOLOv11/v12 ANPR',
    category: 'industry',
    featured: false,
    summary: 'Number plate recognition integrated with automated NHA billing.',
    highlights: ['Stixor · Computer vision in production'],
    tech: ['YOLOv11', 'YOLOv12', 'OpenCV'],
    image: media('projects', 'project-5', 'fig3-lp-detection.png'),
  },
]

export const skillGroups = [
  {
    name: 'AI & LLM Engineering',
    skills: [
      'PyTorch',
      'TensorFlow',
      'LangChain',
      'RAG',
      'OpenAI / Gemini APIs',
      'YOLOv11/v12',
      'Vision-Language Models',
      'Fine-tuning',
      'n8n / Agentic AI',
    ],
  },
  {
    name: 'Computer Vision & ML',
    skills: [
      'Segmentation (FCN, U-Net)',
      'Object Detection',
      'Pose Estimation',
      'Federated Learning',
      'OpenCV',
      'XGBoost / LightGBM',
      'CNN / ResNet',
    ],
  },
  {
    name: 'Edge, Robotics & IoT',
    skills: [
      'NVIDIA Jetson',
      'Raspberry Pi',
      'Arduino',
      'Embedded Linux',
      'Drones',
      'IoT Sensors',
      'Flutter',
    ],
  },
  {
    name: 'Engineering & Cloud',
    skills: [
      'Python',
      'FastAPI',
      'Flask',
      'Docker',
      'GCP',
      'Git',
      'SQL',
      'Streamlit',
    ],
  },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'creative', label: 'Creative' },
  { id: 'achievements', label: 'Awards' },
  { id: 'skills', label: 'Skills' },
  { id: 'blogs', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]
