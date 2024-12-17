import { MdOutlineFeaturedVideo } from "react-icons/md";

export default function Features() {
  const features = [
    {
      title: "Realistic Resource Management",
      text: "Efficiently manage your resources, from ore extraction and processing to energy consumption and logistics. Optimize your operations to maximize profits and ensure the long-term sustainability of your mining venture.",
    },
    {
      title: "Detailed Terrain Manipulation",
      text: "Shape the environment to your needs using a variety of terraforming tools. Excavate, level, and reshape the terrain to create efficient mining operations and optimize resource extraction.",
    },
    {
      title: "Complex Mining Operations",
      text: "Experience the intricacies of running a mining operation, from exploration and extraction to processing and refining. Manage different types of machinery, optimize workflows, and adapt to changing geological conditions.",
    },
    {
      title: "Advanced Logistics and Transportation",
      text: "Establish efficient transportation networks to move resources and equipment across your mining site. Utilize a variety of vehicles and infrastructure to streamline logistics and maximize productivity.",
    },
    {
      title: "Dynamic Economic System",
      text: "Navigate a fluctuating market where ore prices and demand change over time. Adapt your strategies to capitalize on market opportunities and maintain profitability.",
    },
    {
      title: "Technological Progression",
      text: "Research and unlock new technologies to improve mining efficiency, resource processing, and terraforming capabilities. Invest in advanced equipment and techniques to stay ahead of the competition.",
    },
    {
      title: "Environmental Considerations",
      text: "Manage the environmental impact of your mining operations. Implement sustainable practices to minimize pollution and restore the landscape after resource extraction.",
    },
    {
      title: "Base Building and Expansion",
      text: "Construct and expand your mining base with various structures, including processing plants, storage facilities, and living quarters for your workforce.",
    },
    {
      title: "Exploration and Discovery",
      text: "Explore new areas to uncover valuable resources and expand your mining operations. Discover hidden deposits and rare minerals to unlock new opportunities.",
    }
  ];


  return (
    <section className="bg-[#111111]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Planned Features
        </h2>
        <div className="flex items-center justify-center my-4 w-full">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#f8ce5e] to-transparent"></div>
        </div>
        <div className="grid pt-8 text-left md:gap-8 lg:grid-cols-3 md:grid-cols-2">
          {features.map((faq, index) => (
            <div key={index} className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <MdOutlineFeaturedVideo size={18} className="mr-2 text-gray-200" />
                {faq.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{faq.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
