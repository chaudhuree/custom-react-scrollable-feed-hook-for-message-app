import { useEffect, useRef } from 'react';

const useScrollableFeed = () => {
  const feedRef = useRef(null);

  useEffect(() => {
    const feed = feedRef.current;

    if (feed) {
      // Scroll to the bottom of the feed
      feed.scrollTop = feed.scrollHeight;

      // Reveal the scrollbar when the user starts scrolling
      feed.addEventListener('scroll', handleScroll);

      return () => {
        // Clean up event listener on unmount
        feed.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleScroll = () => {
    const feed = feedRef.current;

    if (feed) {
      // Reveal the scrollbar when the user scrolls
      feed.style.overflow = 'auto';
    }
  };

  return feedRef;
};

export default useScrollableFeed;
