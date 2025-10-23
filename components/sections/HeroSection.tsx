import Link from 'next/link';

export default function HeroSection() {
  return (
    <section>
      <h1>Hi, Im Patrick.</h1>
      <p>A student developer building for the web and mobile.</p>
      <Link href="/projects">View My Work</Link>
      <Link href="/about">About Me</Link>
    </section>
  );
}