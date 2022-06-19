import {
  motion,
  TargetAndTransition,
  useAnimation,
  Variants,
} from "framer-motion";
import { useEffect, useMemo } from "react";
import useOnView from "../../hooks/useOnView";

type ShowOnViewProps = {
  children: JSX.Element[] | JSX.Element;
  variants?: Variants;
  additionalDelay?: number;
};

const defaultVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.5, ease: "backOut" },
  },
  hidden: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.6, delay: 0.5 },
  },
};

const applyAdditionalDelay = (variants: Variants, additional: number) => {
  const copy = JSON.parse(JSON.stringify(variants));
  for (const variant of Object.keys(copy)) {
    if (!(copy[variant] as any).transition) continue;
    (copy[variant] as any).transition.delay += additional;
  }
  return copy;
};

export default function ShowOnView({
  children,
  variants = defaultVariants,
  additionalDelay = 0,
}: ShowOnViewProps) {
  const controls = useAnimation();
  const [ref, inView] = useOnView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const delayedVariant = useMemo(
    () => applyAdditionalDelay(variants, additionalDelay),
    [additionalDelay, variants]
  );
  return (
    <motion.ol
      variants={delayedVariant}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      {children}
    </motion.ol>
  );
}
