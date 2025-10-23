import type { Metadata } from 'next';
import './globals.css';
import Navbar from './_components/NavBar';
import Footer from './_components/Footer';

export const metadata: Metadata = {
  title: 'John Patrick Ancajas - Student Developer',
  description: 'My personal portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}