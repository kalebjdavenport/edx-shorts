import { useRef, useEffect, useState } from 'react';

const useVideoAutoPlayback = options => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const cb = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      videoRef.current.play();
      setIsVideoVisible(true);
    } else {
      videoRef.current.pause();
      setIsVideoVisible(false);
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);
    if (containerRef.current) {
      observer.observe(containerRef.current)
    };

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, videoRef, isVideoVisible];
};

export { useVideoAutoPlayback };