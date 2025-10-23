import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-10 w-full border-b bg-background/95 text-foreground backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-screen-7xl p-4 mx-auto">
        
        <Link href="/">
          <strong className="text-lg font-bold">John Patrick Ancajas</strong>
        </Link>

        <div className="flex gap-6 text-sm">
          <Link
            href="/"
            className="text-foreground/70 hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground/70 hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-foreground/70 hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/personal"
            className="text-foreground/70 hover:text-foreground"
          >
            Personal
          </Link>
        </div>
      </div>
    </nav>
  );
}