import { useEffect, useRef } from 'react';
import { Camera, Cpu, Battery, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureCards = sectionRef.current?.querySelectorAll('.feature-item');
    featureCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Camera,
      title: "Advanced Camera System",
      description: "48MP Main camera with 2x Telephoto. ProRAW and ProRes recording. Cinematic mode in 4K Dolby Vision.",
      details: ["48MP Main | ƒ/1.78 aperture", "12MP Ultra Wide | ƒ/2.2 aperture", "12MP 2x Telephoto | ƒ/2.8 aperture", "3x optical zoom range"]
    },
    {
      icon: Cpu,
      title: "A18 Pro Chip",
      description: "The fastest chip ever in a smartphone. Up to 20% faster CPU, 10% faster GPU, and 16-core Neural Engine.",
      details: ["6-core CPU with 2 performance cores", "6-core GPU", "16-core Neural Engine", "Up to 35% faster ML computations"]
    },
    {
      icon: Battery,
      title: "All-Day Battery Life",
      description: "Up to 29 hours video playback. Fast wireless charging and USB-C with fast-charge capability.",
      details: ["Up to 29 hours video playback", "MagSafe wireless charging", "Qi2 wireless charging", "USB-C with fast-charge capability"]
    },
    {
      icon: Shield,
      title: "Titanium Design",
      description: "Grade 5 titanium with brushed finish. Ceramic Shield front that's tougher than any smartphone glass.",
      details: ["Grade 5 titanium", "Brushed finish", "Ceramic Shield front", "IP68 water resistance"]
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Pro. Beyond.
          </h2>
          <p className="section-subtitle">
            Every detail has been considered and refined to create the most advanced iPhone ever made.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="feature-item opacity-0">
              <div className="feature-card h-full">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-apple-blue rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold mb-4">{feature.title}</h3>
                    <p className="font-text text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="font-text text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-apple-blue rounded-full mr-3 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;