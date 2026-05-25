import { projects, type Project } from './site'
import { ghMedia, legacyMedia } from '../utils/assets'

export type CodeSnippet = {
  title: string
  language: string
  code: string
}

export type ProjectDetail = Project & {
  introduction: string
  problemStatement?: string
  objectives?: string[]
  methodology?: string[]
  results?: string
  videos?: { title: string; src: string }[]
  gallery?: { title?: string; src: string }[]
  codeSnippets?: CodeSnippet[]
  references?: { label: string; url: string }[]
}

const p7 = 'src/content/projects/project-7'
const p1 = 'src/content/projects/project-1'
const p3 = 'src/content/projects/project-3'
const p4 = 'src/content/projects/project-4'
const p8 = 'src/content/projects/project-8'
const p9 = 'src/content/projects/project-9'

const details: Record<string, Partial<ProjectDetail>> = {
  'agritech-fyp': {
    introduction:
      'AgriTech addresses limitations of traditional crop monitoring by analyzing rice crop health from RGB aerial imagery, enabling targeted spraying via drone and a Flutter mobile app for farmers.',
    problemStatement:
      'Manual crop monitoring is slow and exposes farmers to chemicals. Pakistan needs scalable, AI-driven precision agriculture.',
    objectives: [
      'Drone-based RGB crop analysis and targeted spraying',
      'FCN-8s segmentation + CNN disease classification',
      'Real-time mobile insights for farmers',
    ],
    methodology: [
      'Aerial imagery capture with Mission Planner & ArduPilot',
      'FCN-8s for plant segmentation; CNN for disease classes',
      'Deployment on Raspberry Pi; Flutter app for control & alerts',
    ],
    results:
      'Hardware plant health demos, UAV flights with payload, mobile disease classification. Funded PKR 350,000+; Global Solution Challenge Top 100; PEC Capstone 2nd prize.',
    videos: [
      { title: 'Mobile App Demo', src: legacyMedia(p7, 'App.mp4') },
      { title: 'Plant Health Analysis', src: legacyMedia(p7, 'Plant Video.mp4') },
      { title: 'UAV Deployment', src: legacyMedia(p7, 'UAV.mp4') },
    ],
    gallery: [
      { title: 'Cover', src: ghMedia(p7, 'cover.png') },
      { title: 'Proposed Methodology', src: ghMedia(p7, 'Proposed Methodology.png') },
      { title: 'FCN Segmentation', src: ghMedia(p7, 'FCN For Segmentation.png') },
      { title: 'CNN Classification', src: ghMedia(p7, 'CNN For Classification.png') },
      { title: 'Rice Plant CNN', src: ghMedia(p7, 'CNN for Rice Plant Classification.png') },
      { title: 'Mobile App UI', src: ghMedia(p7, 'app-1.png') },
      { title: 'App Screens', src: ghMedia(p7, 'app-2.png') },
      { title: 'Deployment', src: ghMedia(p7, 'Deployment-1.png') },
      { title: 'Deployment 2', src: ghMedia(p7, 'Deployment-2.png') },
      { title: 'Deployment 3', src: ghMedia(p7, 'Deployment-3.png') },
      { title: 'PEC Recognition', src: ghMedia(p7, 'recognition-1.png') },
      { title: 'Google Challenge', src: ghMedia(p7, 'recognition-2.png') },
      { title: 'Cloud Startup', src: ghMedia(p7, 'recognition-3.png') },
      { title: 'Capstone Expo', src: ghMedia(p7, 'recognition-4.png') },
    ],
    codeSnippets: [
      {
        title: 'Model training — FCN-8s (concept)',
        language: 'python',
        code: `# FCN-8s semantic segmentation for crop regions
model = build_fcn8s(input_shape=(224, 224, 3), num_classes=1)
model.compile(
    optimizer=SGD(learning_rate=1e-4),
    loss='binary_crossentropy',
    metrics=['accuracy']
)
history = model.fit(X_train, Y_train, epochs=200, batch_size=18)`,
      },
    ],
    references: [
      { label: 'FarmTech Repository', url: 'https://github.com/roboraees07/FarmTech' },
      {
        label: 'Solution Challenge Winners',
        url: 'https://developers.google.com/community/gdsc-solution-challenge/winners',
      },
      { label: 'PEC Capstone Expo', url: 'https://pec-ppdc.org/engineering-capstone-expo/' },
    ],
  },
  'ncai-hec': {
    introduction:
      'HEC-funded smart agriculture at NCAI (PKR 140M+): controlled-environment incubators, drone/sensor data pipelines, and production ML for leaf health and deficiency detection.',
    problemStatement:
      'Pakistan requires data-driven indoor farming to improve yield stability and reduce resource waste.',
    objectives: [
      'Deploy smart incubators with 2× yield targets',
      'Publish controlled-environment leaf analysis research',
      'Production monitoring and iterative model tuning',
    ],
    methodology: [
      'Large-scale dataset collection from incubators and drones',
      'FCN, U-Net, YOLO, ResNet50 experimentation',
      'Edge deployment on Jetson / Raspberry Pi with SQL logging',
    ],
    results:
      '5 incubators deployed; AIAI 2025 publication (DOI 10.1007/978-3-031-97313-0_24); ongoing hybrid YOLOSeg–CNN journal submission.',
    gallery: [
      { title: 'AgriTech System', src: ghMedia(p7, 'cover.png') },
      { title: 'Leaf Segmentation', src: ghMedia(p7, 'FCN For Segmentation.png') },
      { title: 'Deficiency CNN', src: ghMedia(p7, 'CNN for Rice Plant Classification.png') },
    ],
    codeSnippets: [
      {
        title: 'Production inference loop (concept)',
        language: 'python',
        code: `prediction = model.predict(preprocessed_frame)
label = deficiency_classes[np.argmax(prediction)]
log_to_db(timestamp=now(), label=label, incubator_id=device_id)`,
      },
    ],
    references: [
      { label: 'CISNR / NCAI', url: 'https://cisnr.com/' },
      {
        label: 'AIAI 2025 Chapter',
        url: 'https://doi.org/10.1007/978-3-031-97313-0_24',
      },
    ],
  },
  'tubitak-weeding': {
    introduction:
      'TÜBİTAK R&D on chemical-free smart weeding: fiber laser + CV for autonomous weed growing-point localization in greenhouses, tied to MSc thesis on YOLOPosev11 with centralized and federated learning.',
    problemStatement:
      'Manual weeding is labor-intensive; chemical herbicides harm soil health. Precision laser weeding needs sub-centimeter growing-point accuracy.',
    objectives: [
      'Detect and localize weed growing points in real time',
      'Compare centralized vs federated YOLOPosev11 training',
      'Safe laser activation with sensor guardrails',
    ],
    methodology: [
      'Custom dataset annotation in greenhouse conditions',
      'YOLOPosev11 training (centralized + federated experiments)',
      'Jetson/Raspberry Pi inference + laser control integration',
    ],
    results: 'Ongoing research; ensemble and pose models on GitHub; edge pipeline prototypes.',
    gallery: [{ title: 'Precision Agriculture', src: ghMedia(p7, 'cover.png') }],
    codeSnippets: [
      {
        title: 'Federated learning round (concept)',
        language: 'python',
        code: `# Client update on local greenhouse data
local_weights = train_yolopose(local_weed_dataset)
global_weights = federated_average([local_weights, ...other_clients])`,
      },
    ],
    references: [
      {
        label: 'Weed Localization Repo',
        url: 'https://github.com/roboraees07/An-Ensemble-Learning-Approach-for-Precise-Weed-Growing-Point-Localization-in-Agricultural-Fields',
      },
    ],
  },
  'leaf-yoloseg': {
    introduction:
      'Hybrid YOLOSeg–CNN framework for precise leaf segmentation and multi-class nutrient deficiency detection in controlled environments — submitted to Journal of Real-Time Image Processing.',
    objectives: [
      'Accurate leaf mask generation under varying lighting',
      'Multi-class deficiency classification on segmented regions',
    ],
    methodology: [
      'YOLOSeg for segmentation mask generation',
      'CNN head for deficiency classes per leaf instance',
      'Evaluation on NCAI incubator imagery',
    ],
    results: 'Journal submission in progress; extends published AIAI 2025 workshop work.',
    gallery: [
      { title: 'Segmentation', src: ghMedia(p7, 'FCN For Segmentation.png') },
      { title: 'Classification', src: ghMedia(p7, 'CNN for Rice Plant Classification.png') },
    ],
  },
  'lpdr': {
    introduction:
      'Comparative LPDR study on a custom Pakistani license plate dataset under unconstrained lighting, fonts, and angles — 98.41% detection and up to 98.96% recognition accuracy.',
    methodology: [
      'Dataset collection across diverse plate styles',
      'Benchmarked YOLO, Faster R-CNN, EAST, CRNN, CA-CenterNet',
      'GPU training with PyTorch/TensorFlow',
    ],
    results: 'Published MDPI paper (IF 3.7); CA-CenterNet + E2E pipelines most efficient for Pakistan.',
    gallery: [{ title: 'LPDR', src: ghMedia(p4, 'cover.png') }],
    references: [
      { label: 'DOI Publication', url: 'https://doi.org/10.3390/bdcc8110155' },
    ],
  },
  'lungs-seg': {
    introduction:
      'Semantic segmentation of lung regions in medical images using FCN-8s deep learning for clinical decision support.',
    methodology: [
      '60-image labeled dataset (256×256)',
      'FCN-8s + VGG feature extractor; SGD optimizer, 200 epochs',
    ],
    results: 'Accurate lung masks despite limited data; real-time inference potential.',
    gallery: [{ title: 'Lungs Project', src: ghMedia(p1, 'cover.png') }],
    references: [
      {
        label: 'Colab Notebook',
        url: 'https://colab.research.google.com/drive/1dZ8F8PKVJ2f6zhsDT2TAyL3uWXvsJo1u',
      },
    ],
  },
  'road-seg': {
    introduction: 'Semantic segmentation of road scenes for self-driving research prototypes.',
    gallery: [{ title: 'Road Segmentation', src: ghMedia(p8, 'cover.png') }],
  },
  'malware': {
    introduction: 'Machine learning classification of Android malware from app features.',
    gallery: [{ title: 'Malware ML', src: ghMedia(p4, 'cover.png') }],
    references: [
      {
        label: 'GitHub',
        url: 'https://github.com/roboraees07/Classification-of-Android-Malware-Applications',
      },
    ],
  },
  'smart-car': {
    introduction:
      'Arduino smart car with line following, obstacle avoidance, and light-tracking modes for robotics education.',
    gallery: [{ title: 'Smart Car', src: ghMedia(p3, 'cover.png') }],
    references: [
      {
        label: 'GitHub',
        url: 'https://github.com/roboraees07/Arduino-based-line-following-Car',
      },
    ],
    codeSnippets: [
      {
        title: 'Line follow logic (Arduino-style)',
        language: 'cpp',
        code: `void loop() {
  int left = analogRead(L_SENSOR);
  int right = analogRead(R_SENSOR);
  if (left > TH && right < TH) turnLeft();
  else if (right > TH && left < TH) turnRight();
  else forward();
}`,
      },
    ],
  },
  'robotic-arm': {
    introduction: 'Arduino-controlled robotic arm for STEAM workshops and prototyping.',
    gallery: [{ title: 'Robotic Arm', src: ghMedia(p9, 'cover.png') }],
  },
  'tetrax': {
    introduction:
      'TetraX — modified RLC trainer for electronics education; 2nd prize TechFest 2021 among 45 university projects.',
    gallery: [{ title: 'TetraX', src: ghMedia('src/content/projects/project-2', 'cover.png') }],
  },
  'smart-home': {
    introduction: 'IoT home automation with sensors and remote control — Edwardes STEM exhibition.',
    gallery: [{ title: 'Smart Home', src: ghMedia('src/content/projects/project-6', 'cover.png') }],
    references: [
      { label: 'GitHub', url: 'https://github.com/roboraees07/IoT-Based-Home-Automation' },
    ],
  },
  'jazzcash-fraud': {
    introduction:
      'Fraud detection engine for JazzCash using XGBoost, LightGBM, and ensemble methods at Stixor Technologies.',
    methodology: ['Feature engineering on transaction graphs', 'Ensemble model selection and threshold tuning'],
    codeSnippets: [
      {
        title: 'Ensemble prediction (concept)',
        language: 'python',
        code: `proba = 0.4 * xgb.predict_proba(X)[:,1] + 0.6 * lgbm.predict_proba(X)[:,1]
flag_fraud = proba > optimal_threshold`,
      },
    ],
  },
  'toll-anpr': {
    introduction:
      'YOLOv11/v12 number plate recognition integrated with automated toll billing for National Highway Authority.',
    methodology: ['ANPR pipeline', 'Billing system integration', 'Real-time edge inference'],
    gallery: [{ title: 'ANPR CV', src: ghMedia(p4, 'cover.png') }],
  },
}

export function getProjectById(id: string): ProjectDetail | undefined {
  const base = projects.find((p) => p.id === id)
  if (!base) return undefined
  const extra = details[id] ?? {}
  return {
    ...base,
    introduction: extra.introduction ?? base.summary,
    ...extra,
  }
}

export function getAllProjectIds(): string[] {
  return projects.map((p) => p.id)
}
