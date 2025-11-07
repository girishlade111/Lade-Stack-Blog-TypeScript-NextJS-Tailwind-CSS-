'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold">Lade Stack</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/admin"
              className={cn(
                'text-muted-foreground/70 transition-colors hover:text-primary',
                pathname === '/admin' ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              Admin
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-6">
                <Link href="/" className="mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="font-bold">Lade Stack</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {[...navLinks, { href: '/admin', label: 'Admin' }].map(
                    ({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                          pathname === href ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        {label}
                      </Link>
                    )
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
