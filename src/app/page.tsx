import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Consultation from '@/components/Consultation';
import profileData from '@/data/profile-data.json';

export default function Home() {
  const { profile, skills, recent_activity_projects, consultation_link } = profileData;

  return (
    <main>
      <Navbar />
      <Hero 
        name={profile.full_name} 
        headline={profile.headline} 
      />
      <About 
        summary={profile.about} 
        skills={skills} 
      />
      <Projects 
        projects={recent_activity_projects} 
      />
      <Consultation 
        link={consultation_link} 
      />
    </main>
  );
}
