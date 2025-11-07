import { BlogPostCard } from '@/components/blog-post-card';
import { blogPosts } from '@/lib/data';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Lade Stack
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Exploring the world of web development, one post at a time.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
