import { BlogPostCard } from '@/components/blog-post-card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to the Lade Stack
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              A curated collection of thoughts, tutorials, and explorations in
              the world of modern web development.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#latest-posts">View Posts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Featured Post
          </h2>
          <div className="max-w-4xl mx-auto">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-card p-8 rounded-xl shadow-lg border-2 border-transparent transition-all group-hover:border-primary group-hover:shadow-xl">
                <div className="relative h-72 w-full rounded-lg overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    data-ai-hint={featuredPost.coverImageHint}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{featuredPost.date}</p>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center gap-2 font-semibold text-primary">
                    Read Post <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="latest-posts" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Latest Articles
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Exploring the world of web development, one post at a time.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
