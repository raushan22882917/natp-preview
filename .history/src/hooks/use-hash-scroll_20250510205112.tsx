import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A custom hook that scrolls to an element with the ID matching the hash in the URL
 * when the component mounts or when the hash changes.
 */
export function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # character
      const elementId = location.hash.substring(1);
      
      // Find the element with the matching ID
      const element = document.getElementById(elementId);
      
      // If the element exists, scroll to it
      if (element) {
        // Add a small delay to ensure the page has fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]); // Re-run when location changes
}
