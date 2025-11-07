import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col"
      aria-label={`Read more about ${post.title}`}
    >
      <Card className="flex h-full flex-col overflow-hidden rounded-lg border-2 transition-all group-hover:border-primary group-hover:shadow-lg">
        <div className="relative h-52 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={post.coverImageHint}
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2 text-xl font-bold leading-tight">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="line-clamp-3 text-muted-foreground">
            {post.description}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{post.author.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">{post.author}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
