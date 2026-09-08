import { useEffect, useState } from 'react';

const LG_BREAKPOINT = 1024;

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

export function useIsMobile() {
  return useMediaQuery(`(max-width: ${LG_BREAKPOINT - 1}px)`);
}

export function useIsDesktop() {
  return useMediaQuery(`(min-width: ${LG_BREAKPOINT}px)`);
}
