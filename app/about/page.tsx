import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function AboutPage() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        I am a college student and developer passionate about building useful
        applications.
      </p>

      <a href="/Patrick_Ancajas_Resume.pdf" download>
        Download My Resume
      </a>

      <ExperienceSection />
      <SkillsSection />
    </div>
  );
}