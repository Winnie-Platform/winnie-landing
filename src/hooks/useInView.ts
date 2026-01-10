'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseInViewReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isInView: boolean;
}

/**
 * Custom hook for detecting when an element is in the viewport
 * Uses Intersection Observer API for performance
 *
 * @example
 * const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
 * return <div ref={ref} className={isInView ? 'visible' : 'hidden'}>Content</div>
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        // Unobserve after first trigger if triggerOnce is true
        if (inView && triggerOnce) {
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}

export default useInView;
