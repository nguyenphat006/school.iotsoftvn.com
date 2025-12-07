import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import img01 from '@/images/home-page/section-academics/01.png'
import img02 from '@/images/home-page/section-academics/02.png'
import img03 from '@/images/home-page/section-academics/03.png'
// import cardlhbs from '@/images/home-page/section-academics/card-lhbs.png' // Removed for cleaner premium look

const academicDivisions = [
  {
    id: 1,
    gradeRange: 'FROM GRADE 1-5',
    title: 'LHBS Primary School',
    description:
      'Building strong foundations in a nurturing environment where young learners develop essential skills, creativity, and a love for learning through play-based and structured activities.',
    image: img01,
    alt: 'LHBS Primary School students',
    href: '/primary-school'
  },
  {
    id: 2,
    gradeRange: 'FROM GRADE 6-9',
    title: 'LHBS Secondary School',
    description:
      'Developing critical thinking and academic excellence through comprehensive bilingual education that prepares students for advanced studies and global citizenship.',
    image: img02,
    alt: 'LHBS Secondary School students',
    href: '/secondary-school'
  },
  {
    id: 3,
    gradeRange: 'FROM GRADE 10-12',
    title: 'LHBS High School',
    description:
      'Empowering students to achieve their highest potential through rigorous academic programs, university preparation, and leadership development for future success.',
    image: img03,
    alt: 'LHBS High School students',
    href: '/high-school'
  }
]

interface AcademicSectionProps {
  onNavigate: (path: string) => void
}

export default function AcademicSection({ onNavigate }: AcademicSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id='academic-divisions' className='py-20 md:py-32 bg-white overflow-hidden' ref={ref}>
      <div className='w-full max-w-screen-2xl mx-auto px-4'>
        {/* Title Section - Synchronized Style */}
        <div className='flex flex-col items-center mb-16 px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className='bg-[#FABA1E] w-12 h-1 md:w-16 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
            <h2 className='text-sm md:text-base font-bold text-[#FABA1E] uppercase tracking-[0.2em] mb-3'>
              Excellence in Education
            </h2>
            <h1
              className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight 
            bg-gradient-to-r from-[#006b3d] to-[#004d2c] 
            bg-clip-text text-transparent 
            inline-block uppercase 
            drop-shadow-sm'
            >
              Academic Divisions
            </h1>
          </motion.div>
        </div>

        {/* Academic Divisions Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {academicDivisions.map((division, index) => (
            <motion.div
              key={division.id}
              className='relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500'
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => onNavigate(division.href)}
            >
              <div className='relative h-[400px] lg:h-[480px] w-full'>
                {/* Background Image with Zoom Effect */}
                <div className='absolute inset-0 overflow-hidden'>
                  <img
                    src={division.image}
                    alt={division.alt}
                    className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#003820] via-black/40 to-transparent opacity-90 transition-opacity duration-500' />

                {/* Hover Highlight Overlay */}
                <div className='absolute inset-0 bg-[#FABA1E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay' />

                {/* Content Container */}
                <div className='absolute inset-0 p-8 flex flex-col justify-end items-start'>
                  {/* Decorative Top Line */}
                  <div className='absolute top-8 left-8 w-12 h-1 bg-[#FABA1E] transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out' />

                  {/* Grade Range Badge */}
                  <div className='mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75'>
                    <span className='px-3 py-1 bg-[#FABA1E] text-[#003820] text-xs font-bold uppercase tracking-widest rounded-full shadow-md'>
                      {division.gradeRange}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className='text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100'>
                    {division.title}
                  </h3>

                  {/* Divider */}
                  <div className='w-full h-px bg-white/20 mb-4 group-hover:bg-[#FABA1E]/50 transition-colors duration-500' />

                  {/* Description */}
                  <p className='text-white/90 text-sm leading-relaxed mb-6 line-clamp-3 opacity-90 group-hover:opacity-100 transition-opacity duration-500'>
                    {division.description}
                  </p>

                  {/* Learn More Button */}
                  <div className='flex items-center text-[#FABA1E] font-bold text-sm uppercase tracking-wider group/btn'>
                    <span className='mr-2 group-hover:underline decoration-2 underline-offset-4'>Learn More</span>
                    <div className='w-6 h-6 rounded-full border border-[#FABA1E] flex items-center justify-center group-hover/btn:bg-[#FABA1E] group-hover/btn:text-[#003820] transition-all duration-300'>
                      <svg
                        className='w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Decoration Bar */}
                <div className='absolute bottom-0 left-0 w-full h-1.5 bg-[#FABA1E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left' />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
