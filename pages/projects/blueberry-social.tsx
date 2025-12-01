import Link from 'next/link';
import Image from 'next/image';

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
                <h2 className="text-xl md:text-2xl">What if we leveraged AI to help e-commerce brands respond to social media comments instantly while maintaining their unique brand voice?</h2>
              </div>
              <div className="mt-8 text-sm md:text-base leading-relaxed">
                <p>
                  There is no convenient solution to help e-commerce brands respond to social media comments quickly while maintaining their brand voice. This gap in the market for AI-powered social media management that learns from real user edits was the starting point for Blueberry Social.
                </p>
              </div>
            </section>

            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">SOLUTION</div>
                <h2 className="text-xl md:text-2xl">Blueberry Social: An AI-powered social media management platform for e-commerce brands.</h2>
              </div>
            </section>

            {/* Feature Showcase - Visual features with captions */}
            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Manage All Comments from One Unified Inbox</h3>
                </div>
                {/* Video */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <video
                    src="/projects/blueberry-social/videos/inbox.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-auto"
                  />
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Manage All Comments from One Unified Inbox</h3>
                </div>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Train Your Brand Voice in a Safe Sandbox</h3>
                </div>
                {/* Video */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <video
                    src="/projects/blueberry-social/videos/brandvoice.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-auto"
                  />
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Train Your Brand Voice in a Safe Sandbox</h3>
                </div>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Automate Safely with Human Oversight</h3>
                </div>
                {/* Video */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <video
                    src="/projects/blueberry-social/videos/automationrules.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-auto"
                  />
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Automate Safely with Human Oversight</h3>
                </div>
              </div>
            </section>

            {/* IMPACT - After showing solution */}
            <section className="mt-20 md:mt-28">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">OUTCOMES</div>
                <h2 className="text-xl md:text-2xl">Blueberry Social is live and gaining traction with e-commerce teams.</h2>
              </div>
              <div className="flex flex-wrap gap-y-6 md:gap-y-0 md:justify-between mt-8">
                <div>
                  <div className="text-3xl md:text-4xl font-light mb-2" style={{ color: '#252525' }}>7x</div>
                  <div className="text-sm text-gray-600">Customer Growth</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-light mb-2" style={{ color: '#252525' }}>2x</div>
                  <div className="text-sm text-gray-600">Weekly Active Users</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-light mb-2" style={{ color: '#252525' }}>80</div>
                  <div className="text-sm text-gray-600">SUS Score</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-light mb-2" style={{ color: '#252525' }}>5/5</div>
                  <div className="text-sm text-gray-600">Pilot CSAT</div>
                </div>
              </div>
            </section>

            {/* INITIAL OBSERVATIONS */}
            <section className="mt-20 md:mt-28">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">INITIAL OBSERVATIONS</div>
                <h2 className="text-xl md:text-2xl">E-commerce teams were drowning in social media comments across multiple platforms.</h2>
              </div>
              <div className="mt-8 md:mt-12">
                <h3 className="font-medium text-base mb-6">Pain Points</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
                  <div className="space-y-3">
                    <h4 className="text-lg md:text-xl font-normal">1. Response time kills sales</h4>
                    <p className="text-sm md:text-base text-gray-600">A customer asks &quot;Do you ship to Canada?&quot; By the time someone replies 6 hours later, they&apos;ve bought elsewhere.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg md:text-xl font-normal">2. Brand voice inconsistency</h4>
                    <p className="text-sm md:text-base text-gray-600">Generic AI responses feel robotic. Teams need automation that actually sounds like their brand.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg md:text-xl font-normal">3. No one trusts AI... yet</h4>
                    <p className="text-sm md:text-base text-gray-600">&quot;I&apos;m open to automation once I trust it over time.&quot; - Testing participant</p>
                  </div>
                </div>
                
                {/* Key Insight Callout */}
                <div className="border-l-4 border-gray-300 pl-6 py-2 mb-8">
                  <p className="text-base md:text-lg italic text-gray-800">
                    Key Insight: E-commerce teams were already using generic AI tools like ChatGPT to draft responses, but they needed something that could maintain their brand voice consistently at scale.
                  </p>
                </div>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  These pain points were not exactly surprising to us since we knew what the market looked like at that moment: generic AI tools that sounded robotic, scattered social media inboxes across platforms, and no way to maintain brand consistency. However, these user insights validated our solution and unique position in the market, as well as validated AI as a tool for social media management.
                </p>
              </div>
            </section>

            {/* PIVOTING DIRECTION */}
            <section className="mt-20 md:mt-28">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">PIVOTING DIRECTION</div>
                <h2 className="text-xl md:text-2xl">Halfway through the project, everything changed.</h2>
              </div>
              <div className="mt-8 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  We had spent weeks building a social listening tool for startup founders. Then the co-founders came back with new data: mid-sized e-commerce brands were the real opportunity.
                </p>
                <p>
                  Our entire ideal customer profile had flipped. Instead of solo entrepreneurs, we were now designing for growth teams at brands doing millions in revenue. We had a choice: panic and restart from scratch, or adapt quickly and use what we&apos;d learned.
                </p>
              </div>
              {/* Timeline or visual showing pivot */}
              <div className="w-full mt-8 md:mt-12 relative">
                <Image 
                  src="/projects/blueberry-social/images/pivot.png" 
                  alt="Timeline showing pivot from social listening to e-commerce comment management"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </section>

            {/* UNDERSTANDING USERS */}
            <section className="mt-20 md:mt-28">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">UNDERSTANDING USERS</div>
                <h2 className="text-xl md:text-2xl">What growth teams actually needed.</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between mt-8 md:mt-12">
                <div className="space-y-3 md:max-w-[30%]">
                  <h3 className="font-medium text-base">Speed without sacrificing brand</h3>
                  <p className="text-sm text-gray-600">&quot;The more the AI can mimic our brand voice, the better. Generic responses are a dealbreaker.&quot;</p>
                </div>
                <div className="space-y-3 md:max-w-[30%]">
                  <h3 className="font-medium text-base">Clarity over complexity</h3>
                  <p className="text-sm text-gray-600">&quot;Too many options feels like work, not help. I want the tool to be intuitive.&quot;</p>
                </div>
                <div className="space-y-3 md:max-w-[30%]">
                  <h3 className="font-medium text-base">Trust takes time</h3>
                  <p className="text-sm text-gray-600">&quot;I don&apos;t fully trust AI yet, but I&apos;m open to automation once I trust it over time.&quot;</p>
                </div>
              </div>
            </section>

            {/* DESIGN PROCESS */}
            <section className="mt-20 md:mt-28">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">DESIGN PROCESS</div>
                <h2 className="text-xl md:text-2xl">How might we build trust in AI replies so teams feel confident letting automation handle customer conversations?</h2>
              </div>
            </section>

            {/* Decision 1: Onboarding */}
            <section className="mt-8 md:mt-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium">Onboarding: Earning trust in two minutes</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Every question we asked was a barrier between the user and value. We ruthlessly cut everything non-essential.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Exploration 1</div>
                  <h4 className="font-medium mb-2">ChatGPT-style interface</h4>
                  <p className="text-sm text-gray-600">Natural conversation, but API restrictions made it complex. Too slow for our timeline.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Exploration 2</div>
                  <h4 className="font-medium mb-2">Sequential walkthrough</h4>
                  <p className="text-sm text-gray-600">&quot;I prefer that it&apos;s all in one. Otherwise I wouldn&apos;t know when it will end.&quot; Users felt impatient.</p>
                </div>
              </div>
              <div className="mt-8 space-y-2">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Final Solution</div>
                <h4 className="font-medium mb-2">Reduce friction, deliver value instantly</h4>
                <p className="text-sm text-gray-600">Connect Meta Business Account, add basic brand info, and you&apos;re in. Users saw actual Instagram comments with AI-generated replies within two minutes.</p>
              </div>
            </section>

            {/* Decision 2: The Inbox */}
            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium">The Inbox: Modeled after Gmail for zero learning curve</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Users were confused by our initial complex filtering system. We modeled the inbox after Gmail, leveraging patterns users already know.
                </p>
              </div>
              <div className="space-y-8 mt-8">
                <div className="space-y-3">
                  <div className="relative w-full">
                    <Image 
                      src="/projects/blueberry-social/images/inbox-before.png" 
                      alt="Early inbox with too many filtering options and split-screen layout"
                      width={1600}
                      height={900}
                      className="w-full h-auto border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Before: 7+ filtering categories and split-screen layout forced constant context-switching.</p>
                </div>
                <div className="space-y-3">
                  <div className="relative w-full">
                    <Image 
                      src="/projects/blueberry-social/images/inbox-after.png" 
                      alt="Revised inbox with simplified categories and inline AI replies"
                      width={1600}
                      height={900}
                      className="w-full h-auto border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600">After: Simplified to 3 Gmail-like states (Unreplied/Resolved/Spam). Users triaged 3x faster with zero learning curve.</p>
                </div>
              </div>
              <div className="mt-6 text-sm italic text-gray-600">
                &quot;I find it much better and easier to understand. These are good responses.&quot; - Testing participant
              </div>
            </section>

            {/* Decision 3: Brand Voice */}
            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium">Brand Voice: Learning from real edits</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Users could spot inauthentic AI responses instantly. Our AI had to match their actual brand voice.
                </p>
              </div>
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="font-medium text-sm mb-2">Show AI reasoning</h4>
                  <p className="text-sm text-gray-600">Suggested responses explained why, based on brand guidelines.</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Make learning visible</h4>
                  <p className="text-sm text-gray-600">When users edited suggestions, we showed the AI was adapting.</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Progressive disclosure</h4>
                  <p className="text-sm text-gray-600">Advanced rules available for power users, but not required.</p>
                </div>
              </div>
            </section>

            {/* Key Breakthrough - now part of Design Process */}
            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium">Key Breakthrough: Progressive disclosure over split-screen</h3>
              </div>
              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Before</div>
                  <p className="text-sm text-gray-600">
                    Split interface (voice guidelines left, live testing right) caused constant context-switching.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">After</div>
                  <p className="text-sm text-gray-600">
                    Single-column layout for defining voice + dedicated preview modal for validation.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Result</div>
                  <p className="text-sm text-gray-600">
                    Clearer guidelines, fewer inconsistencies, 40% reduction in setup errors.
                  </p>
                </div>
              </div>
              {/* Before/After Comparison Image Placeholder */}
              <div className="w-full aspect-video bg-gray-100 mt-8 md:mt-12 flex items-center justify-center">
                <span className="text-gray-400 text-sm">BEFORE/AFTER: Split-screen → Progressive disclosure</span>
              </div>
            </section>

            {/* REFLECTION */}
            <section className="mt-20 md:mt-28 pb-16">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">REFLECTION</div>
                <h2 className="text-xl md:text-2xl">What I learned</h2>
              </div>
              <div className="mt-8 md:mt-12 space-y-8">
                <div>
                  <h3 className="font-medium text-base mb-2">AI accelerates, humans validate</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    We used AI tools like V0 to generate prototypes fast. But we never shipped without user testing. AI got us 70% there. The final 30% came from real people.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2">Designing for trust is designing for transparency</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Users didn&apos;t want a black box. They wanted to see AI reasoning, edit outputs, and gradually build confidence. Every design decision came back to: Can users predict what the AI will do?
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2">Cut scope to raise clarity</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Every question we removed from onboarding, every filter we simplified made the product stronger. The best version wasn&apos;t the one with the most features—it was the one with the least friction.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2">Design through pivots</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Mid-project pivot taught me to isolate riskiest assumptions first. Identify 2-3 make-or-break questions, design to answer them, iterate fast.
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


