import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import cx from "classnames";
import styles from "./Ex2.module.css";
const kittens = [
  "https://placekitten.com/g/400/300",
  "https://placekitten.com/g/400/400",
  "https://placekitten.com/g/800/800"
];

const useInViewport = (containerRef, { threshold = 0.2, triggerOnce }) => {
  const [isVisible, setIsVisible] = useState(false);

  const callback = useCallback(
    (entries, observer) => {
      for (let entry of entries) {
        if (entry.target === containerRef.current) {
          setIsVisible(entry.isIntersecting);

          if (triggerOnce && entry.isIntersecting) {
            observer.unobserve(containerRef.current);
          }
        }
      }
    },
    [containerRef, triggerOnce]
  );

  const observer = useMemo(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

    const observer = new IntersectionObserver(callback, {
      threshold
    });

    return observer;
  }, [threshold, callback]);

  useEffect(() => {
    let element = containerRef.current;
    if (!element) {
      return null;
    }

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, observer, containerRef, callback]);

  return isVisible;
};
const Section = ({ image }) => {
  const rootRef = useRef();
  const inViewport = useInViewport(rootRef, {
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={rootRef} className={styles.section}>
      <img
        className={cx(styles.image, inViewport && styles.imageShown)}
        src={image}
        alt={image}
      />
    </section>
  );
};

export default function App() {
  return (
    <div>
      {kittens.map((kitten) => (
        <Section key={kitten} image={kitten} />
      ))}
    </div>
  );
}
