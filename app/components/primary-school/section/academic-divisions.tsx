import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import img01 from "@/images/home-page/section-academics/01.png"
import img02 from "@/images/home-page/section-academics/02.png"
import img03 from "@/images/home-page/section-academics/03.png"

const academicDivisions = [
  {
    id: 1,
    title: "Grade 01",
    image: img01,
    alt: "Grade 01 students"
  },
  {
    id: 2,
    title: "Grade 02",
    image: img02,
    alt: "Grade 02 students"
  },
  {
    id: 3,
    title: "Grade 03",
    image: img03,
    alt: "Grade 03 students"
  },
  {
    id: 4,
    title: "Grade 04",
    image: img01,
    alt: "Grade 04 students"
  },
  {
    id: 5,
    title: "Grade 05",
    image: img02,
    alt: "Grade 05 students"
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
      className="py-16 bg-[#F9F9F9]" 
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Grid: 3 columns x 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          
          {/* Column 1, Row 1 - Title & Description */}
          <motion.div
            className="row-span-1 flex flex-col justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A5336] mb-4">
              Academic Divisions
            </h2>
            <p className="text-black font-medium text-base lg:text-lg leading-relaxed">
              At LHBS, we are proud to be a candidate school for the International Baccalaureate (IB) program. Our candidacy shows our commitment to high-quality education that fosters curiosity and intercultural understanding.
            </p>
          </motion.div>

          {/* Grade Cards - Fill remaining positions */}
          {academicDivisions.map((division, index) => (
            <motion.div
              key={division.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl lg:rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onClick={() => onNavigate(`/primary-school/grade-${division.id}`)}
            >
              <div className="relative h-[240px] lg:h-[300px]">
                {/* Background Image */}
                <img
                  src={division.image}
                  alt={division.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Grade Title - Bottom Left */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#FFAE00] tracking-tight">
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
