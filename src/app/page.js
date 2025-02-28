export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden font-inter bg-gray-900 text-gray-100">
      <nav className="w-full bg-gray-950 backdrop-blur-md z-10 p-4 border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex gap-6 items-end ml-auto text-gray-300">
            <li className="hover:text-blue-400 transition-colors cursor-pointer">About Me</li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">Projects</li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow p-6 container mx-auto">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-lg font-semibold">
          Welcome to My Portfolio
        </div>

        <div className="w-full flex justify-start gap-4 animate-train p-6">
          <div className="bg-gray-700 w-44 h-24 rounded-lg flex items-center justify-center text-white font-medium shadow-md">
            Wagon 1
          </div>
          <div className="bg-gray-600 w-44 h-24 rounded-lg flex items-center justify-center text-white font-medium shadow-md">
            Wagon 2
          </div>
          <div className="bg-gray-500 w-44 h-24 rounded-lg flex items-center justify-center text-white font-medium shadow-md">
            Wagon 3
          </div>
        </div>

        <div className="flex flex-col gap-12 p-8 mt-32">
          <div className="body-section bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">About Me</h2>
            <p className="text-gray-300"> Dolor consequat eu Lorem laborum ea dolor ad ullamco voluptate.</p>
          </div>
          <div className="body-section bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Projects</h2>
            <p className="text-gray-300"> Laboris commodo sint duis est magna ex ullamco irure sit esse tempor laboris.</p>
          </div>
          <div className="body-section bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Skills</h2>
            <p className="text-gray-300"> Amet aute sunt irure do commodo irure dolore laboris anim ut.</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-950 text-gray-400 text-center p-4 border-t border-gray-700">
        © 2025 Your Name. All rights reserved.
      </footer>
    </div>
  );
}
