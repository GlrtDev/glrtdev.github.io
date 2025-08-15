import { useEffect } from 'react';

type Theme = 'light' | 'dark' | 'auto';

export function useTheme() {

  const getStoredTheme = (): Theme | null => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme as Theme | null;
  };

  const setStoredTheme = (theme: Theme) => {
    localStorage.setItem('theme', theme);
  };

  const getPreferredTheme = (): Theme => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme: Theme) => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  const showActiveTheme = (theme: Theme, focus = false) => {
    const themeSwitcher = document.querySelector<HTMLButtonElement>('#bd-theme');
    if (!themeSwitcher) return;

    const themeSwitcherText = document.querySelector<HTMLSpanElement>('#bd-theme-text');
    const activeThemeIcon = document.querySelector<SVGUseElement>('.theme-icon-active use');
    const btnToActive = document.querySelector<HTMLButtonElement>(`[data-bs-theme-value="${theme}"]`);

    if (!btnToActive || !themeSwitcherText || !activeThemeIcon) return;

    const svgOfActiveBtn = btnToActive.querySelector('svg use')?.getAttribute('href');

    document.querySelectorAll<HTMLButtonElement>('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    });

    btnToActive.classList.add('active');
    btnToActive.setAttribute('aria-pressed', 'true');
    if (svgOfActiveBtn) {
      activeThemeIcon.setAttribute('href', svgOfActiveBtn);
    }
    
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);

    if (focus) {
      themeSwitcher.focus();
    }
  };

  // This useEffect hook runs once when the component mounts.
  useEffect(() => {
    setTheme(getPreferredTheme());
    showActiveTheme(getPreferredTheme());

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaQueryChange = () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme());
        showActiveTheme(getPreferredTheme());
      }
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup function to remove the event listener when the component unmounts
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  // Return the functions to be used in the component
  return { setStoredTheme, setTheme, showActiveTheme };
}