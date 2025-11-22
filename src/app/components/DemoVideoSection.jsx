"use client";
import React, { useState, useRef, useEffect } from "react";

const DemoVideoSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null); // ✅ Правильно - useRef

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
          Демо
        </h2>
        
        <div className="relative flex justify-center items-center bg-black rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                <p className="text-white">Загрузка видео...</p>
              </div>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-90 z-20 p-4">
              <div className="text-center">
                <p className="text-red-400 text-lg mb-4">
                  Не удалось загрузить видео
                </p>
                <button
                  onClick={handleRetry}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                >
                  Попробовать снова
                </button>
              </div>
            </div>
          )}

          <video
            ref={videoRef} // ✅ Правильно - useRef
            width="1000"
            height="700"
            autoPlay
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
            <source src="../../../public/videos/demo.mp4" type="video/mp4" />
            <source src="../../../public/videos/demonew.mp4" type="video/mp4" />
            <source src="../../../public/videos/demo.mkv" type="video/mkv" />
            Ваш браузер не поддерживает видео тег.
          </video>
        </div>

        <div className="mt-6 text-center text-gray-300 max-w-2xl mx-auto">
          <p className="text-sm md:text-base">
            Посмотрите демонстрацию работы нашего продукта
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;