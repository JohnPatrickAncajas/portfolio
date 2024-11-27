export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex gap-4 items-end ml-auto">
            <li className="nav-link">About me</li>
            <li className="nav-link">Projects</li>
            <li className="nav-link">Contact</li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow relative bg-gradient-to-b from-gray-900 via-gray-300 to-gray-700">
        <div className="absolute top-4 right-4 bg-gray-800 text-white p-4 rounded shadow-lg">
          Hello!
        </div>

        <div className="absolute bottom-10 w-full flex justify-start gap-2 animate-train">
          <div className="bg-gray-600 w-40 h-20 rounded flex items-center justify-center text-white">
            Wagon 1
          </div>
          <div className="bg-gray-500 w-40 h-20 rounded flex items-center justify-center text-white">
            Wagon 2
          </div>
          <div className="bg-gray-400 w-40 h-20 rounded flex items-center justify-center text-white">
            Wagon 3
          </div>
        </div>

        <div className="container mx-auto flex flex-col gap-16 p-8 mt-40">
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
