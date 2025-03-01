import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";
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
        <div className="relative flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-850 via-gray-800 to-gray-850 p-10 rounded-lg shadow-lg border border-gray-700 animate-fadeIn">
          <img
            src="/images/PatrickAncajasProfile.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-lg object-cover shadow-md ring-4 ring-blue-500/30 transition-transform duration-300 hover:scale-105"
          />
          <div className="mt-6 md:mt-0 md:ml-10 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl font-bold text-blue-400">Hey, I'm Patrick!</h1>
            <p className="text-gray-300 mt-4 text-xl">Aspiring Full-stack developer passionate about building friendly and efficient web applications.</p>
          </div>
        </div>

        <div className="w-full flex overflow-x-hidden gap-4 animate-train p-6">
          <div className="bg-gray-700 min-w-[10rem] h-24 rounded-lg flex items-center justify-center text-white font-medium shadow-md">
            Wagon 1
          </div>
          <div className="bg-gray-600 min-w-[10rem] h-24 rounded-lg flex items-center justify-center text-white font-medium shadow-md">
            Wagon 2
          </div>
          <div className="bg-gray-500 min-w-[10rem] h-24 rounded-lg flex items-center justify-center text-white font-medium shadow-md">
            Wagon 3
          </div>
          <div className="bg-gray-500 min-w-[10rem] h-24 rounded-lg flex items-center justify-center text-white font-medium shadow-md">
            Wagon 4
          </div>
        </div>

        <section id="about" className="bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700 mt-12">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">About Me</h2>
          <p className="text-gray-300">I am a dedicated developer specializing in modern web technologies, focusing on user-friendly designs and scalable solutions. With a strong foundation in front-end and back-end development, I love bringing ideas to life through code.</p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-orange-600 text-white px-3 py-1 rounded-lg shadow-md"><FaHtml5 className="text-xl" /> HTML</span>
              <span className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md"><FaCss3Alt className="text-xl" /> CSS</span>
              <span className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-1 rounded-lg shadow-md"><FaJs className="text-xl" /> JavaScript</span>
              <span className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md"><FaReact className="text-xl" /> React</span>
              <span className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded-lg shadow-md"><TbBrandNextjs className="text-xl" /> Next.js</span>
              <span className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded-lg shadow-md"><FaBootstrap className="text-xl" /> Bootstrap</span>
              <span className="flex items-center gap-2 bg-teal-500 text-white px-3 py-1 rounded-lg shadow-md"><TbBrandTailwind className="text-xl" /> Tailwind</span>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700 mt-12">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400">Project 1</h3>
              <p className="text-gray-300 mt-2">Consectetur proident exercitation non ipsum.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400">Project 2</h3>
              <p className="text-gray-300 mt-2">Incididunt esse et ullamco occaecat quis ullamco cupidatat.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400">Project 3</h3>
              <p className="text-gray-300 mt-2">Commodo labore Lorem laborum fugiat nostrud ex veniam nisi ut.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700 mt-12">
  <h2 className="text-xl font-semibold text-blue-400 mb-4">Contact</h2>
  <p className="text-gray-300 mb-4">Interested in working together? Connect with me on my socials!</p>
  <div className="flex justify-center gap-4">
    <a href="https://github.com/JohnPatrickAncajas" className="hover:text-blue-400 transition-colors"><FaGithub size={24} /></a>
    <a href="https://www.linkedin.com/in/john-patrick-ancajas-2b808828a" className="hover:text-blue-400 transition-colors"><FaLinkedin size={24} /></a>
    <a href="https://x.com/_PatrickAncajas" className="hover:text-blue-400 transition-colors"><FaTwitter size={24} /></a>
  </div>
</section>

      </main>

      <footer className="bg-gray-950 text-gray-400 text-center p-6 border-t border-gray-700">
        <div className="flex justify-center gap-4">
          <a href="https://github.com/JohnPatrickAncajas" className="hover:text-blue-400 transition-colors"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/john-patrick-ancajas-2b808828a" className="hover:text-blue-400 transition-colors"><FaLinkedin size={24} /></a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors"><FaTwitter size={24} /></a>
        </div>
        <p className="mt-2">© 2025 Patrick Ancajas. All rights reserved.</p>
      </footer>
    </div>
  );
}
