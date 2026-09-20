import { useState, useEffect, useCallback } from 'react';

export type Route = 'home' | 'privacy-policy';

function getInitialRoute(): Route {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (
    path === '/privacy-policy' ||
    path === '/privacypolicy' ||
    path.endsWith('/privacypolicy.html') ||
    hash === '#/privacy-policy' ||
    hash === '#/privacypolicy' ||
    hash === '#privacy-policy'
  ) {
    return 'privacy-policy';
  }
  return 'home';
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = useCallback((target: string) => {
    if (typeof window === 'undefined') return;

    const lower = target.toLowerCase();
    const isPrivacy =
      lower === '/privacy-policy' ||
      lower === 'privacy-policy' ||
      lower === '/privacypolicy' ||
      lower === '#/privacy-policy' ||
      lower === '#privacy-policy';

    if (isPrivacy) {
      window.history.pushState({}, '', '/privacy-policy');
      setRoute('privacy-policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigating back to home or a section on home
    const isHash = target.startsWith('#');
    const newUrl = isHash ? `/${target}` : target;
    window.history.pushState({}, '', newUrl);
    setRoute('home');

    if (isHash) {
      setTimeout(() => {
        const id = target.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return {
    route,
    isHome: route === 'home',
    isPrivacyPolicy: route === 'privacy-policy',
    navigate,
  };
}
