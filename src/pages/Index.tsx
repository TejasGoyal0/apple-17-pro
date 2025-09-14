import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import HighlightsSection from '@/components/HighlightsSection';
import DesignSection from '@/components/DesignSection';
import CameraSection from '@/components/CameraSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#2c2c2c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl lg:text-5xl font-semibold mb-8">
              Get the highlights.
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-12">
              <span className="text-blue-500 hover:text-blue-400 font-medium text-lg cursor-pointer">
                Watch the film
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
              <span className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">Design</span>
              <span className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">A19 Pro chip</span>
              <span className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">Optical zoom</span>
              <span className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">iPhone 17 Pro camera</span>
              <span className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">iOS</span>
              <span className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">Apple Intelligence</span>
            </div>
          </div>
        </div>
      </section>

      <HighlightsSection />
      <DesignSection />
      <CameraSection />
      
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
            Performance
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8">
            A19 Pro chip.
          </h3>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
            The A19 Pro chip delivers incredible performance and efficiency. With advanced neural engines and optimized architecture, it powers everything from computational photography to Apple Intelligence features.
          </p>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
            Shared Features
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
            iPhone 17 Pro and iPhone 17 Pro Max share incredible features that make every day more powerful and more personal.
          </p>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Tech Specs</h2>
              <p className="text-white/80 text-lg">Get all the technical details.</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Switch from Android</h2>
              <p className="text-white/80 text-lg">It's easier than you think.</p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
