"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "../../public/images/MassiveOpenworld.png";
import Image2 from "../../public/images/build.png";
import Image3 from "../../public/images/Buildwhateveryouwant.png";

export default function AboutOutOfOre() {
  const fadeInVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 },
  };

  return (
    <section id="about" className="bg-[#111111] w-full h-full">
      {[
        {
          id: 1,
          image: Image1,
          title: "Massive Open World",
          text1:
            "Uncover the wonders of the wilderness as you traverse through expansive landscapes, ready to be explored. With maps stretching across an impressive 400,000 square kilometers, there's plenty of room for adventure.",
          text2:
            "Whether you're digging deep into the earth, setting off explosive charges, or constructing towering structures, the possibilities are endless. Immerse yourself in this new environment, allowing your creativity to flourish as you craft your own unique world from the ground up.",
          reverse: false,
        },
        {
          id: 2,
          image: Image2,
          title: "Build whatever you want",
          text1:
            "The only limit is your imagination! In this immersive world, players have the freedom to build whatever they desire, from towering fortresses to intricate underground cities. With a vast array of resources waiting to be unearthed, the possibilities are endless.",
          text2:
            "Whether you dream of crafting epic structures or embarking on daring adventures, the choice is yours. So grab your pickaxe, gather your friends, and let your creativity run wild!",
          reverse: true,
        },
        {
          id: 3,
          image: Image3,
          title: "Run your own Mining Company",
          text1:
            "Take the reins of your very own mining enterprise, where you'll oversee the construction of your site and the expansion of your fleet. Embark on expeditions to unearth valuable ore deposits, then watch as your vision comes to life with the creation of a state-of-the-art production facility.",
          text2:
            "Customize your plant to your liking, incorporating sorting, crushing, and refining capabilities to optimize your ore processing operations.",
          reverse: false,
        },
      ].map(({ id, image, title, text1, text2, reverse }, index, arr) => (
        <div key={id}>
          <div
            className={`flex flex-col xl:flex-row ${
              reverse ? "xl:flex-row-reverse" : ""
            } justify-between items-center p-10 mx-0 xl:mx-2 2xl:mx-40`}
          >
            <motion.div
              className="max-w-lg mb-10 lg:mb-0 mt-16"
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              variants={fadeInVariants}
            >
              <h2 className="text-base text-[#f8ce5e] mb-2">Out of Ore</h2>
              <h1 className="text-3xl lg:text-4xl text-white mb-4">{title}</h1>
              <p className="text-base text-gray-500 mb-3">{text1}</p>
              <p className="text-base text-gray-500 mb-6">{text2}</p>
            </motion.div>
            <motion.div
              className="relative shadow-lg"
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              variants={fadeInVariants}
            >
              <div className="absolute inset-0 border-2 border-[#f8ce5e] rounded-lg translate-x-3 -translate-y-3 transform pointer-events-none z-0"></div>
              <Image
                src={image}
                className="w-auto h-[200px] rounded-lg lg:w-[600px] lg:h-[350px] lg:mb-0 object-cover relative z-10"
                alt="Home"
              />
            </motion.div>
          </div>
          {index < arr.length - 1 && (
            <motion.div
              className="border-b border-[#bd9e43] md:mx-64 mx-12 origin-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              variants={dividerVariants}
            />
          )}
        </div>
      ))}
    </section>
  );
}
