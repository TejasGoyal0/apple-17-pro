import { Button } from '@/components/ui/button';
import Navigation from './Navigation';
import heroImage from '@/assets/iphone-17-pro-hero-real.jpg';

const HeroSection = () => {
  return (
    <>
      <Navigation />
      
      <section className="relative min-h-screen bg-black text-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 flex items-center justify-center mt-16">
          <img 
            src={heroImage}
            alt="iPhone 17 Pro in Cosmic Orange showing camera system"
            className="w-auto h-full max-h-screen object-contain"
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-60 pb-16">
          <div className="mb-6">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg">
              Pre-order
            </Button>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-white text-lg font-medium">
              From $1099 or $45.79/mo. for 24 mo.*
            </p>
            <p className="text-white/80 text-base">
              Available starting 9.19
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;