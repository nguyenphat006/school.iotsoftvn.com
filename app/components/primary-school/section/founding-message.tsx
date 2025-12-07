import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import founderImage from '@/images/home-page/Section-Nutrion.png';

const nutritionCards = [
  {
    id: 1,
    title: "Safe Environment",
    description: "Committed to providing a secure, caring space where every child is protected, supervised, and supported throughout the day.",
    bgColor: "#00602F",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF"
  },
  {
    id: 2,
    title: "Holistic Growth",
    description: "Fostering growth in physical, cognitive, emotional, social, and language skills with age-appropriate learning experiences.",
    bgColor: "#F5A623",
    titleColor: "#00602F",
    descriptionColor: "#000000"
  },
  {
    id: 3,
    title: "Quality Teaching",
    description: "Maintaining a team of qualified, compassionate teachers who apply modern, child-centered teaching methods.",
    bgColor: "#F5A623",
    titleColor: "#00602F",
    descriptionColor: "#000000"
  },
  {
    id: 4,
    title: "Individual Care",
    description: "Recognizing each child’s unique pace, personality, and needs, and offering personalized care and attention.",
    bgColor: "#00602F",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF"
  }
];

// ==================== SECTION 2: Founding Message ====================
export default function FoundingMessageSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      data-section="nutrition"
      className="py-24 md:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${founderImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Content - 2 columns */}
          <motion.div
            className="md:col-span-2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="text-[#FABA1E] font-bold text-sm md:text-base uppercase tracking-wider">
              NUTRITIONAL REGIME
            </div>
            
            {/* Title */}
            <h2 className="font-black text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight uppercase tracking-tight">
              Nutrition is the foundation of health for students
            </h2>
            
            {/* Description */}
            <p className="font-medium text-base md:text-lg text-white/90 mb-6 leading-relaxed">
              LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations to appreciate.
            </p>
            {/* Read More Link */}
            <div>
              <button
                onClick={() => onNavigate('/our-school/about-us')}
                className="text-[#FABA1E] font-bold text-sm md:text-base hover:underline flex items-center gap-2"
              >
                Read more
                <span>→</span>
              </button>
            </div>
          </motion.div>
          
          {/* Right: 4 Cards Grid - 3 columns */}
          <motion.div
            className="md:col-span-3 grid grid-cols-2 gap-4 lg:gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {nutritionCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="rounded-3xl p-6 lg:px-8 flex flex-col justify-center lg:min-h-[240px]"
                style={{ 
                  backgroundColor: card.bgColor
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <h3 
                  className="font-bold text-xl md:text-2xl mb-4"
                  style={{ color: card.titleColor }}
                >
                  {card.title}
                </h3>
                <p 
                  className="text-sm md:text-base font-medium leading-relaxed"
                  style={{ color: card.descriptionColor }}
                >
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}