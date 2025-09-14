import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center h-10">
          <div className="flex items-center space-x-6">
            <div className="text-white text-base">🍎</div>
            <div className="hidden lg:flex items-center space-x-6 text-xs text-white/70">
              <a href="#" className="hover:text-white transition-colors">Store</a>
              <a href="#" className="hover:text-white transition-colors">Mac</a>
              <a href="#" className="hover:text-white transition-colors">iPad</a>
              <a href="#" className="text-white font-medium">iPhone</a>
              <a href="#" className="hover:text-white transition-colors">Watch</a>
              <a href="#" className="hover:text-white transition-colors">Vision</a>
              <a href="#" className="hover:text-white transition-colors">AirPods</a>
              <a href="#" className="hover:text-white transition-colors">TV & Home</a>
              <a href="#" className="hover:text-white transition-colors">Entertainment</a>
              <a href="#" className="hover:text-white transition-colors">Accessories</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            <div className="flex items-center space-x-3 text-white/70">
              <button className="hover:text-white transition-colors text-xs">
                🔍
              </button>
              <button className="hover:text-white transition-colors text-xs">
                🛍️
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;