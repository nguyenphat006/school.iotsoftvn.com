import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const mainActivity = {
  image: "/images/high-school/section-activities/card.png",
  smallImage: "/images/high-school/section-activities/card-bg.png",
  title: "INTELLECTUAL CURIOSITY",
  description: "We believe every question is worth asking, and every idea is a doorway to new discovery. We ignite and nurture curiosity — encouraging students to wonder, explore, and challenge the world around them with open hearts and sharp minds."
};

const sideActivities = [
  {
    id: 1,
    image: "/images/high-school/section-activities/card-01.png",
    title: "TRULY BILINGUAL"
  },
  {
    id: 2,
    image: "/images/high-school/section-activities/card-02.png",
    title: "ACADEMIC EXCELLENCE"
  }
];

export default function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="w-full py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A5336] relative inline-block">
            Soft skills & extracurricular activities
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FABA1E] mt-2"></div> */}
          </h2>
        </motion.div>

        {/* 2 Main Columns Grid */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* LEFT COLUMN - 9 cols */}
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-12 h-full"
            >
              {/* Large Image - 8 cols */}
              <div className="col-span-12 md:col-span-8">
                <div className="relative w-full h-full min-h-[400px]">
                  <img
                    src={mainActivity.image}
                    alt="Students working together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Card - 4 cols */}
              <div className="text-right col-span-12 md:col-span-4 bg-[#005C34] p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 opacity-130">
                  <img
                    src={mainActivity.smallImage}
                    alt="Background decoration"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content - relative to stay above background */}
                <div className="relative z-10 flex flex-col justify-between h-full pt-12 md:pt-16 lg:pt-32">

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                    {mainActivity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm font-medium leading-relaxed mb-6 flex-grow">
                    {mainActivity.description}
                  </p>

                  {/* Read More Button */}
                  <button className="flex items-center justify-end text-white font-semibold text-sm hover:text-[#FABA1E] transition-colors duration-300 group">
                    <span>READ MORE</span>
                    <svg 
                      className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - 3 cols */}
          <div className="col-span-12 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6 h-full"
            >
              {sideActivities.map((activity, index) => (
                <div 
                  key={activity.id} 
                  className="relative flex-1 min-h-[250px]  overflow-hidden group cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Title - Bottom Left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white uppercase whitespace-nowrap">
                      {activity.title}
                    </h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
