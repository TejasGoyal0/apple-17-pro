import { useEffect, useRef } from 'react';

const OverviewSection = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="overview" ref={sectionRef} className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Titanium. So strong. So light. So Pro.
          </h2>
          <p className="section-subtitle">
            iPhone 17 Pro features a beautiful and durable design with aerospace-grade titanium, 
            making it our lightest Pro model ever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-premium rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Ti</span>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">Aerospace-Grade Titanium</h3>
            <p className="font-text text-muted-foreground leading-relaxed">
              The same alloy used in spacecraft and high-performance racing cars, delivering 
              exceptional strength while remaining incredibly lightweight.
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-apple-blue rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">A18</span>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">A18 Pro Chip</h3>
            <p className="font-text text-muted-foreground leading-relaxed">
              The fastest chip ever in a smartphone, with breakthrough AI capabilities and 
              industry-leading performance per watt.
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-pro-gold rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-space-black">48MP</span>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">Pro Camera System</h3>
            <p className="font-text text-muted-foreground leading-relaxed">
              Our most advanced camera system with computational photography powered by 
              machine learning and the Neural Engine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;