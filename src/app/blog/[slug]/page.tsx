import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | Lade Stack Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{post.author.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{post.author}</p>
              <p className="text-sm">{post.date}</p>
            </div>
          </div>
        </header>

        <div className="relative w-full h-72 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={post.coverImageHint}
            priority
          />
        </div>

        <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-6">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('npx') || paragraph.startsWith('cd')) {
              return (
                <pre key={index} className="bg-muted p-4 rounded-md text-sm font-mono overflow-x-auto">
                  <code>{paragraph}</code>
                </pre>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </article>
    </div>
  );
}
