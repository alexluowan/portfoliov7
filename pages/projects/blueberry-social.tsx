import Link from 'next/link';

export default function BlueberrySocialCaseStudy() {

  return (
    <div className="min-h-screen bg-white flex justify-center overflow-hidden md:h-screen">
      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-12 relative min-h-screen md:h-full px-4 md:px-0">
        {/* Fixed left side - spans 3 columns on desktop, full width on mobile */}
        <div className="col-span-1 md:col-span-3 p-4 md:p-5 relative pb-8 md:pb-5">
          <div>
            <Link 
              href="/" 
              className="subheader text-xs md:text-sm hover-target-small"
            >
              ← Back
            </Link>
          </div>
        </div>
        
        {/* Scrollable right side for case study content - spans 6 columns starting at column 4 */}
        <div 
          className="col-span-1 md:col-start-4 md:col-span-6 h-auto md:h-screen overflow-y-auto overflow-x-hidden scrollbar-hide"
        >
          <div className="p-4 md:p-5 pt-16 md:pt-16 space-y-6 md:space-y-8 pb-8 md:pb-5">
            {/* Header and Title grouped */}
            <div className="flex flex-col gap-2">
              <div className="subheader text-xs md:text-sm">BLUEBERRY SOCIAL • SHIPPED 2025</div>
              <h1 className="text-3xl md:text-5xl leading-tight md:leading-tight font-normal">
                Turn missed comments into sales.
              </h1>
            </div>

            {/* Hero Video/Image */}
            <div className="w-full relative overflow-hidden mt-6 md:mt-8">
              <video
                src="/projects/blueberry-social/videos/blueberrysizzle.mp4"
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-auto"
              />
            </div>

            {/* Project Details - flexbox with auto gap */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between mt-6 md:mt-8">
              <div>
                <div className="subheader text-xs md:text-sm mb-2">ROLE</div>
                <p>Product Designer</p>
              </div>
              <div>
                <div className="subheader text-xs md:text-sm mb-2">TIMELINE</div>
                <p>5 Weeks - 2025</p>
              </div>
              <div>
                <div className="subheader text-xs md:text-sm mb-2">TEAM</div>
                <p>5 Designers</p>
              </div>
              <div>
                <div className="subheader text-xs md:text-sm mb-2">SKILLS</div>
                <div className="flex flex-col gap-1">
                  <p>Product Design</p>
                  <p>Prototyping</p>
                </div>
              </div>
            </div>

            {/* Case Study Content Sections */}
            <section className="space-y-4 md:space-y-6 mt-8 md:mt-12">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">THE PROBLEM</div>
                <h2 className="text-xl md:text-2xl">E-commerce brands lose sales in Instagram comments. A customer asks &quot;Do you ship to Canada?&quot; By the time someone replies 6 hours later, they&apos;ve bought elsewhere.
                </h2>
              </div>
            </section>

            <section className="space-y-4 md:space-y-6">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">SOLUTION</div>
                <h2 className="text-xl md:text-2xl">Trust Through Inline Learning
                </h2>
              </div>
              <div className="space-y-4 text-sm md:text-base leading-relaxed">
                <p>
                  {/* Add your challenge content here */}
                  Describe the problem or challenge that Blueberry Social addresses.
                </p>
              </div>
            </section>

            {/* Add more sections as needed */}
            {/* Example: Process, Research, Design, Results, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
}

