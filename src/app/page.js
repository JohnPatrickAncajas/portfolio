import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo-placeholder">Logo</div>
          <ul className="flex gap-4">
            <li className="nav-link">About me</li>
            <li className="nav-link">Projects</li>
            <li className="nav-link">Contact</li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow mt-20">
        <div className="container mx-auto flex flex-col gap-16 p-8">
          <div className="body-section bg-gray-100 dark:bg-gray-800 p-8 rounded">
            Train Canva 
          </div>
          <div className="body-section bg-gray-100 dark:bg-gray-800 p-8 rounded">
            About me
          </div>
          <div className="body-section bg-gray-100 dark:bg-gray-800 p-8 rounded">
            Projects
          </div>
          <div className="body-section bg-gray-100 dark:bg-gray-800 p-8 rounded">
            Skills
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-900 text-center p-4">
        Footer
      </footer>
    </div>
  );
}
