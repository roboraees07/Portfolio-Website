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

const p2 = 'src/content/projects/project-2'
const p5 = 'src/content/projects/project-5'
const p6 = 'src/content/projects/project-6'
const p7 = 'src/content/projects/project-7'
const p1 = 'src/content/projects/project-1'
const p3 = 'src/content/projects/project-3'
const p4 = 'src/content/projects/project-4'
const p8 = 'src/content/projects/project-8'
const p9 = 'src/content/projects/project-9'
const p10 = 'src/content/projects/project-10'
const p11 = 'src/content/projects/project-11'
const p12 = 'src/content/projects/project-12'
const p13 = 'src/content/projects/project-13'
const p14 = 'src/content/projects/project-14'

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
      { title: 'CISNR / NCAI Lab', src: ghMedia(p13, 'cover.png') },
      { title: 'Smart Incubator Facility', src: ghMedia(p13, 'cisnr-lab-2.png') },
      { title: 'Leaf Segmentation', src: ghMedia(p13, 'leaf-segmentation.png') },
      { title: 'Nutrient Deficiency CNN', src: ghMedia(p13, 'deficiency-cnn.png') },
      { title: 'Incubator Deployment', src: ghMedia(p13, 'incubator-deployment.png') },
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
    gallery: [
      { title: 'Weed Localization Results', src: ghMedia(p10, 'prediction-vs-ground-truth.png') },
      { title: 'Pipeline Flow', src: ghMedia(p10, 'pipeline-flow.png') },
      { title: 'Segmentation Comparison', src: ghMedia(p10, 'segmentation-comparison.png') },
      { title: 'Baseline vs Ensemble', src: ghMedia(p10, 'baseline-vs-ensemble.png') },
    ],
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
  'ensemble-weed-localization': {
    introduction:
      'Ensemble learning approach for precise weed growing point (stem) localization on the CropAndWeed dataset—Özyeğin University Computer Vision course project (Fall 2025) by Muhammad Raees Azam and Mehak Arshid.',
    problemStatement:
      'Targeted robotic weeding requires sub-pixel growing-point accuracy. The WACV 2023 SSD-300/VGG-16 baseline achieves only 73.1% correct assignment on weed stems.',
    objectives: [
      'Segment weeds at full 1920×1088 resolution with classical ML ensembles',
      'Localize growing points via ML regression + watershed hybrid fusion',
      'Beat state-of-the-art CAR, MED, and normalized error on CropAndWeed',
    ],
    methodology: [
      '12/18 pixel features + 22/29 bbox features with StandardScaler normalization',
      'Segmentation ensemble: LightGBM, Random Forest, SVM, KNN (weighted voting)',
      'Localization ensemble: separate X/Y regressors blended with watershed (α = 0.7)',
    ],
    results:
      '94.82% CAR (+21.72%), 12.73 px MED (−56.3%), 12.33% NE (−51.6%) vs baseline. Full notebooks, trained models, and methodology docs on GitHub.',
    gallery: [
      { title: 'Complete Pipeline Flow', src: ghMedia(p10, 'pipeline-flow.png') },
      { title: 'Segmentation Model Comparison', src: ghMedia(p10, 'segmentation-comparison.png') },
      { title: 'Baseline vs Ensemble', src: ghMedia(p10, 'baseline-vs-ensemble.png') },
      { title: 'Prediction vs Ground Truth', src: ghMedia(p10, 'prediction-vs-ground-truth.png') },
      { title: 'Results Analysis', src: ghMedia(p10, 'results-analysis.png') },
    ],
    codeSnippets: [
      {
        title: 'Ensemble localization fusion (concept)',
        language: 'python',
        code: `# Weighted ML predictions + watershed hybrid
x_ml = (w_lgb * x_lgb + w_rf * x_rf + w_svm * x_svm) / w_sum
x_final = 0.7 * x_ml + 0.3 * x_watershed`,
      },
    ],
    references: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/roboraees07/An-Ensemble-Learning-Approach-for-Precise-Weed-Growing-Point-Localization-in-Agricultural-Fields',
      },
      {
        label: 'CropAndWeed Dataset (WACV 2023)',
        url: 'https://openaccess.thecvf.com/content/WACV2023/html/Steininger_The_CropAndWeed_Dataset_A_Multi-Modal_Learning_Approach_for_Efficient_Crop_WACV_2023_paper.html',
      },
    ],
  },
  'fed-mae-leafnet': {
    introduction:
      'Federated learning framework with self-supervised MAE pretraining for label-efficient leaf disease classification on LeafNetBinary5—deep learning project at Özyeğin University by Mehak Arshid and Muhammad Raees Azam.',
    problemStatement:
      'Leaf disease data is siloed across farms and institutions; centralized training is infeasible and non-IID client splits degrade federated scratch models.',
    objectives: [
      'Adapt Fed-MAE (SSL-FL) to binary healthy vs. diseased LeafNet across 5 clients',
      'Benchmark scratch, ImageNet init, and federated SSL under Dirichlet heterogeneity',
      'Maintain high accuracy as client data becomes more imbalanced (α down to 0.5)',
    ],
    methodology: [
      'ViT-B/16 backbone with FedAvg (1 local epoch, 5 clients)',
      'Dirichlet non-IID splits (α ∈ {100, 1.0, 0.5}) aligned with Yan et al. SSL-FL',
      'Federated MAE pretrain (1600 rounds) + federated fine-tuning per split',
    ],
    results:
      'Fed-MAE: 99.07% central, 98.57% / 98.23% / 98.30% on splits 1–3—outperforming scratch (88–92%) and ImageNet BEiT under heterogeneity. Reproducible scripts and parsed logs on GitHub.',
    gallery: [
      { title: 'Federated SSL Pipeline', src: ghMedia(p11, 'cover.png') },
      { title: 'Accuracy vs Heterogeneity', src: ghMedia(p11, 'accuracy-vs-heterogeneity.png') },
      { title: 'Client Composition (Split 3)', src: ghMedia(p11, 'split3-client-composition.png') },
      { title: 'Per-Class Recall', src: ghMedia(p11, 'per-class-recall.png') },
    ],
    codeSnippets: [
      {
        title: 'Federated averaging round (concept)',
        language: 'python',
        code: `# FedAvg after local MAE pretrain on each client
for client in clients:
    local_weights[client] = train_one_epoch(model, client_data)
global_weights = weighted_average(local_weights)`,
      },
    ],
    references: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/roboraees07/Federated-Learning-Framework-with-Self-Supervised-Pretraining-on-LeafNet',
      },
      {
        label: 'Fed-MAE Paper (Yan et al.)',
        url: 'https://arxiv.org/abs/2205.08576',
      },
      {
        label: 'SSL-FL Codebase',
        url: 'https://github.com/rui-yan/SSL-FL',
      },
    ],
  },
  'medical-vqa-qwen2vl': {
    introduction:
      'Complete standalone multimodal medical vision question answering system—Qwen2-VL fine-tuned with LoRA on the Medical Vision LLM Dataset, published as a public Kaggle notebook by Engr.M. Raees Azam.',
    problemStatement:
      'Clinical imaging workflows need models that answer diagnostic questions from medical images, but full VLM fine-tuning is memory-heavy and hard to reproduce across platforms.',
    objectives: [
      'Answer diagnostic questions from medical images using Qwen2-VL',
      'Fine-tune efficiently with LoRA on Medical Vision LLM Dataset splits',
      'Evaluate with BLEU, ROUGE, F1, and exact-match metrics',
    ],
    methodology: [
      'Auto-detect Kaggle, Colab, or local environment; download model/dataset if missing',
      'Qwen2-VL-2B/7B-Instruct with PEFT LoRA (r=16, α=32) on vision-language layers',
      'Custom preprocessing collator, gradient checkpointing, and fp16 training on T4 GPU',
    ],
    results:
      'Public Kaggle notebook with end-to-end training on 3,834 training and 959 validation samples (images, questions, answers, modality, body part). Reproducible on free Kaggle GPU.',
    gallery: [
      { title: 'Medical VQA Sample (X-ray)', src: ghMedia(p12, 'cover.png') },
      { title: 'Chest X-ray VQA', src: ghMedia(p12, 'sample-1.png') },
      { title: 'Modality Question', src: ghMedia(p12, 'sample-2.png') },
      { title: 'Clinical Findings', src: ghMedia(p12, 'sample-3.png') },
    ],
    codeSnippets: [
      {
        title: 'LoRA config for Qwen2-VL (concept)',
        language: 'python',
        code: `lora_config = LoraConfig(
    r=16, lora_alpha=32,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj",
                    "gate_proj", "up_proj", "down_proj"],
    task_type="CAUSAL_LM",
)
model = get_peft_model(model, lora_config)`,
      },
    ],
    references: [
      {
        label: 'Kaggle Notebook',
        url: 'https://www.kaggle.com/code/raeesazam/notebookbc0be64ed5',
      },
      {
        label: 'Medical Vision LLM Dataset',
        url: 'https://huggingface.co/datasets/robailleo/medical-vision-llm-dataset',
      },
      {
        label: 'Qwen2-VL Model',
        url: 'https://huggingface.co/Qwen/Qwen2-VL-2B-Instruct',
      },
    ],
  },
  'leaf-yoloseg': {
    introduction:
      'Deep learning framework integrating YOLOSeg v8 for precise leaf segmentation and a custom CNN for multi-class nutrient deficiency identification in controlled environments — published at AIAI 2025 (IFIP WG 12.5, Chapter 24).',
    objectives: [
      'Isolate individual leaves with bounding boxes, objectness scores, and segmentation masks',
      'Classify nutrient deficiencies (B, Ca, Fe, Mg, Mn, K, S, Zn, healthy) on segmented leaf regions',
      'Deliver real-time inference suitable for smart-incubator and field-edge deployment',
    ],
    methodology: [
      'YOLOSeg v8 trained for instance segmentation on controlled-environment crop imagery',
      'Custom CNN classifier on segmented leaf patches for deficiency categories',
      'Evaluation on AgriPK-style datasets with Dice, mAP50, precision, recall, and inference-time benchmarks',
    ],
    results:
      'YOLOSeg v8: 97.18% Dice/F1, 95.86% precision, 98.20% recall, 97.80% box accuracy, 98.00% mAP50, 13.5 ms/image. CNN deficiency classifier: 82.40% test accuracy, 82.89% precision.',
    gallery: [
      { title: 'Fig. 5 — Deficiency Training Dataset', src: ghMedia(p14, 'fig5-deficiency-training-dataset.png') },
      { title: 'Fig. 6 — System Block Diagram', src: ghMedia(p14, 'fig6-system-block-diagram.png') },
      { title: 'Segmentation Pipeline', src: ghMedia(p14, 'fig-segmentation-pipeline.png') },
      { title: 'Controlled Environment Deployment', src: ghMedia(p14, 'fig-controlled-environment.png') },
    ],
    references: [
      {
        label: 'AIAI 2025 Chapter (Springer)',
        url: 'https://doi.org/10.1007/978-3-031-97313-0_24',
      },
      {
        label: 'Conference Abstract',
        url: 'https://repository.ifipaiai.org/2025/abstr/25ec09480.html',
      },
    ],
  },
  'lpdr': {
    introduction:
      'Comparative study on license plate detection and recognition in unconstrained Pakistani traffic — varying illumination, nonstandard plate templates, and diverse English fonts. Experiments on an author-collected dataset of 16,521 images with multi-styled plates.',
    objectives: [
      'Benchmark LP detection with Faster-RCNN and end-to-end (E2E) methods',
      'Compare LP recognition using DNN and CA-CenterNet architectures',
      'Analyze computational complexity across image resolutions from 1550×900 down to 600×400 pixels',
    ],
    methodology: [
      'Custom Pakistani vehicle dataset with cars, motorcycles, pedestrians, and visible plates',
      'Detection pool: Faster-RCNN with LPLM vs E2E single-pass detector',
      'Recognition pool: DNN character recognition vs CA-CenterNet corner-aware recognition',
      'Mean accuracy and execution-time analysis across resolutions',
    ],
    results:
      'Detection: Faster-RCNN 98.35%, E2E 98.48% (mean 98.41%). Recognition: DNN 98.90%, CA-CenterNet 98.96%. E2E and CA-CenterNet are the most efficient detection and recognition methods respectively.',
    gallery: [
      { title: 'Fig. 1 — Nonuniform LP Samples', src: ghMedia(p5, 'fig1-nonuniform-lp-samples.jpeg') },
      { title: 'Fig. 2 — Dataset Samples', src: ghMedia(p5, 'fig2-dataset-samples.jpeg') },
      { title: 'Fig. 3 — LP Detection (Faster-RCNN & E2E)', src: ghMedia(p5, 'fig3-lp-detection.jpeg') },
      { title: 'Fig. 4 — LP Recognition (DNN & CA-CenterNet)', src: ghMedia(p5, 'fig4-lp-recognition.jpeg') },
      { title: 'Fig. 5 — Computational Complexity', src: ghMedia(p5, 'fig5-computational-complexity.png') },
      { title: 'Fig. 6 — Mean & Standard Deviation', src: ghMedia(p5, 'fig6-mean-std-comparison.png') },
      { title: 'Fig. 7 — Challenging LP Cases', src: ghMedia(p5, 'fig7-challenging-cases.png') },
    ],
    references: [
      { label: 'MDPI Publication', url: 'https://doi.org/10.3390/bdcc8110155' },
      { label: 'Article Page', url: 'https://www.mdpi.com/2504-2289/8/11/155' },
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
    gallery: [
      { title: 'Lung Segmentation', src: ghMedia(p1, 'cover.png') },
      { title: 'Architecture Diagram', src: ghMedia(p1, 'diagram.png') },
      { title: 'Dataset Samples', src: ghMedia(p1, 'dataset-view.png') },
      { title: 'Segmentation Results', src: ghMedia(p1, 'results-1.png') },
      { title: 'Mask Overlay', src: ghMedia(p1, 'results-2.png') },
    ],
    references: [
      {
        label: 'Colab Notebook',
        url: 'https://colab.research.google.com/drive/1dZ8F8PKVJ2f6zhsDT2TAyL3uWXvsJo1u',
      },
    ],
  },
  'road-seg': {
    introduction:
      'Self-driving car road image segmentation using deep learning to classify drivable surfaces, lanes, and obstacles—built as a computer vision research prototype by Engr.M. Raees Azam.',
    problemStatement:
      'Autonomous vehicles require pixel-accurate understanding of road topology under varying lighting and weather.',
    objectives: [
      'Multi-class semantic segmentation on public road-scene datasets',
      'Evaluate encoder–decoder architectures for real-time feasibility',
      'Produce visual benchmarks for capstone and portfolio demonstration',
    ],
    methodology: [
      'Dataset preprocessing and train/validation splits',
      'CNN / FCN-style segmentation training in Python',
      'Qualitative mask overlay evaluation on test frames',
    ],
    results:
      'Demonstrated reliable road vs background separation on benchmark scenes; foundation for later YOLO and production ANPR work at Stixor.',
    gallery: [
      { title: 'Road Segmentation', src: ghMedia(p8, 'cover.png') },
      { title: 'Road Dataset', src: ghMedia(p8, 'Road Dataset.png') },
      { title: '12-Class Labels', src: ghMedia(p8, '12 classes.png') },
      { title: 'FCN-8 Architecture', src: ghMedia(p8, 'FCN8.png') },
      { title: 'Segmentation Results', src: ghMedia(p8, 'RESULTS-1.png') },
      { title: 'Mask Overlay', src: ghMedia(p8, 'RESULTS-2.png') },
    ],
  },
  'malware': {
    introduction:
      'Machine learning classification of Android malware from static/dynamic app features—research project by Engr.M. Raees Azam with reproducible Python pipeline on GitHub.',
    problemStatement:
      'Rapid growth of malicious APKs requires automated screening beyond signature-only antivirus.',
    objectives: [
      'Extract discriminative permission and API-call features',
      'Train and compare classical ML classifiers',
      'Report precision/recall on held-out malware families',
    ],
    methodology: [
      'Dataset cleaning and label balancing',
      'Scikit-learn pipelines with cross-validation',
      'Error analysis on false positives/negatives',
    ],
    results:
      'Demonstrated strong separation between benign and malware classes on benchmark features; codebase published for peer review.',
    gallery: [
      { title: 'Malware Classification', src: ghMedia(p4, 'cover.png') },
      { title: 'Feature Heatmap', src: ghMedia(p4, 'Heatmap.png') },
      { title: 'Dataset Balance', src: ghMedia(p4, 'dataset Balance.png') },
      { title: 'Model Results', src: ghMedia(p4, 'results.png') },
    ],
    references: [
      {
        label: 'GitHub',
        url: 'https://github.com/roboraees07/Classification-of-Android-Malware-Applications',
      },
    ],
  },
  'smart-car': {
    introduction:
      'Arduino smart car with line following, obstacle avoidance, and light-tracking modes—hands-on robotics education project by Engr.M. Raees Azam.',
    problemStatement:
      'Introductory robotics courses need a single affordable kit demonstrating sensors, control, and autonomous behavior.',
    objectives: [
      'Implement line-follow, obstacle avoid, and light-tracking modes',
      'Tune PID/threshold parameters for repeatable track runs',
      'Publish wiring diagrams and firmware for student replication',
    ],
    methodology: [
      'IR sensor array for line detection; ultrasonic for obstacles',
      'Arduino C++ state machine for mode switching',
      'Iterative calibration on competition-style tracks',
    ],
    results: 'Stable multi-mode operation; open-source repo used in GDSC and university robotics labs.',
    gallery: [
      { title: 'Smart Car', src: ghMedia(p3, 'cover.png') },
      { title: 'Block Diagram', src: ghMedia(p3, 'Block Diagram.png') },
      { title: 'Obstacle Avoidance', src: ghMedia(p3, 'Obstacle Avoidance.png') },
      { title: 'Light Tracking', src: ghMedia(p3, 'Light Following.png') },
      { title: 'Arduino Pinout', src: ghMedia(p3, 'arduino-uno-pinout.jpg') },
    ],
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
    introduction:
      'Arduino-based programmable robotic arm for STEAM education, servo sequencing, and introductory kinematics—used in GDSC and university robotics outreach by Engr.M. Raees Azam.',
    problemStatement:
      'Students need affordable, hands-on hardware to learn embedded control before advanced ROS or Jetson projects.',
    objectives: [
      'Design 4-DOF arm with servo-driven joints',
      'Program pick-and-place motion sequences in Arduino C++',
      'Document assembly for workshop replication',
    ],
    methodology: [
      'Mechanical CAD and laser-cut / 3D-printed structural parts',
      'PWM servo calibration and serial command interface',
      'Iterative testing of gripper torque and reach limits',
    ],
    results:
      'Deployed in multiple teaching sessions; reliable demo unit for robotics clubs and GDSC hardware tracks.',
    gallery: [
      { title: 'Robotic Arm', src: ghMedia(p9, 'cover.png') },
      { title: 'Hardware Model', src: ghMedia(p9, 'Hardware Model.png') },
      { title: 'Block Diagram', src: ghMedia(p9, 'Block Diagram-1.png') },
      { title: 'Circuit Diagram', src: ghMedia(p9, 'Circuit Diagram.png') },
      { title: 'Simulation Model', src: ghMedia(p9, 'semulation-model.png') },
      { title: 'Simulation Results', src: ghMedia(p9, 'Simulation Results.png') },
    ],
  },
  'tetrax': {
    introduction:
      'TetraX — modified RLC trainer for electronics education; 2nd prize TechFest Fall 2021 (45 university contestants). Designed and demonstrated by Engr.M. Raees Azam.',
    problemStatement:
      'Undergraduate labs need intuitive trainers that visualize RLC transient response without expensive bench equipment.',
    objectives: [
      'Build modular RLC board with safe student operation',
      'Compare theoretical vs measured waveforms',
      'Present at inter-university TechFest exhibition',
    ],
    methodology: [
      'Circuit simulation in Proteus before PCB/trainer assembly',
      'Component selection for clear oscilloscope demos',
      'Exhibition-ready documentation and live measurements',
    ],
    results: '2nd Prize — TechFest Fall 2021; adopted as teaching aid for sophomore electronics labs.',
    gallery: [
      { title: 'TetraX Trainer', src: ghMedia(p2, 'cover.png') },
      { title: 'Final Build', src: ghMedia(p2, 'Final-1.png') },
      { title: 'Exhibition Demo', src: ghMedia(p2, 'Final-2.png') },
      { title: 'Circuit Design', src: ghMedia(p2, 'Circuit Design.png') },
      { title: 'Circuit Simulation', src: ghMedia(p2, 'Circuit Simulation.png') },
      { title: 'PCB Fabrication', src: ghMedia(p2, 'PCB Fabrication.png') },
    ],
  },
  'smart-home': {
    introduction:
      'IoT smart home automation with environmental sensors, relay actuation, and remote monitoring—Edwardes STEM Society exhibition project by Engr.M. Raees Azam.',
    problemStatement:
      'Residential energy waste and lack of remote visibility into home appliance states.',
    objectives: [
      'Sense temperature, humidity, and motion across rooms',
      'Automate lighting and fan relays from sensor rules',
      'Provide simple mobile/web dashboard for homeowners',
    ],
    methodology: [
      'Arduino/ESP-class microcontrollers with MQTT or HTTP telemetry',
      'Relay driver circuits for loads within safe current limits',
      'Dashboard prototyping for status and manual override',
    ],
    results:
      'Successful STEM expo demo; open-sourced on GitHub for reproducible student IoT capstones.',
    gallery: [
      { title: 'Smart Home System', src: ghMedia(p6, 'cover.png') },
      { title: 'IoT Project Banner', src: ghMedia(p6, 'banner.jfif') },
    ],
    references: [
      { label: 'GitHub', url: 'https://github.com/roboraees07/IoT-Based-Home-Automation' },
    ],
  },
  'jazzcash-fraud': {
    introduction:
      'Production fraud detection for JazzCash digital transactions at Stixor Technologies—ensemble ML (XGBoost, LightGBM) engineered by Engr.M. Raees Azam for real fintech scale and class imbalance.',
    problemStatement:
      'Mobile money platforms face evolving fraud patterns; rule-only systems generate high false positives and miss novel attacks.',
    objectives: [
      'Detect fraudulent transactions with high recall at acceptable precision',
      'Engineer graph and temporal features from production logs',
      'Deploy threshold-tuned models with monitoring hooks',
    ],
    methodology: ['Feature engineering on transaction graphs', 'Ensemble model selection and threshold tuning'],
    results:
      'Improved fraud capture vs baseline rules while controlling alert fatigue; pipeline integrated into Stixor delivery workflow.',
    gallery: [
      { title: 'Feature Heatmap', src: ghMedia(p4, 'Heatmap.png') },
      { title: 'Dataset Balance', src: ghMedia(p4, 'dataset Balance.png') },
      { title: 'Ensemble Results', src: ghMedia(p4, 'results.png') },
    ],
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
      'Smart toll collection with YOLOv11/v12 ANPR, OCR, and automated NHA billing integration—production computer vision system led by Engr.M. Raees Azam at Stixor Technologies.',
    problemStatement:
      'Manual toll booths cause congestion; Pakistan highways need accurate, fast plate recognition under motion blur and lighting variance.',
    objectives: [
      'End-to-end ANPR from camera frame to billing record',
      'Benchmark YOLOv11/v12 vs legacy detectors on local plates',
      'Meet latency targets for highway lane cameras',
    ],
    methodology: ['ANPR pipeline', 'Billing system integration', 'Real-time edge inference'],
    results:
      'Production-ready detection + recognition stack; reusable CV module for other Stixor transport clients.',
    gallery: [
      { title: 'LP Detection Results', src: ghMedia(p5, 'fig3-lp-detection.jpeg') },
      { title: 'LP Recognition Results', src: ghMedia(p5, 'fig4-lp-recognition.jpeg') },
      { title: 'Pakistani Plate Samples', src: ghMedia(p5, 'fig1-nonuniform-lp-samples.jpeg') },
      { title: 'Challenging Plate Cases', src: ghMedia(p5, 'fig7-challenging-cases.png') },
    ],
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
