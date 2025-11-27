import { motion } from 'framer-motion';

interface DataPoint {
  views: string;
  years: string;
  isDark: boolean;
  heightPercent: number;
}

export default function GrowthGraph() {
  const data: DataPoint[] = [
    { views: '3B', years: '2017 - 2020', isDark: true, heightPercent: 100 },
    { views: '0.43B', years: '2020 - 2024', isDark: false, heightPercent: 35 }
  ];

  const maxHeight = 400; // max height in pixels

  return (
    <div className="w-full bg-gray-50 p-6 md:p-8">
      <div className="flex flex-col gap-6">
        {/* Title */}
        <div>
          <h3 className="text-base md:text-lg font-medium mb-1">YouTube Views Growth</h3>
          <p className="text-xs md:text-sm text-gray-600">Growth dramatically declined after initial success</p>
        </div>

        {/* Cards - Aligned to bottom */}
        <div className="flex items-end gap-4 md:gap-6" style={{ minHeight: `${maxHeight}px` }}>
          {data.map((item, index) => {
            const cardHeight = (item.heightPercent / 100) * maxHeight;

            return (
              <motion.div
                key={index}
                className={`flex-1 border-2 p-6 flex flex-col justify-between ${
                  item.isDark 
                    ? 'bg-black border-black text-white' 
                    : 'bg-white border-gray-300 text-black'
                }`}
                style={{ height: `${cardHeight}px`, minHeight: '140px' }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: `${cardHeight}px`,
                  opacity: 1
                }}
                transition={{
                  height: { duration: 0.8, delay: index * 0.2, ease: 'easeOut' },
                  opacity: { duration: 0.5, delay: index * 0.2 }
                }}
              >
                {/* Views */}
                <div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-normal mb-1">
                    {item.views}
                  </div>
                  <div className="text-sm md:text-base font-normal">
                    VIEWS
                  </div>
                </div>

                {/* Years */}
                <div className={`text-xs md:text-sm ${
                  item.isDark ? 'text-white' : 'text-black'
                }`}>
                  {item.years}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Insight */}
        <div className="text-xs md:text-sm text-gray-600 pt-4 border-t border-gray-200">
          <span className="font-medium text-gray-900">86% decline in growth rate</span> — New artists weren&apos;t getting the reach early stars enjoyed.
        </div>
      </div>
    </div>
  );
}
