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
        // Immediately scroll to the element without delay
        // Use 'start' to ensure the section appears at the top of the viewport
        element.scrollIntoView({ behavior: 'auto', block: 'start' });

        // Add a small offset to show more of the section (optional)
        window.scrollBy(0, -20);
      }
    }
  }, [location]); // Re-run when location changes
}
