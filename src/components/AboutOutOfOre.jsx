import Image from "next/image";

import Image1 from "../../public/images/MassiveOpenworld.png";
import Image2 from "../../public/images/build.png";
import Image3 from "../../public/images/Buildwhateveryouwant.png";

export default function AboutOutOfOre() {
  return(
    <section id="about" className="bg-[#111111] w-full h-full">
      <div className="flex flex-col xl:flex-row justify-between items-center p-10 mx-0 xl:mx-2 2xl:mx-40">
        <div className="max-w-lg mb-10 lg:mb-0 mt-16">
          <h2 className="text-base text-[#f8ce5e] mb-2">Out of Ore</h2>
          <h1 className="text-3xl lg:text-4xl text-white mb-4">
          Massive Open World
          </h1>
          <p className="text-base text-gray-500 mb-3">
            Uncover the wonders of the wilderness as you traverse through expansive landscapes, ready to be explored. With maps stretching across an impressive 400,000 square kilometers, there's plenty of room for adventure.
          </p>
          <p className="text-base text-gray-500 mb-6">
            Whether you're digging deep into the earth, setting off explosive charges, or constructing towering structures, the possibilities are endless. Immerse yourself in this new environment, allowing your creativity to flourish as you craft your own unique world from the ground up.
          </p>
        </div>
        <div className="relative shadow-lg">
          <div className="absolute inset-0 border-2 border-[#f8ce5e] rounded-lg translate-x-3 -translate-y-3 transform pointer-events-none z-0"></div>
          <Image src={Image1}
            className="w-auto h-[200px] rounded-lg lg:w-[600px] lg:h-[350px] lg:mb-0 object-cover relative z-10"
            alt="Home"
          />
        </div>
      </div>
      <div className="border-b border-[#bd9e43] md:mx-64 mx-12"></div>
      <div className="flex flex-col xl:flex-row justify-between items-center p-10 mx-0 xl:mx-2 2xl:mx-40 mt-2">
        <div className="relative shadow-lg">
          <div className="absolute inset-0 border-2 border-[#f8ce5e] rounded-lg translate-x-3 -translate-y-3 transform pointer-events-none z-0"></div>
          <Image 
            src={Image2} 
            className="w-auto h-[200px] rounded-lg lg:w-[600px] lg:h-[350px] lg:mb-0 object-cover relative z-10"
            alt="Home"
          />
        </div>
        <div className="max-w-lg mb-10 lg:mb-0">
          <h2 className="text-base text-[#f8ce5e] mb-2">Out of Ore</h2>
          <h1 className="text-3xl lg:text-4xl text-white mb-4">
          Build whatever you want
          </h1>
          <p className="text-base text-gray-500 mb-3">
            The only limit is your imagination! In this immersive world, players have the freedom to build whatever they desire, from towering fortresses to intricate underground cities. With a vast array of resources waiting to be unearthed, the possibilities are endless.          </p>
          <p className="text-base text-gray-500 mb-6">
            Whether you dream of crafting epic structures or embarking on daring adventures, the choice is yours. So grab your pickaxe, gather your friends, and let your creativity run wild!
          </p>
        </div>
      </div>
      <div className="border-b border-[#bd9e43] md:mx-64 mx-12"></div>
      <div className="flex flex-col xl:flex-row justify-between items-center p-10 mx-0 xl:mx-2 2xl:mx-40">
        <div className="max-w-lg mb-10 lg:mb-0 mt-16">
          <h2 className="text-base text-[#f8ce5e] mb-2">Out of Ore</h2>
          <h1 className="text-3xl lg:text-4xl text-white mb-4">
          Run your own Mining Company 
          </h1>
          <p className="text-base text-gray-500 mb-3">
            Take the reins of your very own mining enterprise, where you'll oversee the construction of your site and the expansion of your fleet. Embark on expeditions to unearth valuable ore deposits, then watch as your vision comes to life with the creation of a state-of-the-art production facility.          </p>
          <p className="text-base text-gray-500 mb-6">
            Customize your plant to your liking, incorporating sorting, crushing, and refining capabilities to optimize your ore processing operations.
          </p>
        </div>
        <div className="relative shadow-lg">
          <div className="absolute inset-0 border-2 border-[#f8ce5e] rounded-lg translate-x-3 -translate-y-3 transform pointer-events-none z-0"></div>
          <Image src={Image3}
            className="w-auto h-[200px] rounded-lg lg:w-[600px] lg:h-[350px] lg:mb-0 object-cover relative z-10"
            alt="Home"
          />
        </div>
      </div>
    </section>
  )
}