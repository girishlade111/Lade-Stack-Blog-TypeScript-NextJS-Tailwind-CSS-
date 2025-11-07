export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Lade Stack Blog. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
