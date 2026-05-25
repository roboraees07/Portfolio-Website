import { ghMedia } from '../utils/assets'
import { links } from './site'

export type CreativeWork = {
  id: string
  title: string
  category: string
  description: string
  tools: string[]
  image?: string
  link?: string
}

export const creativeWorks: CreativeWork[] = [
  {
    id: 'behance-portfolio',
    title: 'Digital Design Portfolio',
    category: 'Brand & Visual Design',
    description:
      'Logos, event posters, social campaigns, and technical society branding across IEEE, IET, GDSC, and hackathons.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW'],
    link: links.behance,
  },
  {
    id: 'gdsc-branding',
    title: 'GDSC Event & Campaign Graphics',
    category: 'Community Design',
    description:
      'Visual assets for Build with AI hackathon, onboarding, and chapter events — consistent Google Developer branding.',
    tools: ['Illustrator', 'Photoshop'],
    image: ghMedia('src/content/Achievemnets/GDSC OnBoarding Swags.jfif'),
    link: links.gdgOnCampus,
  },
  {
    id: 'ieee-media',
    title: 'IEEE Chapter Media Kit',
    category: 'Society Media',
    description:
      'Posters, covers, and promotional layouts as IEEE Media Head (2020–2022).',
    tools: ['Illustrator', 'Photoshop', 'CorelDRAW'],
    image: ghMedia('src/content/Experience/IEEE.png'),
  },
  {
    id: 'multiomics-logo',
    title: 'Multiomics Logo Design — 3rd Prize',
    category: 'Competition',
    description: 'Award-winning logo design in university creative competition (2020).',
    tools: ['Illustrator', 'CorelDRAW'],
  },
  {
    id: 'pec-expo',
    title: 'PEC Capstone Expo Presentation Design',
    category: 'Engineering Communication',
    description:
      'Visual storytelling for AgriTech capstone — banners, slides, and expo materials for KP Capstone Expo 2024.',
    tools: ['Photoshop', 'Illustrator'],
    image: ghMedia('src/content/Achievemnets/KP Capstone Expo.jfif'),
    link: 'https://pec-ppdc.org/engineering-capstone-expo/',
  },
  {
    id: 'solution-challenge',
    title: 'Google Solution Challenge Submission Assets',
    category: 'Product Design',
    description: 'Demo videos, thumbnails, and pitch visuals for global Solution Challenge entry.',
    tools: ['Photoshop', 'Premiere concepts'],
    image: ghMedia('src/content/Achievemnets/Solution Challenge 2024 Top 100 Finalist.jfif'),
    link: 'https://developers.google.com/community/gdsc-solution-challenge/winners',
  },
  {
    id: 'roboleo',
    title: 'RoboLeo Brand & Web Presence',
    category: 'Personal Brand',
    description: 'Creative direction for robotics/AI personal brand and portfolio experiences.',
    tools: ['Illustrator', 'Figma concepts', 'HTML/CSS'],
    link: links.roboleo,
  },
]

export const designSkills = [
  'Adobe Illustrator',
  'Adobe Photoshop',
  'CorelDRAW',
  'Logo Design',
  'Poster & Banner Design',
  'Social Media Creatives',
  'Technical Presentation Design',
]
