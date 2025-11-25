import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import ProjectCard from '@/components/projects/ProjectCard';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const wrapper = scrollContainerRef.current;
      const content = wrapper.querySelector('.scroll-content') as HTMLElement;
      
      if (content) {
        const lenis = new Lenis({
          wrapper: wrapper,
          content: content,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenisRef.current = lenis;

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
          lenis.destroy();
        };
      }
    }
  }, []);

  return (
    <div className="h-screen bg-white grid grid-cols-12 relative overflow-hidden">
      {/* Static left side - content spans 4 columns */}
      <div className="col-span-5 p-5 relative">
        <div className="flex flex-col gap-4" style={{ width: 'calc(100vw * 4 / 12)' }}>
          <h2>Alex is a digital product designer making technology feel human, by designing products that connect with people, not just serve them.</h2>
          <div className="subheader">Designer @AthenaHQ (YC W25)</div>
        </div>
        <nav className="absolute bottom-5 left-5 flex flex-row gap-6">
          <a href="#" className="subheader">PLAYGROUND</a>
          <a href="#" className="subheader">ABOUT</a>
          <a href="#" className="subheader">CV</a>
        </nav>
      </div>
      
      {/* Scrollable right side for case studies - spans 7 columns */}
      <div 
        ref={scrollContainerRef}
        className="col-span-7 h-screen overflow-y-auto overflow-x-hidden"
      >
        <div className="scroll-content p-5 space-y-5">
          {/* Project Cards */}
          <ProjectCard
            mediaSrc="/projects/88rising/videos/88risingthumbnail.mp4"
            mediaType="video"
            badges={["Branding", "Design"]}
            className="hover-target-big"
          />
          <ProjectCard
            mediaSrc="/projects/blueberry-social/videos/blueberrysizzle.mp4"
            mediaType="video"
            badges={["Social Media", "Content"]}
            className="hover-target-big"
          />
        </div>
      </div>
    </div>
  );
}
