import { useEffect, useState, useRef } from "react";
import "./Skillbar.css";

function SkillBar({ name, percentage }) {
  const [count, setCount] = useState(0);

  const skillRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();


          const duration = 2500;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCount(Math.floor(progress * percentage));

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(updateCounter);
            }
          };

          animationFrameId = requestAnimationFrame(updateCounter);
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [percentage]);

  return (
    <div className="skill-item" ref={skillRef}>
      <div className="skill-info">
        <span>{name}</span>
        <span>{count}%</span>
      </div>

      <div className="progress skill-progress">
        <div
          className="progress-bar skill-progress-bar"
          role="progressbar"
          style={{
            width: `${count}%`,
          }}
          aria-valuenow={count}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
}

export default SkillBar;
