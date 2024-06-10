import Card from "../../common/heroCard/page";
import Image from "next/image";

export default function ExampleComponent() {
  return (
    <div className="bg-black  pt-20">
      <div className="font-abc-monument text-[52px] text-white font-normal leading-custom tracking-tight-custom text-center">
        Talk to a <span className="text-orange-600">Celebrity_</span>
      </div>
      <div className="font-abc-monument text-[52px] text-white font-normal leading-custom tracking-tight-custom text-center">
        via custom LLM Bots
      </div>
      <div className="font-abc-monument text-[22px] text-gray-500 font-normal leading-custom tracking-tight-custom text-center">
        Explore our Deva-Bots, a New Era of Real-time Interactions
      </div>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
        <Card
          name="Jeff Bezos"
          nickname="@jeffbezos"
          image="/hero1.svg"
        />
        <Card
          name="Elon Musk"
          nickname="@elonmusk"
          image="/hero2.svg"
        />
        <Card
          name="Leonardo de Vinchi"
          nickname="@leonardodevinchi"
          image="/hero3.svg"
        />
        <Card name="Dua Lipa" nickname="@dualipa" image="./images/hero4.svg" />
        <Card
          name="Tom Cruise"
          nickname="@tomcruise"
          image="/hero5.svg"
        />
      </div>
      <div className="flex justify-center mt-20 ">
        <Image
          src="/planet.svg"
          alt="Workflow"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
