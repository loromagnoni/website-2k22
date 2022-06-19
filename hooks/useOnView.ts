import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function useOnView(
  options: IntersectionObserverInit
): [ref: MutableRefObject<null>, isVisible: boolean] {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(callback, options);
    const observed = ref.current;
    if (observed) obs.observe(observed);
    return () => {
      if (observed) obs.unobserve(observed);
    };
  }, [options, ref]);

  return [ref, isVisible];
}
