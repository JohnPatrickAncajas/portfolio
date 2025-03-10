import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import Image from "next/image";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden font-inter text-gray-100">
      <nav className="w-full bg-gray-950 bg-opacity-50 backdrop-blur-md z-10 p-4 border-b border-gray-700 fixed top-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex gap-6 items-end ml-auto text-gray-300">
            <li>
              <a href="#about" className="hover:text-blue-400 transition-all cursor-pointer">About Me</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition-all cursor-pointer">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition-all cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow p-6 mt-12 container mx-auto">
        <div className="relative flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-850 via-gray-800 to-gray-850 p-10 rounded-lg shadow-lg border border-gray-700 animate-fadeIn backdrop-blur-md bg-opacity-30">
          <Image
            src="/images/PatrickAncajasProfile.jpg"
            alt="Profile"
            width={192}
            height={192}
            className="rounded-lg object-cover shadow-md ring-4 ring-blue-500/30 transition-transform duration-300 hover:scale-105"
          />
          <div className="mt-6 md:mt-0 md:ml-10 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl font-bold text-blue-400 drop-shadow-lg animate-fadeIn"> Hey, I&apos;m Patrick!</h1>
            <p className="text-gray-300 mt-4 text-xl">Aspiring Full-stack developer passionate about building friendly and efficient web applications.</p>
          </div>
        </div>

        <section id="about" className="bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700 mt-12 backdrop-blur-md bg-opacity-30">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">About Me</h2>
          <p className="text-gray-300">I am a dedicated developer specializing in modern web technologies, focusing on user-friendly designs and scalable solutions. With a strong foundation in front-end and back-end development, I love bringing ideas to life through code.</p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-orange-600 text-white px-3 py-1 rounded-lg hover:shadow-[0_0_15px_rgba(255,165,0,1)] transition-all duration-300 cursor-default">
                <FaHtml5 className="text-xl" /> HTML
              </span>
              <span className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:shadow-[0_0_15px_rgba(0,119,255,1)] transition-all duration-300 cursor-default">
                <FaCss3Alt className="text-xl" /> CSS
              </span>
              <span className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-1 rounded-lg hover:shadow-[0_0_15px_rgba(255,223,0,1)] transition-all duration-300 cursor-default">
                <FaJs className="text-xl" /> JavaScript
              </span>
              <span className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:shadow-[0_0_15px_rgba(0,170,255,1)] transition-all duration-300 cursor-default">
                <FaReact className="text-xl" /> React
              </span>
              <span className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded-lg hover:shadow-[0_0_15px_rgba(0,0,0,1)] transition-all duration-300 cursor-default">
                <TbBrandNextjs className="text-xl" /> Next.js
              </span>
              <span className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded-lg hover:shadow-[0_0_15px_rgba(128,0,128,1)] transition-all duration-300 cursor-default">
                <FaBootstrap className="text-xl" /> Bootstrap
              </span>
              <span className="flex items-center gap-2 bg-teal-500 text-white px-3 py-1 rounded-lg hover:shadow-[0_0_15px_rgba(50,205,50,1)] transition-all duration-300 cursor-default">
                <TbBrandTailwind className="text-xl" /> Tailwind
              </span>
            </div>
          </div>
        </section>

        <Projects />

        <section id="contact" className="bg-gray-850 p-10 rounded-lg shadow-lg border border-gray-700 mt-12 backdrop-blur-md bg-opacity-30 text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Contact</h2>
          <p className="text-gray-300 text-lg mb-6">Interested in working together? Connect with me on my socials!</p>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/JohnPatrickAncajas" 
              className="p-2 rounded-full transition-all duration-300 hover:text-blue-400 hover:bg-gray-700/50">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/john-patrick-ancajas-2b808828a" 
              className="p-2 rounded-full transition-all duration-300 hover:text-blue-400 hover:bg-gray-700/50">
              <FaLinkedin size={28} />
            </a>
            <a href="https://x.com/_PatrickAncajas" 
              className="p-2 rounded-full transition-all duration-300 hover:text-blue-400 hover:bg-gray-700/50">
              <FaTwitter size={28} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100082552025420&mibextid=2JQ9oc" 
              className="p-2 rounded-full transition-all duration-300 hover:text-blue-400 hover:bg-gray-700/50">
              <FaFacebook size={28} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-gray-400 text-center p-6 border-t border-gray-700">
        <p>© 2025 Patrick Ancajas. All rights reserved.</p>
      </footer>
    </div>
  );
}
