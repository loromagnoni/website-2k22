import { Variants } from "framer-motion";

const titleAnimation: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export default titleAnimation;
