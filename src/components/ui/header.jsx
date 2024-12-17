"use client"

import Link from 'next/link'
import logo from '../../../public/images/nmc-simple.png'
import logoSvg from "../../../public/images/nmc.svg"
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export default function Header(nav = true) {
  // const router = useRouter();
  // const pathname = usePathname();
  // const pathnames = pathname.split('/').filter((x) => x);


  return (
    <header className="absolute w-full z-30 mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 backdrop-blur-lg rounded-lg">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="shrink-0 mr-4 space-x-4 flex items-center">
            <Link className="block" href="/" aria-label="Cruip">
              <Image
                src={logoSvg}
                alt="Logo"
                height={120}
                className="hover:animate-pulse transition-transform duration-200 hover:scale-110 rounded-lg -mt-1"
              />
            </Link>
            
            {/* {pathnames.length > 0 && (
              <Breadcrumbs aria-label="breadcrumb" separator="›">
                <Link className='text-white' href="/">
                  Home
                </Link>
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography className='text-white' key={to}>
                      {value}
                    </Typography>
                  ) : (
                    <Link className='text-white' href={to} key={to}>
                      {value}
                    </Link>
                  );
                })}
              </Breadcrumbs>
            )} */}
          </div>
          {/* Desktop navigation */}
          {nav &&
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow space-x-8 justify-end flex-wrap items-center">
                <li>
                  <Link className='text-white hover:text-gray-200 font-normal' href="/news">
                    News
                  </Link>
                </li>
                <li>
                  <Link className='text-white hover:text-gray-200 font-normal' href="/#faqs">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className='text-white hover:text-gray-200 font-normal' href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="btn-sm text-gray-900 bg-[#f8ce5e] rounded-sm p-2 hover:bg-[#bd9e43] w-full shadow-sm group" href="https://store.steampowered.com/app/2009350/Out_of_Ore/">
                    Purchase
                  </Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  )
}