import { ghMedia } from '../utils/assets'
import { links } from './site'

export type Achievement = {
  id: string
  title: string
  description: string
  year?: string
  verifyUrl?: string
  image?: string
}

export const achievementsList: Achievement[] = [
  {
    id: 'pec-capstone',
    title: '2nd Prize — KP Engineering Capstone Expo 2024',
    description:
      'Acknowledged by Pakistan Engineering Council among 100+ shortlisted projects. Sustainable AgriTech under UN SDGs.',
    year: '2024',
    verifyUrl: 'https://pec-ppdc.org/engineering-capstone-expo/',
    image: ghMedia('src/content/Achievemnets/PEC Fully Funded Project.jfif'),
  },
  {
    id: 'solution-challenge',
    title: 'Google Solution Challenge 2024 — Global Top 100',
    description:
      'Top 100 finalist worldwide representing AgriTech among ~5000 submissions.',
    year: '2024',
    verifyUrl: 'https://developers.google.com/community/gdsc-solution-challenge/winners',
    image: ghMedia('src/content/Achievemnets/Solution Challenge 2024 Top 100 Finalist.jfif'),
  },
  {
    id: 'pec-fyp-fund',
    title: 'PEC Fully Funded Final Year Project',
    description: 'AgriTech funded ~PKR 0.2M by Pakistan Engineering Council (2023–2024).',
    year: '2024',
    image: ghMedia('src/content/Achievemnets/pec-acknowledge.png'),
  },
  {
    id: 'gdsc-graduation',
    title: 'Guest Speaker — GDSC Global Graduation 2024',
    description: 'Invited by Google for Developers as guest speaker for global GDSC leads graduation.',
    year: '2024',
    verifyUrl:
      'https://gdsc.community.dev/events/details/developer-student-clubs-gdsc-global-presents-graduation-of-2023-2024-gdsc-leads/',
    image: ghMedia('src/content/Achievemnets/GDSC Graduation Ceremony.jfif'),
  },
  {
    id: 'gdsc-lead',
    title: 'Google Developer Student Clubs Lead 2023–2024',
    description: 'Selected by Google SAF region; managed 500+ members at COMSATS Abbottabad.',
    year: '2024',
    verifyUrl: links.gdgOnCampus,
    image: ghMedia('src/content/Achievemnets/GDSC OnBoarding Swags.jfif'),
  },
  {
    id: 'build-with-ai',
    title: 'Build with AI Hackathon — Pakistan (Gemini)',
    description:
      'Only Build with AI hackathon in Pakistan; appreciation from Google for Developers.',
    year: '2024',
    verifyUrl:
      'https://gdsc.community.dev/events/details/developer-student-clubs-comsats-university-islamabad-abbottabad-pakistan-presents-build-with-ai-hackathon-abbottabad/',
    image: ghMedia('src/content/Achievemnets/BwAI- Google for Developers.jfif'),
  },
  {
    id: 'cloud-seekho',
    title: 'Google Cloud Seekho Season 05 — Top Scorer',
    description: '11,450 points · 15+ Generative AI badges · Google Cloud swags.',
    year: '2024',
    verifyUrl: 'https://developers.google.com/profile/u/115769942136393563919',
    image: ghMedia('src/content/Achievemnets/Google Cloud seekho.jpeg'),
  },
  {
    id: 'gdg-lead',
    title: 'Best GDSC Lead — AI DevFest\'23 (GDG Cloud Islamabad)',
    description: 'Recognized by GDG Cloud Islamabad for leadership in AI track.',
    year: '2023',
    image: ghMedia('src/content/Achievemnets/Lead Recognition by GDG Cloud Islamabad.jpeg'),
  },
  {
    id: 'gct-speaker',
    title: 'Resource Person — Arduino 101 Workshop (GCT Abbottabad)',
    description: 'Guest speaker training students on Arduino fundamentals.',
    year: '2023',
    verifyUrl:
      'https://web.facebook.com/permalink.php?story_fbid=pfbid0ApAWiqR83Aj8mebZWD4ynE9JLhesNniRbuzMP9fe7WcgeRMb1wK7GPdzrDwXDhdBl&id=100075626425028',
    image: ghMedia('src/content/Achievemnets/Guest Speaker at Govt College Abbottabad.jfif'),
  },
  {
    id: 'techfest',
    title: '2nd Prize — TechFest Fall 2021',
    description: 'Inter-university exhibition for TetraX modified RLC trainer (45 contestants).',
    year: '2021',
    image: ghMedia('src/content/Achievemnets/2nd-prize-tech-fest.png'),
  },
  {
    id: 'nasa',
    title: 'NASA Space Apps Challenge 2019 — Peshawar Winner',
    description: 'Team RaheQamar · Global nominee award winner.',
    year: '2019',
    image: ghMedia('src/content/Achievemnets/NASA Space App Challenge 2019 Peshawar Winner.jpeg'),
  },
  {
    id: 'startup-weekend',
    title: '3rd Prize — Startup Weekend Peshawar 2017',
    description: 'MeatInspector business model at Basecamp Peshawar 2.0.',
    year: '2017',
    verifyUrl: 'https://technologytimes.pk/2017/09/29/headline-startup-weekend-comes-to-an-end/',
    image: ghMedia('src/content/Achievemnets/Startup Weekend Peshawar 2017.jpg'),
  },
  {
    id: 'kp-expo',
    title: 'KP Capstone Expo 2024 — PEC Showcase',
    description: 'Presented funded engineering capstone to provincial expo audience.',
    year: '2024',
    image: ghMedia('src/content/Achievemnets/KP Capstone Expo.jfif'),
  },
  {
    id: 'aieseekho',
    title: 'AISeekho Season 6 — 500+ Students Trained',
    description: 'Guest speaker trainer for Google for Developers across Pakistan.',
    year: '2024',
    image: ghMedia('src/content/Achievemnets/gdsc-ack.png'),
  },
  {
    id: 'edwardes-gold',
    title: 'Double Gold Medal — Edwardes College',
    description: 'Best graduate · Computer Science department · Student Talent Award 2018.',
    year: '2019',
  },
  {
    id: 'ignite',
    title: 'NGIRI-Ignite ICT Funding Winner',
    description: 'Additional PKR 98,000 Ignite funding for AgriTech development.',
    year: '2024',
  },
  {
    id: 'pasha',
    title: 'P@SHA ICT Award 2024 — Shortlisted',
    description: 'National IT industry recognition for AgriTech innovation.',
    year: '2024',
  },
  {
    id: 'multiomics-design',
    title: '3rd Prize — Multiomics Logo Design Competition',
    description: 'Creative design competition award (2020).',
    year: '2020',
  },
]
