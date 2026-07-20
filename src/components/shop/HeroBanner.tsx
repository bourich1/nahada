import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  button: string;
  link: string;
}

interface HeroBannerProps {
  banners: Banner[];
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  if (!banners.length) return null;

  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-near-black overflow-hidden">
      {banners.map((banner, index) => (
        <div 
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-near-black">
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-20 h-full container mx-auto px-4 md:px-8 flex flex-col justify-center items-start">
            <div className="max-w-xl">
              <h1 className="font-cairo text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md">
                {banner.title}
              </h1>
              <p className="font-cairo text-lg md:text-xl text-off-white mb-8 drop-shadow">
                {banner.subtitle}
              </p>
              <Button size="lg" className="px-8 bg-brand-red hover:bg-deep-crimson text-white border-none shadow-lg">
                {banner.button}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      {banners.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-brand-red scale-110 w-6' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
