import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ target, title, suffix = "", compact = false }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();

        const duration = 2500;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const currentCount = Math.floor(progress * target);

          setCount(currentCount);

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(updateCounter);
          }
        };

        animationFrameId = requestAnimationFrame(updateCounter);
      }
    }, {
      threshold: 0.5
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [target]);

  const displayCount = compact && count >= 1000
    ? `${Math.floor(count / 1000)}k`
    : count;

  return (
    <div
      className="card text-center d-flex justify-content-center"
      style={{ backgroundColor: "#432d92", height: "150px" }}
    >
      <h3 className="cards-h3" ref={counterRef}>
        {displayCount}{suffix}
      </h3>

      <h5 className="cards-h5">{title}</h5>
    </div>
  );
}

export default AnimatedCounter;