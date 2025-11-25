import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setupCursor } from './cursor/cursor';

export default function CustomCursor() {
  const router = useRouter();

  useEffect(() => {
    const { refershCursorTargets, cleanupCursor } = setupCursor();

    //@ts-expect-error - daybreak is a global object
    window.daybreak = window.daybreak || {};

    //@ts-expect-error - daybreak is a global object
    window.daybreak.cursor = {
      refershCursorTargets
    };

    // Debounce function for refresh
    let refreshTimeout: NodeJS.Timeout;
    const debouncedRefresh = () => {
      clearTimeout(refreshTimeout);
      refreshTimeout = setTimeout(() => {
        refershCursorTargets();
      }, 100);
    };

    // Initial refresh after React has rendered
    setTimeout(debouncedRefresh, 0);
    setTimeout(debouncedRefresh, 100);
    setTimeout(debouncedRefresh, 300);

    // Use MutationObserver to watch for DOM changes and refresh cursor targets
    const observer = new MutationObserver(() => {
      debouncedRefresh();
    });

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });

    // Refresh cursor targets on route change
    const handleRouteChange = () => {
      debouncedRefresh();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Also refresh when the page becomes visible (in case of client-side navigation)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        debouncedRefresh();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(refreshTimeout);
      observer.disconnect();
      router.events.off('routeChangeComplete', handleRouteChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cleanupCursor();
    };
  }, [router]);

  return null;
}
