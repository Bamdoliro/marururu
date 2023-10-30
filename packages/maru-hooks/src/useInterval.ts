import { useEffect, useRef } from 'react';

type IntervalOptions =
  | number
  | {
      delay: number | null;
      trailing?: boolean;
    };

const useInterval = (callback: () => void, options: IntervalOptions) => {
  const delay = typeof options === 'number' ? options : options.delay;
  const trailing = typeof options === 'number' ? undefined : options.trailing;
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (trailing === false && savedCallback.current) {
      savedCallback.current();
    }
  }, [trailing]);

  useEffect(() => {
    if (delay === null) {
      return () => {
        return;
      };
    }

    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    const id = window.setInterval(tick, delay);
    return () => window.clearInterval(id);
  }, [delay]);
};

export default useInterval;
