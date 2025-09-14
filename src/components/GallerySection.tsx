import { useEffect, useRef } from 'react';
import cameraImage from '@/assets/camera-detail.jpg';
import titaniumImage from '@/assets/titanium-detail.jpg';
import displayImage from '@/assets/display-detail.jpg';

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryItems = sectionRef.current?.querySelectorAll('.gallery-item');
    galleryItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    {
      image: cameraImage,
      title: "Pro Camera System",
      description: "Capture incredible detail with the most advanced camera system ever in iPhone."
    },
    {
      image: titaniumImage,
      title: "Titanium Design",
      description: "Aerospace-grade titanium delivers exceptional durability with a premium finish."
    },
    {
      image: displayImage,
      title: "Super Retina XDR",
      description: "The most advanced display with ProMotion technology and peak brightness."
    }
  ];

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Designed to be admired.
          </h2>
          <p className="section-subtitle">
            Every angle reveals the extraordinary attention to detail and precision engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item opacity-0">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-card shadow-medium group-hover:shadow-large transition-all duration-500">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-text text-white/90 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center w-full max-w-4xl mx-auto p-12 bg-gradient-hero rounded-3xl shadow-premium">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to upgrade?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                Experience the most advanced iPhone ever. Pre-order now and be among the first to get iPhone 17 Pro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary bg-white text-apple-blue hover:bg-white/90">
                  Pre-order from $1,199
                </button>
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-apple-blue">
                  Compare models
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;