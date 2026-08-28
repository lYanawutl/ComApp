import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';

export function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const saved = await storage.get(key, initialValue);
      if (!cancelled) {
        setValue(saved);
        setHydrated(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [key]);

  useEffect(() => {
    if (hydrated) storage.set(key, value);
  }, [key, value, hydrated]);

  return [value, setValue, hydrated];
}
