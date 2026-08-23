import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component resets viewport scroll on route transitions.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Fast reset is cleaner than smooth scrolling for page changes
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
