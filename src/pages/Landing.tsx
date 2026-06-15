import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { SobreSection } from '../components/sections/SobreSection';
import { ServicosSection } from '../components/sections/ServicosSection';
import { EquipaSection } from '../components/sections/EquipaSection';
import { ComoFuncionaSection } from '../components/sections/ComoFuncionaSection';
import { BeneficiosSection } from '../components/sections/BeneficiosSection';
import { DepoimentosSection } from '../components/sections/DepoimentosSection';
import { BlogSection } from '../components/sections/BlogSection';
import { ContactosSection } from '../components/sections/ContactosSection';

export const Landing: React.FC = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <SobreSection />
      <ServicosSection />
      <EquipaSection />
      <ComoFuncionaSection />
      <BeneficiosSection />
      <DepoimentosSection />
      <BlogSection />
      <ContactosSection />
    </main>
    <Footer />
  </>
);
