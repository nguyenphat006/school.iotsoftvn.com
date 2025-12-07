import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState, useCallback } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import bgAcademicBilingual from '@/images/home-page/section-03-bg.png'

const studentAchievements = [
  {
    id: 1,
    image: "/images/home-page/section-achievements/student-1.png",
    name: "VAN PHÚ",
    achievement: "ĐẠI HỌC BÁCH KHOA - ĐHQG TPHCM"
  },
  {
    id: 2,
    image: "/images/home-page/section-achievements/student-2.jpg",
    name: "ĐẶNG DOANH",
    achievement: "ĐẠI HỌC TDTT TP. HỒ CHÍ MINH"
  },
  {
    id: 3,
    image: "/images/home-page/section-achievements/student-3.jpg",
    name: "NHƯ Ý",
    achievement: "ĐẠI HỌC RMIT VIỆT NAM"
  },
  {
    id: 4,
    image: "/images/home-page/section-achievements/student-4.jpg",
    name: "HOÀNG ANH",
    achievement: "ĐẠI HỌC RMIT VIỆT NAM"
  },
  {
    id: 5,
    image: "/images/home-page/section-achievements/student-5.jpg",
    name: "THÀNH TUYÊN",
    achievement: "ĐẠI HỌC LẠC HỒNG"
  },
];

export default function StudentAchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [emblaApi, setEmblaApi] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  const activeStudent = studentAchievements[selectedIndex]

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-[#015c34]">
      {/* Background Image Overlay */}
 {/* Background Academic Bilingual Image */}
      <div 
        className="absolute inset-0 z-10 opacity-60"
        style={{
          backgroundImage: `url(${bgAcademicBilingual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6">

        {/* TITLE */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight 
          bg-gradient-to-r from-[#DE8710] via-[#FFCB66] via-[#F9AF22] via-[#FFCA67] to-[#E2901A] 
          bg-clip-text text-transparent 
          inline-block uppercase 
          drop-shadow-[0_2px_2px_rgba(148,148,148,0.3)]"> {/* Shadow màu #949494 với 30% opacity */}
          Student Achievements
        </h1> 
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative max-w-6xl mx-auto px-20">
         <div className="absolute inset-x-[0%] top-18 h-[105%] -translate-y-1/4 mx-auto w-full 
  bg-achievement
  opacity-80 mix-blend-screen pointer-events-none z-0" /> {/* w-[90%] mx-auto để hẹp và centered */} {/* mix-blend-screen để glow vàng đẹp, blur-md cho mềm mại */}
          <Carousel
            setApi={setEmblaApi}
            // plugins={[autoplayPlugin.current]} // Giữ nếu dùng autoplay
            opts={{ 
              loop: true, 
              align: "center",
              containScroll: "trimSnaps", // Bonus: scroll mượt hơn, trim snap thừa
              startIndex: 2,
              duration: 30 // Bonus: transition chậm mượt
            }}
            className="w-full"
          >
            <CarouselContent className="gap-6"> {/* Tăng gap-6 nếu muốn space lớn hơn giữa items */}
              {studentAchievements.map((item, index) => {
                const isActive = index === selectedIndex
                
        return (
          <CarouselItem 
            key={item.id} 
            className="basis-[25%] md:basis-[22%] lg:basis-[25%]" // Giảm basis để show 4+ items (thử 20% cho 5 items)
          >
            <div className="p-2">
              <motion.div
                className={cn(
                  "relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer",
                  isActive
                    ? "scale-110 opacity-100 z-20" // Nổi bật active
                    : "scale-85 opacity-100 z-0" // opacity-100 để overlay xử lý mờ
                )}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {/* Ảnh */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto object-cover block"
                />

                {/* Overlay mờ khi không active */}
                {!isActive && (
                  <div 
                    className="absolute inset-0 bg-black/40 pointer-events-none 
                              transition-all duration-500"
                  />
                )}
              </motion.div>
            </div>
          </CarouselItem>
        )
      })}
    </CarouselContent>

    {/* Navigation - Uncomment nếu dùng */}
    {/* <CarouselPrevious className="absolute top-1/2 -left-16 -translate-y-1/2 h-12 w-12 bg-white border-2 border-[#FABA1E] text-[#015c34] hover:bg-[#FABA1E] hover:text-white transition-colors shadow-lg z-10" />
    <CarouselNext className="absolute top-1/2 -right-16 -translate-y-1/2 h-12 w-12 bg-white border-2 border-[#FABA1E] text-[#015c34] hover:bg-[#FABA1E] hover:text-white transition-colors shadow-lg z-10" /> */}
  </Carousel>
</div>

        {/* Active Student Info - Below Carousel */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          key={selectedIndex}
        >
          <p className="text-white text-lg mb-2">Tân sinh viên</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FDB911] uppercase">
            {activeStudent.achievement}
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
