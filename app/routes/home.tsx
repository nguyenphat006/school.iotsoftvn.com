import { useState, useEffect } from 'react';
import type { Route } from './+types/home'
import { LetsBeginCTA, EducationLevel, TheNumbers, TestimonialQuoteSection, EducationPillarsSection, CoreStrengthModal, CoreStrengthsSection, FoundingMessageSection, NewsEventsSection, TestimonialsSection, HeroCarousel, CollegeAcceptancesSection, EducationPillarModal, TypicalDaySection, AcademicSection, StudentCareSection, OverviewSection } from '@/components/home-page'
import ScrollToTop from '@/components/ui/components/ScrollToTop';
import { SolidEducationSection } from '@/components/home-page/section/solid-education';
import { LHBSLifeVideoSection } from '@/components/home-page/section/life-video';
export function meta({}: Route.MetaArgs) {
  return [{ title: 'LHBS - Trường Song Ngữ Lạc Hồng' }, { name: 'description', content: 'Chào mừng tới Trường Song Ngữ Lạc Hồng - LHBS' }]
}

export default function Home({onNavigate}: {onNavigate: (path: string) => void}) {
    return(
    <>
    
      <HeroCarousel onNavigate={onNavigate} />
      <OverviewSection onNavigate={onNavigate} />
      <AcademicSection onNavigate={onNavigate} />
      {/* Section xxx: Founding Message */}
      {/* Section xxx: Core Strengths - 5 Pillars */}
      <NewsEventsSection onNavigate={onNavigate} />
      <TestimonialQuoteSection onNavigate={onNavigate} />
      <LetsBeginCTA onNavigate={onNavigate} />
      <ScrollToTop/>
    </>
  )
}
