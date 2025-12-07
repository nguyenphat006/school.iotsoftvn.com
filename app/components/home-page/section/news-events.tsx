import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import backgroundImage from '@/images/home-page/section-news/Layer_5.png'

export default function NewsEventsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Column 1: TIN TỨC (News) - 1 main image + 2 text items
  const newsItems = [
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
      date: '06/09/2025',
      title: 'A Letter to LHBS Students on the Opening Day of the New School Year',
      link: '/news/1'
    },
    {
      date: '04/09/2025',
      title: 'LHBS Launches Professional Educational Expert Network',
      link: '/news/2'
    },
    {
      date: '29/05/2025',
      title: 'What is Bilingual Education? Benefits of Bilingual Schools',
      link: '/news/3'
    }
  ]

  // Column 2: SỰ KIỆN (Events) - 1 main image + 2 small images with titles
  const eventItems = [
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/2.jpg',
      date: '22/04/2025',
      title: 'How Long Does the Terrible Twos Last? Parenting Tips',
      link: '/events/1'
    },
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/576931936_808502421811900_4863998363654667053_n.jpg',
      title: '10 Effective Study Methods for Students',
      link: '/events/2'
    },
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
      title: 'What is Holistic Education? Key Elements',
      link: '/events/3'
    }
  ]

  // Column 3: HÌNH ẢNH (Gallery) - 1 large image
  const galleryItem = {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    title: 'LHBS Students Engaging in Holistic Educational Activities',
    link: '/gallery/1'
  }

  return (
    <section ref={ref} className='py-24 w-full bg-white font-sans relative overflow-hidden'>
      {/* Background Image - Subtle */}
      <div
        className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-5'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          top: '0%'
        }}
      />

      {/* Content with relative z-index */}
      <div className='max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 relative z-10'>
        {/* Centered Header */}
        <div className='flex flex-col items-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-[#FABA1E] w-20 h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
            <h3 className='text-xl md:text-2xl font-bold text-[#FABA1E] uppercase tracking-[0.2em] mb-3 text-center'>
              Latest Updates
            </h3>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-[#1E5338] uppercase tracking-tight text-center drop-shadow-sm'>
              News & Events
            </h2>
          </motion.div>
        </div>

        {/* 3 Column Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Column 1: NEWS */}
          <motion.div
            className='border-l-4 border-gray-100 pl-8 flex flex-col relative group/col'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className='absolute -left-[4px] top-0 w-[4px] h-16 bg-[#FABA1E] group-hover/col:h-full transition-all duration-500 ease-in-out'></div>
            <h3 className='text-3xl font-black text-[#1E5338] mb-8 uppercase tracking-wide'>News</h3>

            {/* Main Image Item */}
            <div className='mb-8 cursor-pointer group' onClick={() => onNavigate(newsItems[0].link)}>
              <div className='relative overflow-hidden rounded-sm shadow-lg'>
                <div className='aspect-video w-full overflow-hidden'>
                  <img
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none' />

                {/* Text overlay */}
                <div className='absolute left-5 bottom-5 right-5 text-white pointer-events-none'>
                  <div className='flex items-start gap-4'>
                    <div className='flex flex-col text-center leading-none shrink-0 bg-[#FABA1E] text-[#1E5338] p-2 rounded-sm'>
                      <span className='text-2xl font-black mb-1'>{newsItems[0].date.split('/')[0]}</span>
                      <span className='text-xs font-bold uppercase'>
                        {new Date(newsItems[0].date.split('/').reverse().join('-')).toLocaleString('en-US', {
                          month: 'short'
                        })}
                      </span>
                    </div>
                    <div>
                      <h4 className='text-lg font-bold leading-tight line-clamp-3 drop-shadow-md group-hover:text-[#FABA1E] transition-colors'>
                        {newsItems[0].title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* List Items */}
            <div className='space-y-4 mb-8 grow'>
              {newsItems.slice(1).map((item, index) => (
                <div
                  key={index}
                  className='p-4 cursor-pointer bg-gray-50 border border-gray-100 hover:border-[#1E5338]/20 hover:bg-[#FABA1E]/10 transition-all rounded-sm group/item'
                  onClick={() => onNavigate(item.link)}
                >
                  <div className='flex items-center gap-4'>
                    <div className='flex flex-col items-center shrink-0 text-[#1E5338]'>
                      <span className='text-2xl font-black'>{item.date.split('/')[0]}</span>
                      <span className='text-xs font-bold uppercase'>
                        {new Date(item.date.split('/').reverse().join('-')).toLocaleString('en-US', { month: 'short' })}
                      </span>
                    </div>
                    <h4 className='text-sm font-bold text-[#1E5338]/80 line-clamp-2 group-hover/item:text-[#1E5338] transition-colors'>
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <button
              onClick={() => onNavigate('/news')}
              className='mt-auto w-fit flex items-center gap-3 px-6 py-3 bg-[#FABA1E] text-[#1E5338] font-bold uppercase tracking-widest text-xs hover:bg-[#1E5338] hover:text-[#FABA1E] transition-all shadow-md hover:shadow-lg rounded-sm'
            >
              <span>View More</span>
              <ArrowRight className='w-4 h-4' />
            </button>
          </motion.div>

          {/* Column 2: EVENTS */}
          <motion.div
            className='border-l-4 border-gray-100 pl-8 flex flex-col relative group/col'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className='absolute -left-[4px] top-0 w-[4px] h-16 bg-[#FABA1E] group-hover/col:h-full transition-all duration-500 ease-in-out'></div>
            <h3 className='text-3xl font-black text-[#1E5338] mb-8 uppercase tracking-wide'>Events</h3>

            {/* Main Image Item */}
            <div className='mb-8 cursor-pointer group' onClick={() => onNavigate(eventItems[0].link)}>
              <div className='relative overflow-hidden rounded-sm shadow-lg'>
                <div className='aspect-video w-full overflow-hidden'>
                  <img
                    src={eventItems[0].image}
                    alt={eventItems[0].title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none' />
                <div className='absolute left-5 bottom-5 right-5 text-white pointer-events-none'>
                  <div className='flex items-start gap-4'>
                    <div className='flex flex-col text-center leading-none shrink-0 bg-[#FABA1E] text-[#1E5338] p-2 rounded-sm'>
                      <span className='text-2xl font-black mb-1'>{(eventItems[0].date || '01/01').split('/')[0]}</span>
                      <span className='text-xs font-bold uppercase'>
                        {new Date((eventItems[0].date || '01/01/2025').split('/').reverse().join('-')).toLocaleString(
                          'en-US',
                          { month: 'short' }
                        )}
                      </span>
                    </div>
                    <h4 className='text-lg font-bold leading-tight line-clamp-3 drop-shadow-md group-hover:text-[#FABA1E] transition-colors'>
                      {eventItems[0].title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* List Items (Small Images) */}
            <div className='grid grid-cols-2 gap-4 mb-8 grow'>
              {eventItems.slice(1).map((item, index) => (
                <div
                  key={index}
                  className='cursor-pointer group/item flex flex-col'
                  onClick={() => onNavigate(item.link)}
                >
                  <div className='relative overflow-hidden mb-3 aspect-video rounded-sm shadow-sm'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110'
                    />
                  </div>
                  <h4 className='text-xs font-bold text-[#1E5338] line-clamp-3 group-hover/item:text-[#FABA1E] transition-colors uppercase'>
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <button
              onClick={() => onNavigate('/events')}
              className='mt-auto w-fit flex items-center gap-3 px-6 py-3 bg-[#FABA1E] text-[#1E5338] font-bold uppercase tracking-widest text-xs hover:bg-[#1E5338] hover:text-[#FABA1E] transition-all shadow-md hover:shadow-lg rounded-sm'
            >
              <span>View More</span>
              <ArrowRight className='w-4 h-4' />
            </button>
          </motion.div>

          {/* Column 3: IMAGES */}
          <motion.div
            className='border-l-4 border-gray-100 pl-8 flex flex-col relative group/col'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className='absolute -left-[4px] top-0 w-[4px] h-16 bg-[#FABA1E] group-hover/col:h-full transition-all duration-500 ease-in-out'></div>
            <h3 className='text-3xl font-black text-[#1E5338] mb-8 uppercase tracking-wide'>Gallery</h3>

            {/* Large Image */}
            <div className='cursor-pointer group grow flex flex-col' onClick={() => onNavigate(galleryItem.link)}>
              <div className='relative overflow-hidden mb-6 rounded-sm shadow-lg grow'>
                <img
                  src={galleryItem.image}
                  alt={galleryItem.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none' />
                <div className='absolute left-6 bottom-6 right-6 text-white pointer-events-none'>
                  <h4 className='text-xl font-bold leading-tight drop-shadow-md group-hover:text-[#FABA1E] transition-colors'>
                    {galleryItem.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* View More Button */}
            <button
              onClick={() => onNavigate('/gallery')}
              className='mt-auto w-fit flex items-center gap-3 px-6 py-3 bg-[#FABA1E] text-[#1E5338] font-bold uppercase tracking-widest text-xs hover:bg-[#1E5338] hover:text-[#FABA1E] transition-all shadow-md hover:shadow-lg rounded-sm'
            >
              <span>View More</span>
              <ArrowRight className='w-4 h-4' />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
