import { useState, useCallback } from 'react';

/**
 * A custom hook to manage Bootstrap's collapse state in a React component.
 * @returns An object containing the current collapsed state and a function to toggle it.
 */
export function useCollapse() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  }, []);

  return { isCollapsed, toggleCollapse };
}