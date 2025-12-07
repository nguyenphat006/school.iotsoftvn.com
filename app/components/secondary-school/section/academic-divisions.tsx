import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import img01 from "@/images/home-page/section-academics/01.png"
import img02 from "@/images/home-page/section-academics/02.png"
import img03 from "@/images/home-page/section-academics/03.png"

const academicDivisions = [
  {
    id: 6,
    title: "Grade 06",
    image: img01,
    alt: "Grade 06 students"
  },
  {
    id: 7,
    title: "Grade 07",
    image: img02,
    alt: "Grade 07 students"
  },
  {
    id: 8,
    title: "Grade 08",
    image: img03,
    alt: "Grade 08 students"
  },
  {
    id: 9,
    title: "Grade 09",
    image: img01,
    alt: "Grade 09 students"
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
      className="py-16 lg:py-20 bg-[#F9F9F9]" 
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Title & Description - Separate Row */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
{/* Section Header */}
          <div className='flex flex-col items-center mb-12'>
            <div className='bg-[#FABA1E] w-20 h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-black text-[#1E5338] uppercase tracking-wide drop-shadow-sm text-center'>
              Academic Divisions
            </h3>
          </div>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
            At LHBS, we are proud to be a candidate school for the International Baccalaureate (IB) program. Our candidacy shows our commitment to high-quality education that fosters curiosity and intercultural understanding.
          </p>
        </motion.div>

        {/* Grade Cards - Single Row with 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {academicDivisions.map((division, index) => (
            <motion.div
              key={division.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl lg:rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onClick={() => onNavigate(`/secondary-school/grade-${division.id}`)}
            >
              <div className="relative h-[280px] lg:h-[320px]">
                {/* Background Image */}
                <img
                  src={division.image}
                  alt={division.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Grade Title - Bottom Left */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#FABA1E] tracking-tight">
                    {division.title}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
