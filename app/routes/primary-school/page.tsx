import { useState, useEffect } from 'react';
import type { Route } from './+types/home'
import { useOutletContext } from 'react-router';
import { 
  StudentAchievementsSection, 
  LetsBeginCTA, 
  TestimonialQuoteSection, 
  NewsEventsSection, 
  HeroCarousel, 
  TypicalDaySection, 
  AcademicSection, 
  GlobalRankingSection,
  FacilitiesSection,
  ActivitiesSection } from '@/components/primary-school'
import ScrollToTop from '@/components/ui/components/ScrollToTop';


export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Primary School - LHBS Lạc Hồng Bilingual School' }, 
    { name: 'description', content: 'LHBS Primary School - Empowering students from Grade 01-05 through rigorous academic programs, bilingual education, and leadership development for university success.' },
    { name: 'keywords', content: 'LHBS Primary School, Trường THPT Lạc Hồng, bilingual Primary school Vietnam, international curriculum, university preparation' }
  ]
}

export default function PrimarySchoolPage() {
  const { onNavigate } = useOutletContext<{ onNavigate: (path: string) => void }>();
  
  return(
    <>
    
      <HeroCarousel onNavigate={onNavigate} />
      <TypicalDaySection/>
      <AcademicSection onNavigate={onNavigate} />
      <StudentAchievementsSection/>
      <FacilitiesSection/>
      <ActivitiesSection/>
      <GlobalRankingSection/>
      <NewsEventsSection onNavigate={onNavigate} />
      <TestimonialQuoteSection onNavigate={onNavigate} />
      <LetsBeginCTA onNavigate={onNavigate} />
      <ScrollToTop/>
    </>
  )
}
