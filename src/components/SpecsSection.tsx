const SpecsSection = () => {
  const specs = [
    {
      category: "Display",
      items: [
        { label: "Screen Size", value: "6.3″ (diagonal)" },
        { label: "Display Type", value: "Super Retina XDR OLED" },
        { label: "Resolution", value: "2556×1179 pixels at 460 ppi" },
        { label: "Technology", value: "ProMotion with adaptive refresh rates up to 120Hz" },
        { label: "Brightness", value: "1000 nits max (typical), 1600 nits peak (HDR), 2000 nits peak (outdoor)" }
      ]
    },
    {
      category: "Camera",
      items: [
        { label: "Main Camera", value: "48MP ƒ/1.78 aperture" },
        { label: "Ultra Wide", value: "12MP ƒ/2.2 aperture and 120° field of view" },
        { label: "Telephoto", value: "12MP ƒ/2.8 aperture" },
        { label: "Optical Zoom", value: "3x optical zoom in, 2x optical zoom out, 6x optical zoom range" },
        { label: "Digital Zoom", value: "Up to 15x digital zoom" }
      ]
    },
    {
      category: "Chip",
      items: [
        { label: "Processor", value: "A18 Pro chip" },
        { label: "CPU", value: "New 6-core CPU with 2 performance and 4 efficiency cores" },
        { label: "GPU", value: "New 6-core GPU" },
        { label: "Neural Engine", value: "New 16-core Neural Engine" }
      ]
    },
    {
      category: "Battery",
      items: [
        { label: "Video Playback", value: "Up to 29 hours" },
        { label: "Video Streaming", value: "Up to 25 hours" },
        { label: "Audio Playback", value: "Up to 95 hours" },
        { label: "Charging", value: "MagSafe wireless charging up to 25W, Qi2 wireless charging up to 15W" }
      ]
    },
    {
      category: "Design",
      items: [
        { label: "Materials", value: "Titanium with textured matte glass back" },
        { label: "Colors", value: "Natural Titanium, Blue Titanium, White Titanium, Black Titanium" },
        { label: "Dimensions", value: "6.12 × 2.98 × 0.32 inches (155.6 × 75.7 × 8.25 mm)" },
        { label: "Weight", value: "7.03 ounces (199 grams)" },
        { label: "Water Resistance", value: "Rated IP68" }
      ]
    }
  ];

  return (
    <section id="specs" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Tech Specs
          </h2>
          <p className="section-subtitle">
            Get the technical details on iPhone 17 Pro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {specs.map((section, index) => (
            <div key={index} className="feature-card">
              <h3 className="text-2xl font-display font-semibold mb-8 text-apple-blue">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="border-b border-border/30 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <span className="font-text font-medium text-foreground">
                        {item.label}
                      </span>
                      <span className="font-text text-muted-foreground text-right sm:max-w-md">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;