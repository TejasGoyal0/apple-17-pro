import cameraDetailImage from '@/assets/camera-detail.jpg';

const CameraSection = () => {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.8] tracking-[-0.02em] mb-8">
            Cameras
          </h2>
          <h3 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
            A big zoom forward.
          </h3>
        </div>

        <div className="mb-16 lg:mb-20">
          <img 
            src={cameraDetailImage}
            alt="iPhone 17 Pro, silver, back exterior, pro camera system, 3 lenses, microphone, flash"
            className="w-full h-auto rounded-2xl lg:rounded-3xl"
          />
        </div>

        <div className="text-center mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto">
            <div>
              <div className="mb-4">
                <span className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white">Up to </span>
                <span className="text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-500">8x</span>
              </div>
              <p className="text-xl lg:text-2xl text-white/90">optical-quality zoom</p>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white">All </span>
                <span className="text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-500">48MP</span>
              </div>
              <p className="text-xl lg:text-2xl text-white/90">rear cameras</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Across the iPhone 17 Pro camera system, you'll find innovation that goes to great lengths. The telephoto features the next generation of our tetraprism design and a 56 percent larger sensor. With an equivalent 200 mm focal length, the 8x optical-quality zoom makes this <strong className="text-white">the longest iPhone Telephoto ever</strong> — offering 16x total optical zoom range. So you can explore an even wider range of creative choices and add a longer reach to your compositions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-16 lg:mb-20">
          <div className="bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">200 mm</div>
          <div className="bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">100 mm</div>
          <div className="bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">48 mm</div>
          <div className="bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">35 mm</div>
          <div className="bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">28 mm</div>
          <div className="bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">24 mm</div>
          <div className="bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">13 mm</div>
          <div className="bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">Macro</div>
        </div>

        <div className="mb-16 lg:mb-20">
          <div className="bg-gray-900/50 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center">
            <p className="text-white/70 text-base lg:text-lg mb-8 max-w-4xl mx-auto">
              A woman wearing a long red dress stands in an empty room being photographed. The Photo app toggles through the following focal lengths to demonstrate the capabilities of the pro camera system: 200 mm, 100 mm, 48 mm, 35 mm, 28 mm, 13 mm, and macro
            </p>
            
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-3">8x</div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-xl mx-auto"></div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-3">4x</div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-xl mx-auto"></div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-3">2x</div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-xl mx-auto"></div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-3">1.5x</div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-xl mx-auto"></div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-3">1.2x</div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-xl mx-auto"></div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-3">1x</div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-xl mx-auto"></div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-3">.5x</div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-xl mx-auto"></div>
              </div>
              <div className="text-center">
                <div className="text-lg lg:text-xl font-bold text-white mb-3">Macro</div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-xl mx-auto"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 lg:mb-20">
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 leading-tight">
            Like having <strong>8 pro lenses in your pocket</strong>.
          </h3>
          <p className="text-xl lg:text-2xl text-white/90">
            Super-high-resolution <strong className="text-white">24MP photos by default</strong>.
          </p>
        </div>

        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-white/70 text-lg lg:text-xl max-w-4xl mx-auto">
              iPhone 17 Pro, interior, 48MP Fusion camera system, 48MP Fusion Main camera, 48MP Fusion Ultra Wide camera, 48MP Fusion Telephoto camera
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <h4 className="text-white text-xl lg:text-2xl font-semibold">48MP Fusion Main camera</h4>
              <ul className="text-white/80 text-lg space-y-3">
                <li>• 24/48 mm focal length (1x/2x)</li>
                <li>• ƒ/1.78 aperture</li>
                <li>• 2.44 μm quad-pixel (1.22 μm individual)</li>
              </ul>
            </div>

            <div className="text-center space-y-6">
              <h4 className="text-white text-xl lg:text-2xl font-semibold">48MP Fusion Ultra Wide camera</h4>
              <ul className="text-white/80 text-lg space-y-3">
                <li>• 13 mm focal length (.5x/macro)</li>
                <li>• ƒ/2.2 aperture</li>
                <li>• 1.4 μm quad-pixel (0.7 μm individual)</li>
              </ul>
            </div>

            <div className="text-center space-y-6">
              <h4 className="text-white text-xl lg:text-2xl font-semibold">48MP Fusion Telephoto camera</h4>
              <ul className="text-white/80 text-lg space-y-3">
                <li>• 100/200 mm focal length (4x/8x)</li>
                <li>• ƒ/2.8 aperture</li>
                <li>• 1.4 μm quad-pixel (0.7 μm individual)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white text-center mb-16 lg:mb-20">
            Pro results down to the pixel.
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="space-y-6">
              <h4 className="text-white text-xl lg:text-2xl font-semibold">Low-light photography and Night mode.</h4>
              <p className="text-white/80 text-lg leading-relaxed">
                Capture sharp, detailed, bright images with natural colors, even when it's dark.
              </p>
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center">
                <p className="text-white/60 text-sm">Close-up of a woman sitting on a spiral staircase demonstrating the pro camera system's low-light photographic capabilities</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-white text-xl lg:text-2xl font-semibold">All 48MP rear cameras.</h4>
              <p className="text-white/80 text-lg leading-relaxed">
                Pro Fusion cameras capture more detailed images at every zoom range and light level.
              </p>
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center">
                <p className="text-white/60 text-sm">A close-up of a woman wearing a bright red feather top demonstrates the super-high-resolution photographic capabilities of iPhone 17 Pro</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-white text-xl lg:text-2xl font-semibold">Ultra Wide camera.</h4>
              <p className="text-white/80 text-lg leading-relaxed">
                Capture powerful perspectives with mesmerizing macro photos and dramatic wide-angle shots.
              </p>
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center">
                <p className="text-white/60 text-sm">A wide-angle black-and-white photograph of two people demonstrates the capabilities of the Ultra Wide camera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraSection;