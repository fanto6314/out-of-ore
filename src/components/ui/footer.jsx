import Image from 'next/image'
import Link from 'next/link'
import oooLogo from '../../../public/images/outofore.jpg'
import nmcLogo from '../../../public/images/nmc.png'
import { FaYoutube, FaDiscord, FaSteam, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="shadow">
      <div className="py-3 bg-[#1a1a1a]">
        <div className="flex z-1 -mt-2">
          <div className="absolute w-full">
            <div className="dark-bar-pattern-3"></div>
          </div>
        </div>
        <div className="flex justify-center max-w-12xl mt-8 z-5 mx-auto">
          <div className="flex h-full w-full justify-center items-center">
            <div className="p-6">
              <div className="flex flex-wrap items-center w-full max-w-9xl p-5 mx-auto text-left rounded lg:flex-nowrap md:p-8">
                <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
                  <h3 className="mb-2 text-2xl font-bold text-gray-700 dark:text-gray-200">Newsletter</h3>
                  <p className="text-gray-500 dark:text-gray-400 w-full">
                    Receive weekly Out Of Ore updates in your inbox.
                  </p>
                </div>
                <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
                  <form noValidate="">
                    <div className="flex flex-col sm:flex-row">
                      <input type="email" id="email" name="email" placeholder="Enter your email address" className="flex-1 px-4 py-1 placeholder-gray-300 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring bg-[#111111] dark:text-white dark:placeholder-gray-400 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                      <button type="submit" className="w-full px-6 py-2 mt-5 text-white text-lg bg-[#111111] hover:bg-[#3a3a3a] rounded-md sm:mt-0 sm:w-auto whitespace-nowrap"> Subscribe </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 md:py-8 bg-[#131313]">
        <div className="flex justify-center items-center space-y-12 flex-col max-w-7xl mx-auto">
          <div className='inline-flex items-center'>
            <a href="#" className="flex items-center">
              <Image src={oooLogo} className="w-auto h-[60px] rounded-lg" alt="Flowbite Logo" />
            </a>
            <div className="h-1 w-5 bg-gray-500 mx-4"></div>
            <a href="#" className="flex items-center">
              <Image src={nmcLogo} className="w-auto h-[80px]" alt="nmc" />
            </a>
          </div>
          
          <ul className="flex flex-wrap items-center text-base space-x-6 font-medium text-gray-500 dark:text-gray-400">
            <li>
              <Link className='text-gray-300 hover:text-white font-normal' href="/news">
                News
              </Link>
            </li>
            <li>
              <Link className='text-gray-300 hover:text-white font-normal' href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className='text-gray-300 hover:text-white font-normal' href="/news">
                FAQs
              </Link>
            </li>
            <li>
              <Link className='text-gray-300 hover:text-white font-normal' href="/news">
                Contact
              </Link>
            </li>
            <li>
              <Link className='text-gray-300 hover:text-white font-normal' href="/news">
                Purchase
              </Link>
            </li>
            <li>
              <Link className='text-gray-300 hover:text-white font-normal' href="/news">
                Legal
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-3 bg-[#111111]">
        <div className="flex justify-between max-w-7xl mx-auto items-center">
          <span className="bebas-neue-font tracking-wider block text-lg text-gray-500 sm:text-start dark:text-gray-400">© 2024 <a href="https://northmodding.com/" className="hover:underline">North Modding Company AB</a>. All Rights Reserved.</span>
          <div className="flex items-center space-x-4">
            <Link href="https://www.youtube.com/@ExecutModding" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:text-gray-400 rounded-full p-1.5 bg-gray-400">
              <FaYoutube size={18} color="#111111" />
            </Link>
            <Link href="https://www.tiktok.com/@outofore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:text-gray-400 rounded-full p-1.5 bg-gray-400">
              <FaTiktok size={18} color="#111111" />
            </Link>
            <Link href="https://discord.com/invite/QFMWACNKMQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:text-gray-400 rounded-full p-1.5 bg-gray-400">
              <FaDiscord size={18} color="#111111" />
            </Link>
            <Link href="https://store.steampowered.com/app/2009350/Out_of_Ore/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:text-gray-400 rounded-full p-1.5 bg-gray-400">
              <FaSteam size={18} color="#111111" />
            </Link>
          </div>
          
        </div>
        
      </div>
    </footer>
  )
}