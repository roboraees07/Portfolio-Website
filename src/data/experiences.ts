import { ghMedia } from '../utils/assets'
import { links } from './site'

export type ExperienceEntry = {
  id: string
  type: 'professional' | 'volunteer'
  role: string
  org: string
  period: string
  current?: boolean
  link?: string
  logo?: string
  whatIDid: string[]
  achievements: string[]
  learned: string[]
  tools?: string[]
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'tubitak',
    type: 'professional',
    role: 'Researcher',
    org: 'TÜBİTAK Project, Istanbul, Türkiye',
    period: 'Oct 2025 – Present',
    current: true,
    whatIDid: [
      'Research and development on smart weeding with fiber laser for greenhouse environments.',
      'Design and train custom DL models for weed localization using CV and segmentation.',
      'Integrate real-time AI on NVIDIA Jetson Nano and Raspberry Pi with laser control.',
      'Build sensor feedback loops for precision targeting and safe selective weeding.',
      'Collaborate on hardware–software integration, annotation, and field evaluation.',
    ],
    achievements: [
      'Aligned R&D with MSc thesis on YOLOPosev11 + federated learning.',
      'Optimized models for low-latency, energy-efficient agricultural automation.',
    ],
    learned: [
      'Edge AI deployment under real greenhouse constraints.',
      'Multidisciplinary coordination across robotics, optics, and ML.',
    ],
    tools: ['Python', 'PyTorch', 'OpenCV', 'Jetson Nano', 'Raspberry Pi', 'Laser Control'],
  },
  {
    id: 'neuralogics',
    type: 'professional',
    role: 'Artificial Intelligence Engineer',
    org: 'Neuralogics, United States',
    period: 'Aug 2025 – Present',
    current: true,
    whatIDid: [
      'Built Vision-Language Model pipelines for automation and analytics.',
      'Developed large-scale scraping, crawling, and data cleaning pipelines.',
      'Fine-tuned LLM-powered agents for web task execution and content extraction.',
      'Integrated multimodal AI combining text, image, and structured data.',
    ],
    achievements: [
      'Delivered production-oriented VLM workflows for client automation.',
      'Streamlined end-to-end data acquisition and model evaluation loops.',
    ],
    learned: [
      'Operationalizing VLMs beyond demos — quality gates and monitoring matter.',
      'Designing robust scrapers that feed reliable training data.',
    ],
    tools: ['PyTorch', 'LangChain', 'OpenAI/Gemini APIs', 'Selenium', 'Scrapy', 'GCP'],
  },
  {
    id: 'ccript',
    type: 'professional',
    role: 'AI Engineer Project Lead',
    org: 'CCRIPT Agency, Toronto, Canada',
    period: 'Jul 2025 – Present',
    current: true,
    whatIDid: [
      'Led international client AI projects from requirements to deployment.',
      'Built Document AI, n8n automation, RAG, and ReAct agent systems.',
      'Managed timelines, stakeholder communication, and technical documentation.',
    ],
    achievements: [
      'Shipped scalable production AI across multiple business domains.',
      'Drove LLM fine-tuning and evaluation for client-specific accuracy targets.',
    ],
    learned: [
      'Client-facing AI leadership — scope control and measurable outcomes.',
      'When to use agents vs. simpler automation workflows.',
    ],
    tools: ['Python', 'LangChain', 'n8n', 'RAG', 'ReAct', 'Document AI', 'GCP'],
  },
  {
    id: 'infaque',
    type: 'professional',
    role: 'Embedded Engineer',
    org: 'Infaque Inc, Toronto, Canada',
    period: 'Feb 2025 – Present',
    current: true,
    whatIDid: [
      'Deployed IoT software on Raspberry Pi for real-time agriculture.',
      'Built weight-cell desktop app with AI-based vegetable identification.',
      'Developed smart agricultural drone system for spraying and crop health.',
    ],
    achievements: [
      'Integrated hardware, AI models, and cloud analytics pipelines.',
      'Real-time telemetry (weight, type, timestamp) to central database.',
    ],
    learned: [
      'Full-stack embedded + ML integration for field deployments.',
      'Balancing edge inference with cloud monitoring.',
    ],
    tools: ['Python', 'Raspberry Pi', 'OpenCV', 'CNN', 'Firebase', 'DroneTech'],
  },
  {
    id: 'ncai',
    type: 'professional',
    role: 'Data Engineer',
    org: 'National Center of Artificial Intelligence, UET Peshawar',
    period: 'Aug 2024 – Apr 2025',
    logo: ghMedia('src/content/Experience/CISNR Lab.png'),
    link: 'https://cisnr.com/',
    whatIDid: [
      'Developed AI models under PKR 140M+ HEC-funded smart agriculture project.',
      'Built and deployed 5 smart incubators for controlled environments.',
      'Analyzed large-scale agricultural datasets; optimized latency for production.',
      'First-author AIAI 2025 publication on leaf segmentation and deficiency detection.',
    ],
    achievements: [
      '2× crop yield and 1.5× faster growth vs traditional field methods in incubators.',
      'DOI publication: 10.1007/978-3-031-97313-0_24',
    ],
    learned: [
      'Translating research models into monitored production systems.',
      'Cross-functional work with agronomists and hardware engineers.',
    ],
    tools: ['TensorFlow', 'YOLO', 'UNet', 'Jetson', 'Raspberry Pi', 'SQL'],
  },
  {
    id: 'comsats-research',
    type: 'professional',
    role: 'Research Fellow',
    org: 'COMSATS University Islamabad, Abbottabad',
    period: 'Jul 2024 – Dec 2024',
    whatIDid: [
      'Comparative LPDR study on unconstrained Pakistani plates (MDPI BDCC, 2024).',
      'Collected and annotated 16,521-object multilingual license plate dataset.',
      'Benchmarked Faster-RCNN, E2E, DNN, and CA-CenterNet detection/recognition pipelines.',
    ],
    achievements: [
      '98.41% mean detection accuracy; up to 98.96% recognition with CA-CenterNet.',
      'Published IF 3.7 paper — Big Data and Cognitive Computing, vol. 8, no. 11.',
    ],
    learned: [
      'Rigorous experiment design and peer-review rebuttal writing.',
      'GPU-accelerated training for two-stage detection + recognition ALPR stacks.',
    ],
    tools: ['PyTorch', 'Faster-RCNN', 'CA-CenterNet', 'OpenCV', 'CUDA'],
  },
  {
    id: 'stixor',
    type: 'professional',
    role: 'AI/ML Developer',
    org: 'Stixor Technologies, Islamabad',
    period: 'Apr 2025 – Jul 2025',
    whatIDid: [
      'Built multi-agent and LLM frameworks for workflow automation.',
      'JazzCash fraud detection with XGBoost, LGBM, ensembles.',
      'YOLOv11/v12 ANPR for NHA toll collection; medical transcription AI; customs chatbot.',
    ],
    achievements: [
      'Production fraud engine and ANPR system for national infrastructure use cases.',
      'Generative AI reimbursement pipeline for FCCL pharmacy claims.',
    ],
    learned: [
      'Agent orchestration and tool selection at scale.',
      'Fintech-grade ML evaluation and class imbalance handling.',
    ],
    tools: ['YOLOv11', 'XGBoost', 'LightGBM', 'LangChain', 'OpenAI API', 'Flask'],
  },
  {
    id: 'arfa-karim',
    type: 'professional',
    role: 'Artificial Intelligence Trainer',
    org: 'Arfa Karim Technology Incubator, Peshawar',
    period: 'Mar 2025 – Sep 2025',
    whatIDid: [
      'Led 3-month programs in GenAI, Data Science, and Huawei HCDI AI.',
      'Mentored 75+ students on Python, ML, LLMs, LangChain, NLP, CV, deployment.',
      'Designed capstones: chatbots, fraud detection, transcription, object detection.',
    ],
    achievements: ['Delivered industry-aligned curriculum with hands-on capstones.'],
    learned: ['Teaching complex AI topics at multiple skill levels simultaneously.'],
    tools: ['Python', 'TensorFlow', 'LangChain', 'Streamlit', 'OpenAI/Gemini'],
  },
  {
    id: 'banoqabil',
    type: 'professional',
    role: 'AI/ML Trainer',
    org: 'BanoQabil IT Training Program (Alkhidmat × EncoderBytes)',
    period: 'Aug 2025 – Sep 2025',
    whatIDid: [
      'National AI/ML training for youth — Python, DL, NLP, CV, generative AI.',
      'Workshops, labs, and RAG/chatbot capstone mentorship.',
    ],
    achievements: ['Aligned curriculum with evolving industry AI/ML demands.'],
    learned: ['Scaling mentorship for large cohorts with diverse backgrounds.'],
  },
  {
    id: 'ncra-intern',
    type: 'professional',
    role: 'Robotics Engineer Intern',
    org: 'National Center of Robotics and Automation, UET Peshawar',
    period: 'Aug 2022 – Sep 2022',
    logo: ghMedia('src/content/Experience/CISNR Lab-1.png'),
    link: 'https://www.uetpeshawar.edu.pk/aral/index.html',
    whatIDid: [
      'STEM robotic kit manufacturing supervision.',
      'Agricultural UGV spraying robot engagement.',
      'STEAM domain teaching for students.',
    ],
    achievements: ['Supported hands-on robotics learning at national robotics center.'],
    learned: ['Hardware–software integration in agricultural robotics.'],
  },
  {
    id: 'gdsc-lead',
    type: 'volunteer',
    role: 'Google Developer Student Clubs Lead',
    org: 'Google for Developers · COMSATS Abbottabad',
    period: '2023 – 2024',
    logo: ghMedia('src/content/Experience/GDSC.png'),
    link: links.gdgOnCampus,
    whatIDid: [
      'Led community of 500+ members; organized AI/Cloud workshops and hackathons.',
      'Ran Build with AI hackathon and Solution Challenge submissions.',
      'Represented chapter at global GDSC graduation as guest speaker.',
    ],
    achievements: [
      'Solution Challenge Global Top 100.',
      'Recognition from GDG Cloud Islamabad as outstanding AI lead.',
    ],
    learned: ['Community building, sponsorship, and developer advocacy at scale.'],
  },
  {
    id: 'iet-secretary',
    type: 'volunteer',
    role: 'General Secretary',
    org: 'IET OnCampus, COMSATS Abbottabad',
    period: '2020 – 2023',
    logo: ghMedia('src/content/Experience/IET.png'),
    link: 'https://www.cuiatd.edu.pk/iet-on-campus-cui-abbottabad-campus-network/',
    whatIDid: [
      'Coordinated technical workshops with IEEE and GDSC chapters.',
      'Managed society operations, events, and student outreach.',
    ],
    achievements: ['Sustained multi-year technical event pipeline on campus.'],
    learned: ['Organizational leadership and cross-society collaboration.'],
  },
  {
    id: 'ieee-media',
    type: 'volunteer',
    role: 'Media Head',
    org: 'IEEE COMSATS Abbottabad Chapter',
    period: '2020 – 2022',
    logo: ghMedia('src/content/Experience/IEEE.png'),
    link: 'https://www.cuiatd.edu.pk/students/clubs-societies/ieee-society/',
    whatIDid: [
      'Visual branding, posters, and media coverage for IEEE events.',
      'Graphic design for society campaigns and tech talks.',
    ],
    achievements: ['Elevated chapter visibility through consistent design language.'],
    learned: ['Applied graphic design skills in professional society context.'],
  },
  {
    id: 'orbailix',
    type: 'volunteer',
    role: 'Co-Founder & CTO',
    org: 'Orbailix',
    period: '2021 – 2022',
    logo: ghMedia('src/content/Experience/Orbailix.png'),
    link: 'https://www.linkedin.com/company/orbailix/',
    whatIDid: [
      'Led technology strategy for early-stage startup.',
      'Built prototypes and technical roadmap for product validation.',
    ],
    achievements: ['Founded student-led startup with working technical demos.'],
    learned: ['Startup CTO responsibilities — MVP focus and team coordination.'],
  },
  {
    id: 'stem-vp',
    type: 'volunteer',
    role: 'Vice President',
    org: 'Edwardes STEM Society',
    period: '2018 – 2019',
    logo: ghMedia('src/content/Experience/STEM Society.png'),
    link: 'https://www.facebook.com/EdwardesSTEM/',
    whatIDid: [
      'Organized Pre-STEM exhibitions and robotics outreach.',
      'Mentored peers in IoT and electronics projects.',
    ],
    achievements: [
      'IoT Home Automation showcased at Pre-STEM Exhibition 2018.',
      'Student Talent Expo shields 2016–2018.',
    ],
    learned: ['Early leadership in STEM advocacy and event production.'],
  },
  {
    id: 'guiding-society',
    type: 'volunteer',
    role: 'Media Coordinator',
    org: "Student's Welfare and Guiding Society, Edwardes College",
    period: '2018 – 2019',
    logo: ghMedia('src/content/Experience/Guiding Society.png'),
    whatIDid: [
      'Designed promotional media and coordinated welfare events.',
      'Supported student guidance programs and campus campaigns.',
    ],
    achievements: ['Improved event reach through visual storytelling.'],
    learned: ['Design for social impact and student welfare communication.'],
  },
  {
    id: 'pif-stem',
    type: 'volunteer',
    role: "Robotics Teacher's Assistant",
    org: 'Pakistan Innovation Foundation — National STEM School',
    period: 'July 2019',
    logo: ghMedia('src/content/Experience/Pakistan Innovation Foundation.png'),
    link: 'https://pif.org.pk/',
    whatIDid: [
      'Assisted robotics instruction at NUST CEME Makers Summer Camp.',
      'Guided students in prototyping, programming, and safe lab practices.',
      'Coordinated logistics for daily camp activities.',
    ],
    achievements: ['Selected TA for national PIF STEM program at NUST.'],
    learned: [
      'Breaking down robotics for high-school and undergraduate learners.',
      'Safety-first lab management for hands-on STEM.',
    ],
  },
  {
    id: 'mccm-instructor',
    type: 'volunteer',
    role: 'Instructor (Volunteer Workshops)',
    org: 'Microsoft College of Computer Management (MCCM)',
    period: '2023 – 2024',
    logo: ghMedia('src/content/Experience/MCCM.png'),
    whatIDid: [
      'Delivered workshops on emerging AI and development tools for students.',
    ],
    achievements: ['Expanded AI literacy in Abbottabad student community.'],
    learned: ['Adapting technical content for diverse academic levels.'],
  },
]

export const professionalExperiences = experiences.filter((e) => e.type === 'professional')
export const volunteerExperiences = experiences.filter((e) => e.type === 'volunteer')
