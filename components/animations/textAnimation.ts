import { Variants } from "framer-motion";

const textAnimation: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: 5,
    opacity: 0,
    transition: { duration: 0.5, delay: 1 },
  },
};

export default textAnimation;
