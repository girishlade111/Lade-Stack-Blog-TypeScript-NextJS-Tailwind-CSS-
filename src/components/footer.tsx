'use client';

import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {year} Lade Stack Blog. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
