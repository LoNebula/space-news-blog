import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { posts } from "@/lib/posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { CATEGORIES } from "@/lib/constants";
import * as Icons from "lucide-react";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.id === post.category);
  const Icon = category ? Icons[category.icon as keyof typeof Icons] : Icons.File;

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar>
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">{post.author.name}</p>
          <p className="text-sm text-muted-foreground">
            {format(new Date(post.date), 'PPP', {
              locale: lang === 'ja' ? ja : undefined,
            })}
          </p>
        </div>
      </div>
      
      <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title[lang as keyof typeof post.title]}
          fill
          className="object-cover"
          priority
        />
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon className="h-4 w-4" />
          <span className="text-sm text-muted-foreground">
            {category?.label[lang as keyof typeof category.label]}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {post.title[lang as keyof typeof post.title]}
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          {post.content[lang as keyof typeof post.content]}
        </div>
      </Card>
    </article>
  );
}