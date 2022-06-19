import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import useOnView from "../../hooks/useOnView";

type ShowOnViewProps = {
  children: JSX.Element;
  variants?: Variants;
};

const defaultVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.5, ease: "backOut" },
  },
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

export default function ShowOnView({
  children,
  variants = defaultVariants,
}: ShowOnViewProps) {
  const controls = useAnimation();
  const [ref, inView] = useOnView({ threshold: 0.7 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      variants={variants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
