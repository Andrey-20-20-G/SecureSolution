"use client";
import React, { useState, useRef, useEffect } from "react";

const DemoVideoSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null); // вњ… РџСЂР°РІРёР»СЊРЅРѕ - useRef

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsLoading(false);
    };

    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <section className="text-white" id="demo">
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Р”РµРјРѕ
        </h2>
        
        <div className="relative flex justify-center items-center bg-black rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                <p className="text-white">Р—Р°РіСЂСѓР·РєР° РІРёРґРµРѕ...</p>
              </div>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-90 z-20 p-4">
              <div className="text-center">
                <p className="text-red-400 text-lg mb-4">
                  РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РІРёРґРµРѕ
                </p>
                <button
                  onClick={handleRetry}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                >
                  РџРѕРїСЂРѕР±РѕРІР°С‚СЊ СЃРЅРѕРІР°
                </button>
              </div>
            </div>
          )}

          <video
            ref={videoRef}
            width="1000"
            height="700"
            controls
            muted
            loop
            preload="metadata"
            className="w-full h-auto max-w-full max-h-[70vh] object-contain"
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoLoad}
            onError={handleVideoError}
            playsInline
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
            <source src="/videos/demonew.mp4" type="video/mp4" />
            {/* Р•СЃР»Рё РµСЃС‚СЊ WEBM: */}
            {/* <source src="/videos/demo.webm" type="video/webm" /> */}
            Р’Р°С€ Р±СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РІРёРґРµРѕ С‚РµРі.
          </video>
        </div>

        <div className="mt-6 text-center text-gray-300 max-w-2xl mx-auto">
          <p className="text-sm md:text-base">
            РџРѕСЃРјРѕС‚СЂРёС‚Рµ РґРµРјРѕРЅСЃС‚СЂР°С†РёСЋ СЂР°Р±РѕС‚С‹ РЅР°С€РµРіРѕ РїСЂРѕРґСѓРєС‚Р°
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;