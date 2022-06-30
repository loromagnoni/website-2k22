import type { NextPage } from "next";
import Head from "next/head";
import AnimateOnView from "../components/animations/ShowOnView";
import textAnimation from "../components/animations/textAnimation";
import Card from "../components/card";
import Light from "../components/light";
import ListCardFiller, { CardListItem } from "../components/listCardFiller";
import Quote from "../components/quote";
import Socials from "../components/socials";
import TextCardFiller from "../components/textCardFiller";
import fs from "fs";
import yaml from "js-yaml";
import titleAnimation from "../components/animations/titleAnimation";
type HomePageProps = {
  coolStuff: CardListItem[];
  experiences: CardListItem[];
};

const Home = ({ coolStuff, experiences }: HomePageProps) => {
  return (
    <div className="relative h-screen w-screen">
      <Head>
        <title>Lorenzo Romagnoni</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen absolute overflow-hidden">
        <Light height={20} width={20} r={206} g={17} b={255} />
        <Light height={35} width={25} r={47} g={79} b={211} x={0} />
        <Light height={35} width={25} r={17} g={211} b={224} x={100} />
      </div>

      <div className="tracking-normal ">
        <AnimateOnView variants={titleAnimation}>
          <div className="font-medium flex justify-center pt-28 text-2xl ">
            Lorenzo Romagnoni
          </div>
        </AnimateOnView>
        <AnimateOnView variants={titleAnimation} additionalDelay={0.1}>
          <div className="font-medium text-center text-zinc-400 leading-7 text-md mt-3 mx-10">
            Web Software Engineer at{" "}
            <span style={{ color: "#ed34b9" }}>Bending&nbsp;Spoons</span>
            <br></br>
            previously at <span style={{ color: "#ed34b9" }}>Tutored</span>
          </div>
        </AnimateOnView>
      </div>

      <div className="mt-16 max-w-4xl m-auto">
        <div className="flex flex-col sm:flex-row">
          <AnimateOnView
            className="sm:flex-1   mx-4 my-4"
            additionalDelay={0.2}
          >
            <Card backgroundUrl="images/card-background.jpg">
              <AnimateOnView variants={textAnimation}>
                <TextCardFiller
                  paragraphs={[
                    "Inquisitive and pushing software lover",
                    "Fascined by cognitivism and finance",
                    "Engineering approach with focus on business oriented metrics and processes",
                  ]}
                />
              </AnimateOnView>
            </Card>
          </AnimateOnView>

          <AnimateOnView className="sm:flex-1  mx-4 my-4">
            <Card>
              <ListCardFiller title="Experiences" items={experiences} />
            </Card>
          </AnimateOnView>
        </div>
        <div className="flex justify-center ">
          <AnimateOnView className=" mx-4 my-4">
            <Card>
              <ListCardFiller title="Cool stuff" items={coolStuff} />
            </Card>
          </AnimateOnView>
        </div>
      </div>
      <Quote />
      <Socials />
    </div>
  );
};

export async function getStaticProps() {
  const coolStuff = yaml.load(
    fs.readFileSync("./data/coolStuff.yaml", { encoding: "utf-8" })
  ) as CardListItem[];
  const experiences = yaml.load(
    fs.readFileSync("./data/experiences.yaml", { encoding: "utf-8" })
  ) as CardListItem[];
  return {
    props: {
      experiences,
      coolStuff,
    },
  };
}

export default Home;
