import { z } from 'zod';

export const postSchema = z.object({
  id: z.number(),
  title: z.record(z.enum(['en', 'ja']), z.string()),
  excerpt: z.record(z.enum(['en', 'ja']), z.string()),
  content: z.record(z.enum(['en', 'ja']), z.string()),
  date: z.string(),
  imageUrl: z.string(),
  slug: z.string(),
  category: z.string(),
  author: z.object({
    name: z.string(),
    avatar: z.string(),
  }),
});

export type Post = z.infer<typeof postSchema>;

export const posts: Post[] = [
  {
    id: 1,
    title: {
      en: 'Latest Mars Exploration Discoveries',
      ja: '火星探査の最新発見',
    },
    excerpt: {
      en: 'Detailed analysis of the latest discoveries made by the Mars Perseverance rover.',
      ja: '火星探査車パーサヴィアランスによる最新の発見について詳しく解説します。',
    },
    content: {
      en: '# Latest Mars Exploration Discoveries\n\nDetailed content in English...',
      ja: '# 火星探査の最新発見\n\n日本語の詳細なコンテンツ...',
    },
    date: '2024-03-26',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9',
    slug: 'mars-discoveries',
    category: 'exploration',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    },
  },
  {
    id: 2,
    title: {
      en: 'New Exoplanet Discovery',
      ja: '新しい系外惑星の発見',
    },
    excerpt: {
      en: "NASA's James Webb Space Telescope discovers a new Earth-like planet.",
      ja: 'NASAのジェイムズ・ウェッブ宇宙望遠鏡が新たな地球型惑星を発見。',
    },
    content: {
      en: '# New Exoplanet Discovery\n\nDetailed content in English...',
      ja: '# 新しい系外惑星の発見\n\n日本語の詳細なコンテンツ...',
    },
    date: '2024-03-25',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
    slug: 'exoplanet-discovery',
    category: 'astronomy',
    author: {
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
  },
];