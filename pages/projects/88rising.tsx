import Link from 'next/link';

export default function EightyEightRisingCaseStudy() {

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
              <div className="subheader text-xs md:text-sm">88RISING • CONCEPT 2023</div>
              <h1 className="text-3xl md:text-5xl leading-tight md:leading-tight font-normal">
                Turning heritage into a discovery engine for 88rising&apos;s global fanbase.
              </h1>
            </div>

            {/* Hero Video/Image */}
            <div className="w-full relative overflow-hidden mt-8 md:mt-12">
              <video
                src="/projects/88rising/videos/88risingthumbnail.mp4"
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
                <p>4 Weeks - 2023</p>
              </div>
              <div>
                <div className="subheader text-xs md:text-sm mb-2">TEAM</div>
                <div className="flex flex-col gap-1">
                  <p>Justin Yu</p>
                  <p>Luke Do</p>
                  <p>Claret Egwim</p>
                  <p>Terrence Xu</p>
                </div>
              </div>
              <div>
                <div className="subheader text-xs md:text-sm mb-2">SKILLS</div>
                <div className="flex flex-col gap-1">
                  <p>Product Design</p>
                  <p>Prototyping</p>
                  <p>User Research</p>
                </div>
              </div>
            </div>

            {/* Case Study Content Sections */}
            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">THE CHALLENGE</div>
                <h2 className="text-xl md:text-2xl">There is no convenient way for casual fans to discover 88rising&apos;s diverse roster.</h2>
              </div>
              <div className="mt-8 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  This gap in the music discovery experience was the starting point for our redesign.
                </p>
                <p>
                  88rising redefined Asian representation in music, launching artists like Joji and Rich Brian to mainstream success. They racked up <strong>3B YouTube views in 3 years</strong>.
                </p>
                <p>
                  But growth stalled—only <strong>0.43B views over the next 4 years</strong>. New artists weren&apos;t getting the reach early stars enjoyed, costing streams, ticket sales, and brand momentum.
                </p>
              </div>
            </section>

            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">THE PROBLEM</div>
                <h2 className="text-xl md:text-2xl">The problem wasn&apos;t the music. It was discoverability.</h2>
              </div>
              <div className="mt-8 md:mt-12 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 text-2xl font-light" style={{ color: '#252525' }}>
                    01
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-2">Content is fragmented</h3>
                    <p className="text-sm text-gray-600">Music videos, behind-the-scenes, interviews scattered across multiple YouTube channels.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 text-2xl font-light" style={{ color: '#252525' }}>
                    02
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-2">The website doesn&apos;t help</h3>
                    <p className="text-sm text-gray-600">88rising&apos;s site only sells merch—no artist bios, no release calendar, no discovery tools.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 text-2xl font-light" style={{ color: '#252525' }}>
                    03
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-2">The impact</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>• <strong>62%</strong> of fans unaware of new releases</p>
                      <p>• Limited interaction with artists beyond music videos</p>
                      <p>• Declining brand engagement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-gray-50">
                <p className="text-base font-medium">Key Insight: Fans seek discovery, not a storefront.</p>
              </div>
            </section>

            {/* Feature Showcase */}
            <section className="mt-20 md:mt-28">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">THE SOLUTION</div>
                <h2 className="text-xl md:text-2xl">A cultural discovery platform that helps fans explore 88rising&apos;s roster through heritage and language.</h2>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Tap a language to discover artists by cultural heritage</h3>
                </div>
                {/* Image/Video */}
                <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Language mosaic with hover states showing music videos</span>
                  </div>
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Tap a language to discover artists by cultural heritage</h3>
                </div>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Explore regional hubs and discover artists through collabs</h3>
                </div>
                {/* GIF */}
                <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Selecting a country → seeing regional artist grid + collab panel</span>
                  </div>
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Explore regional hubs and discover artists through collabs</h3>
                </div>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Experience artists through candid photos and looping videos</h3>
                </div>
                {/* GIF */}
                <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Scrolling through artist page with photo stacks, video backdrop, quick links</span>
                  </div>
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Experience artists through candid photos and looping videos</h3>
                </div>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] md:gap-8 md:items-end">
                {/* Mobile h3 - shows above video */}
                <div className="md:hidden flex flex-col pb-6">
                  <h3 className="mt-2 text-sm">Preview upcoming drops and set release reminders</h3>
                </div>
                {/* Image */}
                <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Linear calendar with preview snippets and reminder function</span>
                  </div>
                </div>
                {/* Desktop h3 - shows on right */}
                <div className="hidden md:flex flex-col h-fit">
                  <h3 className="mt-2 text-sm">Preview upcoming drops and set release reminders</h3>
                </div>
              </div>
            </section>

            {/* IMPACT */}
            <section className="mt-20 md:mt-28">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">IMPACT</div>
                <h2 className="text-xl md:text-2xl">Concept validated through user testing.</h2>
              </div>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>User testing showed</strong> fans immediately understood the cultural navigation system
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>62%</strong> said they&apos;d use the release calendar weekly
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>Design system</strong> scales as 88rising&apos;s roster grows
                  </p>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-sm italic text-gray-600">
                    &quot;This actually makes me want to explore artists I&apos;ve never heard of&quot; - Testing participant
                  </p>
                </div>
              </div>
            </section>

            {/* DESIGN EXPLORATION */}
            <section className="mt-20 md:mt-28">
              <div className="flex flex-col gap-4">
                <div className="subheader text-xs md:text-sm">EXPLORING FORM</div>
                <h2 className="text-xl md:text-2xl">From Coordinates to Culture</h2>
              </div>
            </section>

            <section className="mt-8 md:mt-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium">The Pivot</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Early explorations used literal latitude-longitude coordinates on a world map. Each neon-red bar sat at the actual latitude of a region feeding the 88rising roster.
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  Clean concept, but testing revealed users didn&apos;t emotionally connect geography to music.
                </p>
              </div>
              {/* Comparison placeholder */}
              <div className="w-full aspect-video bg-gray-100 mt-8 md:mt-12 flex items-center justify-center">
                <span className="text-gray-400 text-sm">SIDE-BY-SIDE: Lat-long map vs. language tiles</span>
              </div>
            </section>

            <section className="mt-12 md:mt-16">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium">The Shift</h3>
                <p className="text-sm md:text-base text-gray-600">
                  We pivoted to language tiles with &quot;rising&quot; repeated in different scripts. Fans immediately gravitated to familiar languages—cultural identity felt more personal than location.
                </p>
              </div>
              <div className="mt-6 p-4 bg-gray-50">
                <p className="text-base font-medium">What This Taught Us</p>
                <p className="text-sm text-gray-600 mt-2">
                  Discovery isn&apos;t about data (coordinates)—it&apos;s about identity (language). Raw location doesn&apos;t spark curiosity; cultural connection does.
                </p>
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
                  <h3 className="font-medium text-base mb-2">Constraints force clarity</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    We spent 4 weeks exploring potential directions, leaving just 3 weeks to design and prototype. The time pressure forced ruthless focus: we trimmed every nice-to-have and doubled down on what matters most—helping fans stumble onto their next favorite artist.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2">Prototyping sells the vision</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    The language hover states and waveform calendar were prototyped in After Effects. High-fidelity motion made the concept feel real to stakeholders and users, generating excitement and validation faster than static screens ever could.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2">Visual metaphors serve the user, not the designer</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    I initially designed opposing scroll motions to &quot;reflect East-West clash.&quot; Users just saw cool interactions. Next time: focus on what helps them discover music, not what the design symbolizes.
                  </p>
                </div>
              </div>
              <div className="mt-12 text-sm text-gray-600">
                <p>Special thanks to Justin Yu for leading visual direction, and to Luke, Claret, and Terrence for their research and exploration work.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

