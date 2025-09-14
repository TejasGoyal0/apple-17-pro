import designHeroImage from '@/assets/design-hero.jpg';

const DesignSection = () => {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.8] tracking-[-0.02em] mb-8">
            Design
          </h2>
          <div className="space-y-4">
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
              Unibody enclosure.
            </h3>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium">
              Makes a strong case for itself.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside out to be the most powerful iPhone models ever made. At the core of the new design is a heat-forged aluminum unibody enclosure that maximizes performance, battery capacity, and durability.
          </p>
        </div>

        <div className="mb-16 lg:mb-20">
          <img 
            src={designHeroImage}
            alt="iPhone 17 Pro, back exterior, forged aluminum unibody enclosure"
            className="w-full h-auto rounded-2xl lg:rounded-3xl"
          />
        </div>

        <div className="text-center mb-16 lg:mb-24">
          <button className="text-blue-500 hover:text-blue-400 font-medium text-lg transition-colors">
            Compare iPhone design
          </button>
        </div>

        <div className="text-center mb-16 lg:mb-20">
          <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Take a closer look.
          </h3>
          <button className="text-blue-500 hover:text-blue-400 font-medium text-lg transition-colors">
            View in your space
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-orange-500 text-lg font-medium">Cosmic Orange</div>
              <div className="text-white text-xl font-semibold">Colors</div>
              <p className="text-white/90 text-lg leading-relaxed">
                <strong className="text-white">Colors.</strong> Choose from three bold finishes. iPhone 17 Pro shown in Cosmic Orange.
              </p>
              <div className="text-white/70 text-base font-medium">
                Colors.
              </div>
              <div className="flex space-x-3 mt-4">
                <div className="w-6 h-6 rounded-full bg-orange-500 border border-white/20"></div>
                <div className="w-6 h-6 rounded-full bg-blue-900 border border-white/20"></div>
                <div className="w-6 h-6 rounded-full bg-gray-300 border border-white/20"></div>
              </div>
              <div className="text-white/60 text-sm space-y-1">
                <div>• Cosmic Orange</div>
                <div>• Deep Blue</div>
                <div>• Silver</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-white text-xl font-semibold">Aluminum unibody</div>
              <p className="text-white/90 text-lg leading-relaxed">
                <strong className="text-white">Aluminum unibody.</strong> Optimized for performance and battery. Aluminum alloy is remarkably light and has exceptional thermal conductivity.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-white text-xl font-semibold">Vapor chamber</div>
              <p className="text-white/90 text-lg leading-relaxed">
                <strong className="text-white">Vapor chamber.</strong> Deionized water sealed inside moves heat away from the A19 Pro chip, allowing for even higher sustained performance.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-white text-xl font-semibold">Ceramic Shield</div>
              <p className="text-white/90 text-lg leading-relaxed">
                <strong className="text-white">Ceramic Shield.</strong> Protects the back of iPhone 17 Pro, making it 4x more resistant to cracks.<sup className="text-white/60">3</sup> New Ceramic Shield 2 on the front has 3x better scratch resistance.<sup className="text-white/60">4</sup>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-white text-xl font-semibold">Immersive pro display</div>
              <p className="text-white/90 text-lg leading-relaxed">
                <strong className="text-white">Immersive pro display.</strong> Our best‑ever 6.3‑inch and 6.9‑inch Super Retina XDR displays.<sup className="text-white/60">5</sup> Brighter. Better anti‑reflection. ProMotion up to 120Hz.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-white text-xl font-semibold">Camera Control</div>
              <p className="text-white/90 text-lg leading-relaxed">
                <strong className="text-white">Camera Control.</strong> Instantly take a photo, record video, adjust settings, and more. So you never miss a moment.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-white text-xl font-semibold">Action button</div>
              <p className="text-white/90 text-lg leading-relaxed">
                <strong className="text-white">Action button.</strong> A customizable fast track to your favorite feature. Long press to launch the action you want — Silent mode, Translation, Shortcuts, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;