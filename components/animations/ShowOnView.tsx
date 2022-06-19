import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import useOnView from "../../hooks/useOnView";

type ShowOnViewProps = {
  children: JSX.Element;
};

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 1, delay: 0.5 } },
};

export default function ShowOnView({ children }: ShowOnViewProps) {
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
