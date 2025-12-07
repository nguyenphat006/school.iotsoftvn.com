import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import placeholder from "@/images/base/placeholder.png"

const facilityStats = [
  { value: "2", label: "pools" },
  { value: "26", label: "classrooms" },
  { value: "34", label: "laboratories" }
];

export default function FacilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="w-full bg-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT COLUMN: Video */}
          <motion.div
            className="relative w-full h-full min-h-[400px] lg:min-h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              {/* Video placeholder with play button */}
              <img
                src={placeholder}
                alt="Facilities tour"
                className="w-full h-full object-cover"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110">
                  <svg 
                    className="w-8 h-8 text-[#1A5336] ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Title */}
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A5336] mb-6">
                Facilities
              </h2>
              
              {/* Description */}
              <p className="text-black font-medium text-lg leading-relaxed">
                Our facilities are designed to help every student learn and grow. 
                Bright, well-equipped classrooms support focused learning, while 
                the library encourages curiosity and independent study. Modern 
                science labs and computer rooms give students hands-on 
                experience with real-world skills.
              </p>
            </div>

            {/* Button */}
            <div className="mb-8">
              <button className="bg-[#FABA1E] hover:bg-[#E8A91C] text-[#15452C] font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                View 360° tour
              </button>
            </div>

            {/* Stats Row - 3 columns with dividers */}
            <div className="grid grid-cols-3 gap-0 space-y-4 pt-2">
              {facilityStats.map((stat, index) => (
                <div key={index} className="relative">
                  {/* Divider line - not for first item */}
                  {index > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-18 w-[1px] bg-gray-300"></div>
                  )}
                  
                  {/* Stat content */}
                  <div className="text-center px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <h3 className="text-5xl font-bold text-[#1A5336] mb-2">
                        {stat.value}
                      </h3>
                      <p className="text-black font-medium text-sm uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
