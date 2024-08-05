import React from 'react'
import Link from 'next/link'
import { MdFacebook } from "react-icons/md";
import { Github, Instagram, X } from "lucide-react";
const Sociallink = () => {
  return (
    <div>
       <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 sm:max-w-xs sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-300 dark:hover:text-teal-300/75 flex gap-7 "
                  >
                    <MdFacebook className="text-2xl" />
                    <X className="text-2xl" />
                    <Github className="text-2xl" />
                    <Instagram className="text-2xl" />

                    </Link>
                </li>

               </ul>
    </div>
  )
}

export default Sociallink
