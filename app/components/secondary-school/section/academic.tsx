import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import img01 from "@/images/home-page/section-academics/01.png"
import img02 from "@/images/home-page/section-academics/02.png"
import img03 from "@/images/home-page/section-academics/03.png"
import cloudcard from '@/images/home-page/section-academics/card-cloud.png'
import lhbscard from '@/images/home-page/section-academics/card-lhbs.png'

const academicDivisions = [
  {
    id: 1,
    gradeRange: "FROM GRADE 1-5",
    title: "LHBS Primary School",
    description: "Building strong foundations in a nurturing environment where young learners develop essential skills, creativity, and a love for learning through play-based and structured activities.",
    image: img01,
    alt: "LHBS Primary School students",
    href: "/primary-school"
  },
  {
    id: 2,
    gradeRange: "FROM GRADE 6-9", 
    title: "LHBS Secondary School",
    description: "Developing critical thinking and academic excellence through comprehensive bilingual education that prepares students for advanced studies and global citizenship.",
    image: img02,
    alt: "LHBS Secondary School students",
    href: "/secondary-school"
  },
  {
    id: 3,
    gradeRange: "FROM GRADE 10-12",
    title: "LHBS High School", 
    description: "Empowering students to achieve their highest potential through rigorous academic programs, university preparation, and leadership development for future success.",
    image: img03,
    alt: "LHBS High School students",
    href: "/high-school"
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
    className="py-24 md:py-32" ref={ref}>
      <div className="w-full max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-[#1A5336] text-4xl lg:text-5xl mb-6">
            Academic Divisions
          </h2>
          <p className="text-[#212121] font-medium text-lg max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor sed velit magna porta auctor. Sit a non fames non. Et fames egestas etiam nisl. 
            Arcu eu turpis viverra felis erat ornare semper lacus metus.
          </p>
        </motion.div>

        {/* Academic Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicDivisions.map((division, index) => (
            <motion.div
              key={division.id}
              className="relative group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => onNavigate(division.href)}
            >
              {/* Top Half - Image Section */}
              <div className="relative h-[250px] overflow-hidden">
                {/* Background Image */}
                <img
                  src={division.image}
                  alt={division.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Cloud Card at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 w-full">
                  <img
                    src={cloudcard}
                    alt="Cloud decoration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Bottom Half - Content Section */}
              <div className="relative p-6 bg-white pb-20">
                {/* Grade Range Badge */}
                <div className="inline-block mb-3">
                  <span className="text-[#FABA1E] text-sm font-bold uppercase tracking-wider">
                    {division.gradeRange}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight text-[#1A5336]">
                  {division.title}
                </h3>

                {/* Description */}
                <p className="text-[#212121] text-sm leading-relaxed mb-4">
                  {division.description}
                </p>
              </div>

              {/* LHBS Card at bottom right corner - absolute to the card wrapper */}
              <div className="absolute bottom-0 right-0 w-64 h-auto pointer-events-none">
                <img
                  src={lhbscard}
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
