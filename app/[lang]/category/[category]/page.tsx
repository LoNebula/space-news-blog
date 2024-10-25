"use client";

import { BlogCard } from '@/components/blog-card';
import { posts } from '@/lib/posts';
import { CATEGORIES } from '@/lib/constants';
import { Pagination } from '@/components/pagination';
import { useState } from 'react';

const POSTS_PER_PAGE = 10;

export default function CategoryPage({
  params: { lang, category },
}: {
  params: { lang: string; category: string };
}) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const categoryPosts = posts
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE);
  const currentPosts = categoryPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const categoryInfo = CATEGORIES.find(c => c.id === category);

  return (
    <div className="space-y-8 py-8">
      <h1 className="text-3xl font-bold">
        {categoryInfo?.label[lang as keyof typeof categoryInfo.label]}
      </h1>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} lang={lang} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}