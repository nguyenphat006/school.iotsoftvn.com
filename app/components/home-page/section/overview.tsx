import { useState } from 'react';
import { Link } from 'react-router';
import cardlhbs from "@/images/home-page/section-academics/card-lhbs.png";
import lhbs from "@/images/base/lhbs.png"
// Certificate logos - bạn cần thêm các import này
// import steamLogo from "@/images/certificates/steam-logo.png";
// import advantagesLogo from "@/images/certificates/advantages-logo.png";
// import englishCentralLogo from "@/images/certificates/english-central-logo.png";
// import cambridgeLogo from "@/images/certificates/cambridge-logo.png";

interface OverviewSectionProps {
  onNavigate: (path: string) => void;
}

export function OverviewSection({ onNavigate }: OverviewSectionProps) {
  const [activeTab, setActiveTab] = useState<'primary' | 'secondary' | 'high'>('secondary');

  return (
    <section 
    id="overview"
    className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        {/* Title & Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a5336] mb-6">
            Curriculum Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our curriculum fosters holistic development by balancing academics, creative exploration, and social-emotional growth. We blend evidence-based methods with hands-on experiences to create strong foundations for lifelong learning.
          </p>
        </div>

        {/* Row 3: Three Columns with Timeline */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Primary School Column */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#227d46]">
                Primary School
              </h3>
              <p className="text-lg text-[#227d46] mb-6">
                (Grade 1 - 5)
              </p>
            </div>

            {/* Secondary School Column */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#227d46]">
                Secondary School
              </h3>
              <p className="text-lg text-[#227d46] mb-6">
                (Grade 6 - 9)
              </p>
            </div>

            {/* High School Column */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black">
                High School
              </h3>
              <p className="text-lg text-black mb-6">
                (Grade 10 - 12)
              </p>
            </div>
          </div>

      {/* Timeline with Dots - Dots sát hai đầu */}
<div className="max-w-4xl mx-auto px-4"> {/* px-4 để không bị tràn màn hình nhỏ */}
  <div className="relative h-10"> {/* Chiều cao đủ để chứa dot và line */}

    {/* Đường line nền + progress */}
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gray-300 rounded-full overflow-hidden">
      <div 
        className="absolute top-0 left-0 h-full bg-[#1a5336] transition-all duration-500 ease-out rounded-full"
        style={{
          width: activeTab === 'primary' ? '0%' : 
                 activeTab === 'secondary' ? '50%' : 
                 '100%'
        }}
      />
    </div>

    {/* 3 Dots - định vị tuyệt đối để sát mép */}
    {/* Dot 1 - Trái */}
    <button
      onClick={() => setActiveTab('primary')}
      className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-300 z-10 bg-[#1a5336]`}
    />

    {/* Dot 2 - Giữa - LHBS Image with white background */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      {/* White circle background to create gap */}
      <div className="absolute inset-0 bg-white rounded-full w-14 h-14 -translate-x-[1px] -translate-y-[1px]"></div>
      {/* LHBS Image */}
      <img 
        src={lhbs} 
        alt="LHBS" 
        className="w-12 h-12 object-contain relative z-10"
      />
    </div>

    {/* Dot 3 - Phải */}
    <button
      onClick={() => setActiveTab('high')}
      className={`absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-300 z-10
        ${activeTab === 'high' 
          ? 'bg-[#1a5336] scale-125 shadow-lg' 
          : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'}`}
    />
  </div>
</div>
        </div>

        {/* Row 4: Two Columns Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Certificates */}
          <div>
            <h3 className="text-3xl text-center mb-4 font-bold text-[#1a5336]">
              Cirtificates
            </h3>
            
            {/* 4 Certificates Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Certificate 01 - STEAM */}
              <div className="rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                <p className="text-sm font-semibold text-gray-600 mb-4">STEAM</p>
                <div className="flex items-center justify-center h-24">
                  <img src="https://img.freepik.com/free-vector/stem-education-logo-banner-with-learning-elements_1308-60691.jpg?semt=ais_hybrid&w=740&q=80" alt="STEM Learning" className="max-h-full w-full object-contain" />
                </div>
              </div>

              {/* Certificate 02 - ADVANTAGES */}
              <div className="rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                <p className="text-sm font-semibold text-gray-600 mb-4">Certificate 02</p>
                <div className="flex items-center justify-center h-24">
                  <img src="https://vi.englishcentral.com/images/og-image.png" alt="Advantages" className="max-h-full w-full object-contain" />
                </div>
              </div>

              {/* Certificate 03 - English Central */}
              <div className="rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                <p className="text-sm font-semibold text-gray-600 mb-4">Certificate 03</p>
                <div className="flex items-center justify-center h-24">
                  <img src="https://advantagesschool.com/wp-content/uploads/2024/10/advantages-school-international-logo.jpg" alt="English Central" className="max-h-full w-full object-contain" />
                </div>
              </div>

              {/* Certificate 04 - Cambridge */}
              <div className="rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                <p className="text-sm font-semibold text-gray-600 mb-4">Certificate 04</p>
                <div className="flex items-center justify-center h-24">
                  <img src="https://download.logo.wine/logo/University_of_Cambridge/University_of_Cambridge-Logo.wine.png" alt="Cambridge Assessment English" className="max-h-full w-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider Line - positioned relative to grid */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gray-300 -translate-x-1/2"></div>

          {/* Right Column - School Card */}
          <div className="">
            <div className="bg-white border rounded-2xl p-8 md:p-12 overflow-hidden relative min-h-[250px] shadow-md">
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-[#227d46]">
                  Secondary School
                </h3>
                <p className="text-xl md:text-2xl font-medium text-[#227d46] mb-6">
                  (Grade 6 - 9)
                </p>
                <p className="text-base text-gray-700 mb-8 max-w-md">
                  LHBS is committed to creating a humanistic learning environment that nurtures and educates young.
                </p>
                
                <button
                  onClick={() => onNavigate('/secondary-school')}
                  className="rounded-lg! inline-flex items-center justify-center px-8 py-3 bg-[#FABA1E] text-[#1a5336] font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#e5a812] transition-colors"
                >
                  LEARN MORE
                </button>
              </div>

              {/* Bottom Right Image */}
              <div className="absolute bottom-0 right-0 w-2/3 md:w-1/2">
                <img 
                  src={cardlhbs} 
                  alt="LHBS Decoration" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
