import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="tw:fixed tw:top-0 tw:left-0 tw:h-1 tw:w-full tw:bg-linear-to-r tw:from-[#00c0ff] tw:via-[#7c3aed] tw:to-[#ec4899] tw:origin-left tw:z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}