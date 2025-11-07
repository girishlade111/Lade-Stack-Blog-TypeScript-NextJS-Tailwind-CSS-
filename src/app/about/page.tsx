import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-me');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8 text-center">
          About Lade Stack
        </h1>
        <Card className="overflow-hidden">
          <div className="md:grid md:grid-cols-3 md:items-start md:gap-8">
            <div className="md:col-span-1 p-6 md:p-8">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt="A portrait of Lade"
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
            </div>
            <div className="md:col-span-2 p-6 pt-0 md:p-8 md:pt-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl">Hello, I'm Lade</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-lg text-muted-foreground">
                <p>
                  Welcome to Lade Stack! I'm a passionate full-stack developer
                  with a love for clean code, elegant design, and sharing
                  knowledge.
                </p>
                <p>
                  This blog is my personal space to explore new technologies,
                  document my learning journey, and discuss topics ranging from
                  frontend frameworks like Next.js and React to backend
                  architecture, database design, and everything in between.
                </p>
                <p>
                  My goal is to create content that is both informative and
                  accessible, helping other developers navigate the
                  ever-evolving landscape of web development. When I'm not
                  coding, you can find me exploring the outdoors or brewing a
                  perfect cup of coffee.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
