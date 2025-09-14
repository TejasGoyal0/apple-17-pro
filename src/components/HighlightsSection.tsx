import { useState, useEffect } from 'react';
import designImage from '@/assets/highlights-design.jpg';
import chipImage from '@/assets/highlights-chip.jpg';
import zoomImage from '@/assets/highlights-zoom.jpg';
import cameraImage from '@/assets/highlights-camera.jpg';
import iosImage from '@/assets/highlights-ios.jpg';
import aiImage from '@/assets/highlights-ai.jpg';

const highlights = [
  {
    id: 'design',
    title: 'Design',
    description: 'Heat‑forged aluminum unibody design for exceptional pro capability.',
    image: designImage,
    alt: 'iPhone 17 Pro, back exterior, all three finishes, Silver, Cosmic Orange, Deep Blue, Pro camera system in top left corner, 3 lenses, microphone, flash, Apple logo in center'
  },
  {
    id: 'chip',
    title: 'A19 Pro chip',
    description: 'A19 Pro, vapor cooled for lightning‑fast performance. Breakthrough battery life.',
    image: chipImage,
    alt: 'A19 Pro chip from iPhone 17 Pro'
  },
  {
    id: 'zoom',
    title: 'Optical zoom',
    description: 'The ultimate pro camera system. All 48MP Fusion rear cameras. And the longest zoom ever on an iPhone.',
    image: zoomImage,
    alt: 'iPhone 17 Pro Camera app, optical zoom 0.5x, 1x, 2x, 4x, and 8x, where 8x is selected'
  },
  {
    id: 'camera',
    title: 'iPhone 17 Pro camera',
    description: 'New Center Stage front camera. Flexible ways to frame your shot. Smarter group selfies. And so much more.',
    image: cameraImage,
    alt: 'iPhone 17 Pro camera app, Center Stage for photos feature and how to take a selfie of group of people, with their faces highlighted'
  },
  {
    id: 'ios',
    title: 'iOS',
    description: 'iOS 26. New look. Even more magic.',
    image: iosImage,
    alt: '3 iPhone 17 Pro models, front exterior, side by side, demonstrating the World Clock feature, the iOS 26 Lock Screen, and how to save notes from the Notes app'
  },
  {
    id: 'ai',
    title: 'Apple Intelligence',
    description: 'Apple Intelligence.',
    subtitle: 'Effortlessly helpful features — from image creation to Live Translation.',
    footnote: '1, 2',
    image: aiImage,
    alt: 'A hand holds iPhone 17 Pro, demonstrating the Apple Intelligence Live Translation feature during a phone call'
  }
];

const HighlightsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="pb-20 lg:pb-32" style={{ backgroundColor: '#2c2c2c' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-black rounded-3xl overflow-hidden w-full h-[600px]">
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 right-0 z-10 p-8 lg:p-12">
              <div className="text-center">
                <h3 className="text-white text-xl font-medium mb-4">
                  {highlights[currentSlide].title}
                </h3>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold leading-tight mb-2">
                  {highlights[currentSlide].description}
                </h2>
                {highlights[currentSlide].subtitle && (
                  <p className="text-white/90 text-lg leading-relaxed">
                    {highlights[currentSlide].subtitle}
                    {highlights[currentSlide].footnote && (
                      <sup className="text-white/60 text-sm ml-1">{highlights[currentSlide].footnote}</sup>
                    )}
                  </p>
                )}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 top-32">
              <img 
                src={highlights[currentSlide].image}
                alt={highlights[currentSlide].alt}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out rounded-b-3xl"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 space-x-6">
          <div className="flex space-x-2">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60 w-2'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 transition-colors"
          >
            {isPlaying ? (
              <div className="w-3 h-3 flex space-x-1">
                <div className="w-1 h-3 bg-white"></div>
                <div className="w-1 h-3 bg-white"></div>
              </div>
            ) : (
              <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;