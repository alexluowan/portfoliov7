import Link from 'next/link';
import { Lightning, Target, Handshake, Clock, Sparkle, ShieldCheck, ArrowRight } from '@phosphor-icons/react';

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
                <h2 className="text-xl md:text-2xl">Blueberry Social: An AI-powered social media inbox that learns from your edits to maintain brand voice.</h2>
              </div>
            </section>

            {/* Feature Showcase - Visual features with captions */}
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

            {/* IMPACT - After showing solution */}
            <section className="mt-16 md:mt-20">
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

            {/* THE CHALLENGE */}
            <section className="mt-16 md:mt-20">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">THE CHALLENGE</div>
                <h2 className="text-xl md:text-2xl">E-commerce teams were drowning in social media comments across multiple platforms.</h2>
              </div>
              <div className="mt-8 md:mt-12 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 text-2xl font-light" style={{ color: '#252525' }}>
                    01
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-2">Response time kills sales</h3>
                    <p className="text-sm text-gray-600">A customer asks &quot;Do you ship to Canada?&quot; By the time someone replies 6 hours later, they&apos;ve bought elsewhere.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 text-2xl font-light" style={{ color: '#252525' }}>
                    02
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-2">Brand voice inconsistency</h3>
                    <p className="text-sm text-gray-600">Generic AI responses feel robotic. Teams need automation that actually sounds like their brand.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 text-2xl font-light" style={{ color: '#252525' }}>
                    03
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-2">No one trusts AI... yet</h3>
                    <p className="text-sm text-gray-600">&quot;I&apos;m open to automation once I trust it over time.&quot; - Testing participant</p>
                  </div>
                </div>
              </div>
            </section>

            {/* THE PIVOT */}
            <section className="mt-16 md:mt-20">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">THE PIVOT</div>
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
              <div className="w-full aspect-video bg-gray-100 mt-8 md:mt-12 flex items-center justify-center">
                <span className="text-gray-400 text-sm">TIMELINE: Social listening → E-commerce comment management</span>
              </div>
            </section>

            {/* UNDERSTANDING USERS */}
            <section className="mt-16 md:mt-20">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">UNDERSTANDING USERS</div>
                <h2 className="text-xl md:text-2xl">What growth teams actually needed.</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between mt-8 md:mt-12">
                <div className="space-y-3 md:max-w-[30%]">
                  <Lightning size={48} weight="duotone" className="text-black" />
                  <h3 className="font-medium text-base">Speed without sacrificing brand</h3>
                  <p className="text-sm text-gray-600">&quot;The more the AI can mimic our brand voice, the better. Generic responses are a dealbreaker.&quot;</p>
                </div>
                <div className="space-y-3 md:max-w-[30%]">
                  <Target size={48} weight="duotone" className="text-black" />
                  <h3 className="font-medium text-base">Clarity over complexity</h3>
                  <p className="text-sm text-gray-600">&quot;Too many options feels like work, not help. I want the tool to be intuitive.&quot;</p>
                </div>
                <div className="space-y-3 md:max-w-[30%]">
                  <Handshake size={48} weight="duotone" className="text-black" />
                  <h3 className="font-medium text-base">Trust takes time</h3>
                  <p className="text-sm text-gray-600">&quot;I don&apos;t fully trust AI yet, but I&apos;m open to automation once I trust it over time.&quot;</p>
                </div>
              </div>
            </section>

            {/* DESIGN DECISIONS */}
            <section className="mt-16 md:mt-20">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">DESIGN DECISIONS</div>
                <h2 className="text-xl md:text-2xl">How might we build trust in AI automation?</h2>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-xs font-medium text-gray-500 mb-2">EXPLORATION 1</div>
                    <h4 className="font-medium mb-2">ChatGPT-style interface</h4>
                    <p className="text-sm text-gray-600">Natural conversation, but API restrictions made it complex. Too slow for our timeline.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-xs font-medium text-gray-500 mb-2">EXPLORATION 2</div>
                    <h4 className="font-medium mb-2">Sequential walkthrough</h4>
                    <p className="text-sm text-gray-600">&quot;I prefer that it&apos;s all in one. Otherwise I wouldn&apos;t know when it will end.&quot; Users felt impatient.</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
                <div className="text-xs font-medium text-blue-700 mb-2">FINAL SOLUTION</div>
                <h4 className="font-medium mb-2">Reduce friction, deliver value instantly</h4>
                <p className="text-sm text-gray-700">Connect Meta Business Account, add basic brand info, and you&apos;re in. Users saw actual Instagram comments with AI-generated replies within two minutes.</p>
              </div>
            </section>

            {/* Decision 2: The Inbox */}
            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium">The Inbox: Making efficiency feel intuitive</h3>
                <p className="text-sm md:text-base text-gray-600">
                  During our first test, users were confused by terminology. We had to match their mental models.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Early inbox - cluttered</span>
                  </div>
                  <p className="text-sm text-gray-600">❌ Too many filtering options. Users felt overwhelmed.</p>
                </div>
                <div className="space-y-3">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Revised inbox - focused</span>
                  </div>
                  <p className="text-sm text-gray-600">✅ Smart defaults that surfaced what mattered most.</p>
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
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Sparkle size={20} weight="duotone" className="text-black" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-medium text-sm mb-1">Show AI reasoning</h4>
                    <p className="text-sm text-gray-600">Suggested responses explained why, based on brand guidelines.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Clock size={20} weight="duotone" className="text-black" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-medium text-sm mb-1">Make learning visible</h4>
                    <p className="text-sm text-gray-600">When users edited suggestions, we showed the AI was adapting.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <ShieldCheck size={20} weight="duotone" className="text-black" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-medium text-sm mb-1">Progressive disclosure</h4>
                    <p className="text-sm text-gray-600">Advanced rules available for power users, but not required.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* KEY BREAKTHROUGH */}
            <section className="mt-16 md:mt-20">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">KEY BREAKTHROUGH</div>
                <h2 className="text-xl md:text-2xl">Progressive disclosure over split-screen</h2>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Before</div>
                  <p className="text-sm">
                    Split interface (voice guidelines left, live testing right) caused constant context-switching.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight size={32} weight="bold" className="text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">After</div>
                  <p className="text-sm">
                    Single-column layout for defining voice + dedicated preview modal for validation.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-sm font-medium text-green-900">
                  Result: Clearer guidelines, fewer inconsistencies, 40% reduction in setup errors.
                </p>
              </div>
              {/* Before/After Comparison Image Placeholder */}
              <div className="w-full aspect-video bg-gray-100 mt-8 md:mt-12 flex items-center justify-center">
                <span className="text-gray-400 text-sm">BEFORE/AFTER: Split-screen → Progressive disclosure</span>
              </div>
            </section>

            {/* REFLECTION */}
            <section className="mt-16 md:mt-20 pb-12">
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

