import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import img01 from "@/images/home-page/section-academics/01.png"
import img02 from "@/images/home-page/section-academics/02.png"
import img03 from "@/images/home-page/section-academics/03.png"
import cardlhbs from "@/images/home-page/section-academics/card-lhbs.png"

const academicDivisions = [
  {
    id: 1,
    ageRange: "FROMS 15 – 16 YEARS OLD",
    title: "Grade 10",
    description:
      "Students build strong academic foundations, develop study skills, and explore core subjects to prepare for advanced high-school pathways.",
    image: img01,
    alt: "Grade 10 students",
    href: "/high-school/grade-10"
  },
  {
    id: 2,
    ageRange: "FROMS 16 – 17 YEARS OLD",
    title: "Grade 11",
    description:
      "Learners deepen subject knowledge, strengthen critical and analytical thinking, and begin preparing for university-track examinations.",
    image: img02,
    alt: "Grade 11 students",
    href: "/high-school/grade-11"
  },
  {
    id: 3,
    ageRange: "FROMS 17 – 18 YEARS OLD",
    title: "Grade 12",
    description:
      "Focused on university preparation, leadership development, and mastery of academic competencies for higher education success.",
    image: img03,
    alt: "Grade 12 students",
    href: "/high-school/grade-12"
  }
];


interface AcademicSectionProps {
  onNavigate: (path: string) => void;
}

export default function AcademicSection({ onNavigate }: AcademicSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
    id='academic-divisions'
    className="pb-16" ref={ref}>
      <div className="w-full max-w-screen-2xl mx-auto">
        {/* Title Section */}
        <motion.div
           className="text-start mb-16 flex items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
            <div className="h-1.5 w-32 bg-[#1A5336]"></div>

          <h2 className="font-bold text-[#1A5336] text-4xl lg:text-5xl mb-6">
            Academic Divisions
          </h2>
        </motion.div>

        {/* Academic Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {academicDivisions.map((division, index) => (
            <motion.div
              key={division.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => onNavigate(division.href)}
            >
              <div className="relative h-[400px] lg:h-[450px] rounded-none overflow-hidden">
                {/* Background Image */}
                <img
                  src={division.image}
                  alt={division.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* Grade Range Badge */}
                  <div className="inline-block">
                    <span className="text-[#FABA1E] text-sm font-bold uppercase tracking-wider">
                      {division.ageRange}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                    {division.title}
                  </h3>
                  {/* Learn More Arrow (appears on hover) */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-[#FABA1E] font-medium text-sm">
                      <span>Learn More</span>
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Hover Overlay for better interaction feedback */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
                <div className="absolute bottom-0 right-0 w-54 h-auto pointer-events-none">
                <img
                  src={cardlhbs}
                  alt="LHBS decoration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
