import Image from "next/image";
import OurVision from "../../../public/images/OurVision.png";
import AboutUs1 from "../../../public/images/AboutUs1.png";
import AboutUs2 from "../../../public/images/AboutUs2.png";
import AboutUs3 from "../../../public/images/AboutUs3.png";
import AboutUs4 from "../../../public/images/AboutUs4.png";
import { IoMdCheckmark } from "react-icons/io";

const timeline = [
  {
    name: `Execut’s Genesis`,
    description:
      'Execut explores creating an original game, considering mobile games but shifting focus to a PC game.',
    date: '2020',
    dateTime: '2020-08',
  },
  {
    name: `Bergsbruk`,
    description:
      '"North Modding Company: Bergsbruk" launches on Steam, reaching a total of 30 million downloads.',
    date: '2021',
    dateTime: '2021-12',
  },
  {
    name: `Pivot to "Out of Ore"`,
    description:
      'A strategic pivot halts further development on "Bergsbruk" to focus on a new game, "Out of Ore," signaling a new direction.',
    date: '2022',
    dateTime: '2022-02',
  },
  {
    name: `Focus on "Out of Ore"`,
    description:
      `"Out of Ore" takes center stage, with Farming Simulator modding stepping back. This shift reflects the company's evolution and growth.`,
    date: '2023',
    dateTime: '2023-12',
  },
]
const jobOpenings = [
  // {
  //   id: 1,
  //   role: 'Full-time designer',
  //   href: '#',
  //   description:
  //     'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
  //   salary: '$75,000 USD',
  //   location: 'San Francisco, CA',
  // },
]

const team = [
  {
    name: 'Christian ~ Execut',
    role: 'CEO / Lead Developer',
    imageUrl:
      'https://cdn.discordapp.com/avatars/521789871761784853/4acb41fc95eebe81b5201d54e90ec117.webp?size=100',
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
  },
  {
    name: 'Kristian ~ T-Bone',
    role: 'Dev / Lead Asset Designer',
    imageUrl:
      'https://cdn.discordapp.com/avatars/217339324973187074/08866a88ec3b8c371ebcffa98ed4f6d6.webp?size=100',
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  },
  {
    name: 'Shih-Hung ~ Darksider',
    role: 'Backend Sys. Developer',
    imageUrl:
      'https://cdn.discordapp.com/avatars/481824115422920715/f9ff1f8141150601714e2428ca5c6492.webp?size=100',
  },
  {
    name: 'Alfred ~ Warning7',
    role: 'Asset Designer',
    imageUrl:
      'https://cdn.discordapp.com/avatars/439358991001190400/5b8d4ad611cdc26e5442eb21400682d5.webp?size=100',
  },
  {
    name: 'Gabriella ~ Tarzan',
    role: 'Marketing / Finance',
    imageUrl:
      'https://cdn.discordapp.com/avatars/1048277545545629727/7c98d5ab4cd32128a63fc48798e29e11.webp?size=100',
  },
]
const listItems = [
  "Join our Discord.",
  "Follow us on social media.",
  "Read our Friday news on Steam."
];

export default function About() {
  return (
    <>
      <section className="w-full bg-[#424242] bg-opacity-50 z-10">
        <main className="isolate pb-20">
          {/* Hero section */}
          <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-[#121212] to-[#111111] pt-14">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-[#121212] shadow-xl shadow-indigo-200/10 ring-1 ring-[#333333] sm:-mr-80 lg:-mr-96"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:gap-x-8">
                <blockquote class="relative">
                  <svg class="absolute -top-9 -start-10 size-16 text-neutral-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
                  </svg>

                  <div class="relative z-10">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
                      Our vision is to become a leader in innovative and engaging game development
                    </h1>
                  </div>
                </blockquote>
                
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className="text-lg leading-8 text-gray-300">
                    Our vision is to become a leader in innovative and engaging game development, where our games not only entertain but also inspire and create memorable experiences for players worldwide. We aim to revolutionize the gaming industry by delivering high-quality and groundbreaking games that challenge conventions and take the gaming experience to new heights.
                  </p>
                </div>
                <Image
                  src={OurVision}
                  alt=""
                  className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#111111] sm:h-32" />
          </div>

          {/* Timeline section */}
          <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
            <h1 className="font-bold text-white sm:text-4xl mb-4">Our Journey</h1>
            <p className="mt-6 text-base leading-8 text-gray-300 max-w-xl mb-16">
              Our adventure commenced in late 2018 and continues to thrive. By 2023, Out of Ore emerged as our main priority, showcasing the company's growth and dedication to pioneering gaming innovation.</p>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.name}>
                  <time
                    dateTime={item.dateTime}
                    className="flex items-center text-3xl font-semibold leading-6 text-[#f8ce5e]"
                  >
                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                      <circle cx={2} cy={2} r={2} fill="currentColor" />
                    </svg>
                    {item.date}
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-100/30 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    />
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-100">{item.name}</p>
                  <p className="mt-1 text-base leading-7 text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo cloud */}
          <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-[#111111] px-6 py-16 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                About us
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Our team consists of five dedicated team members. Together, we bring a diverse range of skills to the table, covering everything from programming and 3D modeling to texturing, marketing, and economics.
              </p>
              <div>
                <div className="mx-auto mt-12 max-w-4xl overflow-x-auto">
                  <div className="flex justify-center gap-x-20 w-full">
                    <div className="flex-none">
                      <Image
                        className="max-h-56 w-full object-contain mt-6"
                        src={AboutUs1}
                        alt="Stage 1"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="flex-none">
                      <Image
                        className="max-h-56 w-full object-contain -mt-6"
                        src={AboutUs2}
                        alt="Stage 2"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="flex-none">
                      <Image
                        className="max-h-56 w-full object-contain mt-6"
                        src={AboutUs3}
                        alt="Stage 3"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="flex-none">
                      <Image
                        className="max-h-56 w-full object-contain -mt-6"
                        src={AboutUs4}
                        alt="Stage 4"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                <div
                  className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#f8ce5e] to-[#bd9e43] opacity-25"
                  style={{
                    clipPath:
                      'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our Team</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Our team is a collection of passionate and talented individuals who share a common goal: to create exceptional gaming experiences.  We are a diverse group with expertise in various fields, including programming, 3D modeling, art, design, and marketing.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-5"
            >
              {team.map((person) => (
                <li key={person.name} className="w-full">
                  <img className="mx-auto h-32 w-32 rounded-full" src={person.imageUrl} alt="" />
                  <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-[#f8ce5e]">{person.name}</h3>
                  <p className="text-base leading-6 text-gray-200">{person.role}</p>
                  <div className="flex justify-center">
                    {person.flag && <Image src={person.flag} alt="" className="mt-2 h-6 w-auto rounded-md" width={60} height={80} />}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our accomplishments and impact
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-300">
                Our accomplishments and impact are a testament to our dedication and hard work.  We've achieved significant milestones, built a strong community, and continue to strive for excellence in everything we do.  We're proud of our journey so far and excited for what the future holds.
              </p>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#f8ce5e] p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">60.9k</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-gray-900">Users that owns Out of Ore</p>
                  <p className="mt-2 text-base leading-7 text-gray-900">
                    This number represents the total number of users who own our game, Out of Ore, showcasing the game's popularity and reach.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#121212] p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">30+ Million Downloads</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Our first major project, achieved over 30 million downloads on Steam.
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-400">
                    This represents the impressive reach of our initial game, demonstrating our ability to create engaging and widely accessible titles.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#bd9e43] p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">23,692</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-gray-900">All-Time Twitch Viewers</p>
                  <p className="mt-2 text-base leading-7 text-gray-900">
                    This number represents the total number of unique viewers who have watched Out Of Ore streams on Twitch, highlighting the game's community engagement and online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
              <div className="w-full lg:max-w-lg lg:flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  We’re always looking for awesome people to join us
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-300">
                  Currently, there are no open positions at North Modding Company. However, we're always on the lookout for exceptional talent to join our team.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                  alt=""
                  className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                />
              </div>
              <div className="w-full lg:max-w-xl lg:flex-auto">
                <h3 className="sr-only">Job openings</h3>
                {jobOpenings.length > 0 ? (
                  <ul className="-my-8 divide-y divide-gray-100">
                    {jobOpenings.map((opening) => (
                      <li key={opening.id} className="py-8">
                        <dl className="relative flex flex-wrap gap-x-3">
                          <dt className="sr-only">Role</dt>
                          <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                            <a href={opening.href}>
                              {opening.role}
                              <span className="absolute inset-0" aria-hidden="true" />
                            </a>
                          </dd>
                          <dt className="sr-only">Description</dt>
                          <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{opening.description}</dd>
                          <dt className="sr-only">Salary</dt>
                          <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">{opening.salary}</dd>
                          <dt className="sr-only">Location</dt>
                          <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            {opening.location}
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="w-full h-full flex flex-col items-start -mt-20">
                    <h1 className="text-3xl font-bold">To get the latest updates</h1>
                    <ul className="mt-4">
                      {listItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 py-2">
                          <span className="bg-[#f8ce5e] rounded-full p-1 flex items-center justify-center">
                            <IoMdCheckmark className="text-[#121212]" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 inline-flex items-center justify-center rounded-md bg-[#f8ce5e] px-8 py-2 text-base font-medium text-[#121212] hover:bg-[#f8ce5e]/80">
                      Join our Discord
                    </button>
                  </div>
                )}
                {jobOpenings.length > 0 && (
                  <div className="mt-8 flex border-t border-gray-100 pt-8">
                    <a href="#" className="text-sm font-semibold leading-6 text-[#f8ce5e] hover:text-[#f8ce5e]/70">
                      View all openings <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
