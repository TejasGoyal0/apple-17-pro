const TechSpecsSection = () => {
  const specs = [
    {
      category: 'Display',
      items: [
        { label: 'Size', value: '6.3" and 6.9" Super Retina XDR' },
        { label: 'Resolution', value: '2622 x 1206 pixels at 460 ppi' },
        { label: 'Technology', value: 'ProMotion up to 120Hz' },
        { label: 'Brightness', value: '1000 nits max (typical); 1600 nits peak (HDR)' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Main Camera', value: '48MP Fusion camera with 2x Telephoto' },
        { label: 'Ultra Wide', value: '48MP Ultra Wide camera' },
        { label: 'Telephoto', value: '48MP Telephoto camera with 8x optical zoom' },
        { label: 'Front Camera', value: '12MP TrueDepth front camera with Center Stage' }
      ]
    },
    {
      category: 'Chip',
      items: [
        { label: 'Processor', value: 'A19 Pro chip with 6-core CPU' },
        { label: 'GPU', value: '6-core GPU with hardware-accelerated ray tracing' },
        { label: 'Neural Engine', value: '16-core Neural Engine' },
        { label: 'Memory', value: '8GB unified memory' }
      ]
    },
    {
      category: 'Battery',
      items: [
        { label: 'Video Playback', value: 'Up to 33 hours' },
        { label: 'Charging', value: 'MagSafe wireless charging up to 25W' },
        { label: 'Fast Charging', value: 'Up to 50% charge in 30 minutes' },
        { label: 'Wireless', value: 'Qi2 wireless charging up to 15W' }
      ]
    },
    {
      category: 'Design',
      items: [
        { label: 'Materials', value: 'Heat-forged aluminum unibody' },
        { label: 'Colors', value: 'Cosmic Orange, Deep Blue, Silver' },
        { label: 'Water Resistance', value: 'IP68 rated' },
        { label: 'Weight', value: '199g (6.3") / 227g (6.9")' }
      ]
    }
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tech Specs
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Get the detailed technical specifications for iPhone 17 Pro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 pb-4 border-b border-white/10">
                {spec.category}
              </h3>
              <div className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <dt className="text-sm font-medium text-white/70">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-white leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Compare Models */}
        <div className="text-center mt-16 pt-16 border-t border-white/10">
          <a 
            href="#" 
            className="inline-flex items-center text-apple-blue hover:text-apple-blue-light transition-colors text-lg font-medium"
          >
            Compare all iPhone models
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;