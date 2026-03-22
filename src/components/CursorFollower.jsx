import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 15); // 15 = radius compensation
      mouseY.set(e.clientY - 15);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="w-8 h-8 bg-purple-500 rounded-full fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
}
