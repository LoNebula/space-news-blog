"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CATEGORIES } from '@/lib/constants';
import * as Icons from 'lucide-react';
import { Post } from '@/lib/posts';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  post: Post;
  lang: string;
}

export function BlogCard({ post, lang }: BlogCardProps) {
  const formattedDate = format(
    new Date(post.date),
    'PPP',
    { locale: lang === 'ja' ? ja : undefined }
  );

  const category = CATEGORIES.find((c) => c.id === post.category);
  const Icon = category ? Icons[category.icon as keyof typeof Icons] : Icons.File;

  return (
    <Link href={`/${lang}/blog/${post.slug}`} className="block group">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 border-primary/10">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title[lang as keyof typeof post.title]}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <Badge variant="secondary" className="w-fit">
            <Icon className="h-4 w-4 mr-2" />
            {category?.label[lang as keyof typeof category.label]}
          </Badge>
          <h2 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {post.title[lang as keyof typeof post.title]}
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {post.excerpt[lang as keyof typeof post.excerpt]}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">{post.author.name}</span>
          </div>
          <time className="text-sm text-muted-foreground">{formattedDate}</time>
        </CardFooter>
      </Card>
    </Link>
  );
}