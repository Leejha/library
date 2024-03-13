import { useCallback, useState } from 'react';

type ReturnTypes = [boolean, () => void];

/**
 * Return state and function that toggle it.
 * @param initialValue Value that state should have initially. Default is `false`.
 * @returns Array with state and function that toggles it.
 */

export function useToggle(initialValue = false): ReturnTypes {
  const [value, setValue] = useState(initialValue);

  const onToggle = useCallback(() => {
    setValue(!value);
  }, [value]);

  return [value, onToggle];
}
