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
          <div className="p-4 md:p-5 pt-16 md:pt-16 pb-8 md:pb-5">
            {/* Header and Title grouped */}
            <div className="flex flex-col gap-2">
              <div className="subheader text-xs md:text-sm">BLUEBERRY SOCIAL • SHIPPED 2025</div>
              <h1 className="text-3xl md:text-5xl leading-tight md:leading-tight font-normal">
                Turn missed comments into sales.
              </h1>
            </div>

            {/* Hero Video/Image */}
            <div className="w-full relative overflow-hidden mt-8 md:mt-12">
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
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between mt-8 md:mt-12">
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
            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">OVERVIEW</div>
                <h2 className="text-xl md:text-2xl">E-commerce brands lose sales in Instagram comments. A customer asks &quot;Do you ship to Canada?&quot; By the time someone replies 6 hours later, they&apos;ve bought elsewhere.</h2>
              </div>
              <div className="space-y-4 text-sm md:text-base leading-relaxed mt-8">
                <p>
                  There is no convenient solution to help e-commerce brands respond to social media comments quickly and maintain their brand voice. This gap in the market for AI-powered social media management that learns from real user edits was the starting point for Blueberry Social.
                </p>
              </div>
            </section>

            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">SOLUTION</div>
                <h2 className="text-xl md:text-2xl">Blueberry Social: An AI-powered social media management tool that learns from your edits to maintain brand voice.</h2>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Trust Through Inline Learning</h3>
                </div>
                {/* Image/Video */}
                <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Side-by-side showing AI draft → User edit → &quot;Apply to future replies&quot; moment</span>
                  </div>
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Trust Through Inline Learning</h3>
                </div>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Hybrid Inbox: Scan Fast, Reply With Context</h3>
                </div>
                {/* GIF */}
                <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">GIF: Collapsing/expanding inbox flow</span>
                  </div>
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Hybrid Inbox: Scan Fast, Reply With Context</h3>
                </div>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Brand Voice That Learns From Real Edits</h3>
                </div>
                {/* GIF */}
                <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">GIF: User editing a reply → Preview modal showing how tone applies to multiple scenarios</span>
                  </div>
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Brand Voice That Learns From Real Edits</h3>
                </div>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Safe Automation With Clear Controls</h3>
                </div>
                {/* Image */}
                <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">IMAGE: Automation rule builder showing plain English → structured logic</span>
                  </div>
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Safe Automation With Clear Controls</h3>
                </div>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Onboarding In Under 60 Seconds</h3>
                </div>
                {/* GIF */}
                <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">GIF: Store URL paste → Brand auto-populated → Meta connected → Inbox ready</span>
                  </div>
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Onboarding In Under 60 Seconds</h3>
                </div>
              </div>
            </section>

            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">RESULTS</div>
                <h2 className="text-xl md:text-2xl">The Outcome</h2>
              </div>
              <div className="space-y-4 text-sm md:text-base leading-relaxed mt-8">
                <ul className="list-none space-y-2">
                  <li>Onboarded customers: 1 → 7</li>
                  <li>Weekly active users: 2 → 4</li>
                  <li>System Usability Scale: 60 → 80</li>
                  <li>Pilot CSAT: 5/5</li>
                </ul>
                <p>
                  Adoption up, ease up, satisfaction up—without losing brand voice or control.
                </p>
              </div>
            </section>

            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">INSIGHT</div>
                <h2 className="text-xl md:text-2xl">The Breakthrough: Progressive Disclosure Over Split-Screen</h2>
              </div>
              <div className="space-y-4 text-sm md:text-base leading-relaxed mt-8">
                <p>
                  <strong>Before:</strong> Split interface (voice guidelines left, live testing right) caused constant context-switching.
                </p>
                <p>
                  <strong>After:</strong> Single-column layout for defining voice + dedicated preview modal for validation.
                </p>
                <p>
                  <strong>Result:</strong> Clearer guidelines, fewer inconsistencies, workflow that felt deliberate instead of chaotic.
                </p>
              </div>
              {/* Before/After Comparison Image Placeholder */}
              <div className="w-full aspect-video bg-gray-100 mt-8 md:mt-12 flex items-center justify-center">
                <span className="text-gray-400 text-sm">BEFORE/AFTER COMPARISON IMAGE</span>
              </div>
            </section>

            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">REFLECTION</div>
                <h2 className="text-xl md:text-2xl">What I Learned</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
                <div className="space-y-3">
                  <h4 className="font-bold text-base">Prototype to learn, not to impress</h4>
                  <p className="text-sm md:text-base leading-relaxed">
                    Rough v0 prototypes revealed blockers days faster than polished designs.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-base">Bring engineering in early</h4>
                  <p className="text-sm md:text-base leading-relaxed">
                    Feasibility checks (modal vs. subpage, confidence thresholds) saved major rework.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-base">Cut scope to raise clarity</h4>
                  <p className="text-sm md:text-base leading-relaxed">
                    Focusing on comments (not DMs) sharpened the hybrid inbox and learning cues.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-base">Design through pivots</h4>
                  <p className="text-sm md:text-base leading-relaxed">
                    Mid-project pivot from social listening to e-commerce taught me to isolate riskiest assumptions first: identify 2-3 make-or-break questions, design to answer them, iterate fast.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

