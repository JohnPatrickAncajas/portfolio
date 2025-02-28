import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

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
        <div
          className="relative flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start bg-gradient-to-r from-gray-850 via-gray-800 to-gray-850 p-10 rounded-lg shadow-lg border border-gray-700 animate-fadeIn"
        >
          <img
            src="/images/PatrickAncajasProfile.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-lg object-cover shadow-md ring-4 ring-blue-500/30 transition-transform duration-300 hover:scale-105"
          />

          <div className="mt-6 md:mt-0 md:ml-10 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl font-bold text-blue-400">Hey, I'm Patrick!</h1>
            <p className="text-gray-300 mt-4 text-xl">
              Building intuitive and efficient web applications.
            </p>
          </div>
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
          <div id="about" className="body-section bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">About Me</h2>
            <p className="text-gray-300">
              Dolor consequat eu Lorem laborum ea dolor ad ullamco voluptate.
            </p>
          </div>
          <div id="projects" className="body-section bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Projects</h2>
            <p className="text-gray-300">
              Laboris commodo sint duis est magna ex ullamco irure sit esse tempor laboris.
            </p>
          </div>
          <div id="skills" className="body-section bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Skills</h2>
            <p className="text-gray-300">
              Amet aute sunt irure do commodo irure dolore laboris anim ut.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-950 text-gray-400 text-center p-6 border-t border-gray-700">
        <ul className="flex justify-center gap-4">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100082552025420&mibextid=2JQ9oc"
              className="hover:text-blue-400 transition-colors"
            >
              Facebook
            </a>
          </li>
          <li>|</li>
          <li>
            <a
              href="https://github.com/JohnPatrickAncajas"
              className="hover:text-blue-400 transition-colors"
            >
              Github
            </a>
          </li>
          <li>|</li>
          <li>
            <a
              href="https://www.linkedin.com/in/john-patrick-ancajas-2b808828a"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p className="mt-2">© 2025 Patrick Ancajas. All rights reserved.</p>
      </footer>
    </div>
  );
}
