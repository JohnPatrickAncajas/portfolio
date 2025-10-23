export default function Footer() {
  return (
    <footer className="mt-16 border-t border-foreground/10">
      <div className="flex flex-col items-center justify-between max-w-screen-7xl gap-4 p-8 mx-auto sm:flex-row">
        <p className="text-sm text-foreground/70">
          © 2025 John Patrick Ancajas. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/johnpatrickancajas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/70 hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/70 hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}