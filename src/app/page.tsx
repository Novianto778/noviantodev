import Hero from '@/features/landingpage/Hero';
import TechSlider from '@/features/landingpage/TechSlider';
import Project from '@/features/landingpage/Project';
import Contact from '@/features/landingpage/Contact';

export default function Home() {
    return (
        <main className="pt-content pb-8">
            <Hero />
            <TechSlider />
            <Project />
            <Contact />
        </main>
    );
}
