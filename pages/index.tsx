import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import ProjectCard from '@/components/projects/ProjectCard';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only use Lenis on desktop (>= 768px)
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

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
    <div className="min-h-screen bg-white flex justify-center overflow-hidden md:h-screen">
      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-12 relative min-h-screen md:h-full px-4 md:px-0">
        {/* Static left side - content spans 4 columns on desktop, full width on mobile */}
        <div className="col-span-1 md:col-span-4 p-4 md:p-5 relative pb-8 md:pb-5">
          <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-0">
            <h2 className="text-lg md:text-2xl leading-tight md:leading-normal">Alex is a digital product designer making technology feel human, by designing products that connect with people, not just serve them.</h2>
            <div className="subheader text-xs md:text-sm">Designer @AthenaHQ (YC W25)</div>
          </div>
          <nav className="static md:absolute bottom-5 left-5 flex flex-row gap-4 md:gap-6 flex-wrap md:flex-nowrap">
            <a href="#" className="subheader text-xs md:text-sm hover-target-small">PLAYGROUND</a>
            <a href="#" className="subheader text-xs md:text-sm hover-target-small">ABOUT</a>
            <a href="#" className="subheader text-xs md:text-sm hover-target-small">CV</a>
          </nav>
        </div>
        
        {/* Scrollable right side for case studies - spans 8 columns on desktop, full width on mobile */}
        <div 
          ref={scrollContainerRef}
          className="col-span-1 md:col-span-8 h-auto md:h-screen overflow-y-auto overflow-x-hidden scrollbar-hide"
        >
          <div className="scroll-content p-4 md:p-5 space-y-4 md:space-y-5 pb-8 md:pb-5">
            {/* Project Cards */}
            <ProjectCard
              mediaSrc="/projects/88rising/videos/88risingthumbnail.mp4"
              mediaType="video"
              badges={["88rising", "Product Design"]}
              className="hover-target-big"
            />
            <ProjectCard
              mediaSrc="/projects/blueberry-social/videos/blueberrysizzle.mp4"
              mediaType="video"
              badges={["Blueberry Social", "Product Design"]}
              className="hover-target-big"
              href="/projects/blueberry-social"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
