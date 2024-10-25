export const SITE_CONFIG = {
  name: 'Space Explorer',
  description: 'Discover the latest news and insights about space exploration',
  links: {
    youtube: 'https://youtube.com/@SpaceExplorer',
    twitter: 'https://twitter.com/SpaceExplorer',
    github: 'https://github.com/SpaceExplorer',
  },
} as const;

export const CATEGORIES = [
  { id: 'news', 
    label: { en: 'Latest News', ja: '最新ニュース' },
    icon: 'Newspaper'
  },
  { 
    id: 'exploration',
    label: { en: 'Space Exploration', ja: '宇宙探査' },
    icon: 'Rocket'
  },
  { 
    id: 'astronomy',
    label: { en: 'Astronomy', ja: '天文学' },
    icon: 'Stars'
  },
  { 
    id: 'technology',
    label: { en: 'Space Tech', ja: '宇宙技術' },
    icon: 'Cpu'
  },
] as const;