import { BlogCard } from '@/components/blog-card';
import { FeaturedPost } from '@/components/featured-post';
import { getDictionary } from '@/lib/dictionary';
import { posts } from '@/lib/posts';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  
  // Sort posts by date in descending order
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get the latest post for the featured section
  const featuredPost = sortedPosts[0];
  // Get the rest of the posts for the grid
  const regularPosts = sortedPosts.slice(1);

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4 py-12">
        <div className="space-gradient p-8 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            {dict.home.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            {dict.home.description}
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="container max-w-6xl">
          <FeaturedPost post={featuredPost} lang={lang} />
        </section>
      )}
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {regularPosts.map((post) => (
          <BlogCard key={post.id} post={post} lang={lang} />
        ))}
      </div>
    </div>
  );
}