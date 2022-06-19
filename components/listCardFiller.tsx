import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import { motion, Variants } from "framer-motion";
import ShowOnView from "./animations/ShowOnView";

export type CardListItem = { title: string; description: string; url?: string };

type ListCardFillerProps = {
  title: string;
  items: CardListItem[];
};

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function ListCardFiller({ title, items }: ListCardFillerProps) {
  return (
    <div>
      <div className="text-sm  text-zinc-300 tracking-wide mb-4">{title}</div>
      <ShowOnView variants={container}>
        {items.map((i) => (
          <motion.li variants={item} key={i.title}>
            <div className="mb-4">
              <div className="font-medium">{i.title}</div>
              <a href={i.url} rel="noreferrer" target="_blank">
                {" "}
                <div className="text-sm shine" style={{ color: "#ed34b9" }}>
                  {i.description}{" "}
                  {i.url ? (
                    <Icon
                      className="inline mb-[2px]"
                      path={mdiOpenInNew}
                      size={0.5}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </a>
            </div>
          </motion.li>
        ))}
      </ShowOnView>
    </div>
  );
}
