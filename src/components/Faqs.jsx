export default function News() {
  const faqs = [
    {
      question: "Where can I buy the game?",
      answer:
        'The game is available for purchase on Steam; you can simply click on the "BUY NOW" button here on the website and it will take you directly to the Out of Ore steam store page.',
    },
    {
      question: "What controllers are compatible with Out of Ore?",
      answer:
        "Out of Ore supports various controllers, including Xbox controllers, Playstation controllers, and other standard gamepads.  We recommend wired controllers for the best possible experience.",
    },
    {
      question: "How fast will updates come out?",
      answer:
        "We are committed to providing regular updates to enhance and expand the Out of Ore experience. The frequency of updates may vary depending on the scope of development and testing required for each release. We aim to keep players informed about upcoming updates and their anticipated content.", // Update as needed.
    },
    {
      question: "Will Out of Ore come to console?",
      answer:
        "We are currently exploring the possibility of bringing Out of Ore to consoles. However, we have no concrete plans or timeline to share at this time. We are actively investigating this possibility and will provide updates as they become available.",
    },
    {
      question: "Can we expect more updates?",
      answer:
        "Yes, we are consistently working on game development, and we share all updates on our official platforms such as Discord or TikTok (links provided below)."
    },
    {
      question: "Why do you implement/work on X before Y?",
      answer:
        "In our development process, we prioritize features, updates, and content based on a variety of factors including player feedback, technical requirements, and our vision for the game."
    },
    {
      question: "Why isn't the game marked as EA (Early Access) on Steam?",
      answer:
        "Originally, the plan wasn't to further develop this game. However, fueled by overwhelming support, we've chosen to enhance and expand it. It's worth noting that Steam prohibits marketing a game as early access once it has undergone a full release."
    },
    {
      question: "In how many languages has the game been translated?",
      answer:
        "Currently, it's available only in English. However, we are actively exploring options for expanding to other languages in the future.  We will provide updates when we have more information to share."
    },
    {
      question: "Are you currently hiring personnel?",
      answer:
        'Not at the moment, but stay tuned by checking the "Vacancies" section under "Contact Us."'
    },
    {
      question: "If I have inquiries about the game, where can I seek assistance?",
      answer:
        'To get in touch with us, click on "Contact Us" to send your question or join our Discord Server for direct communication.'
    },
  ];

  return (
    <section className="bg-[#111111]" id="faqs">
      <div className="flex">
        <div className="absolute w-full">
          <div className="dark-bar-pattern-2"></div>
        </div>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Frequently asked Questions
        </h2>
        <div className="flex items-center justify-center my-4 w-full">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#f8ce5e] to-transparent"></div>
        </div>
        <div className="grid pt-8 text-left md:gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {faq.question}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
