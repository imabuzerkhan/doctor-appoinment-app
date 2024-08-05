import React from "react";
import Image from "next/image";
import Link from "next/link";

import Sociallink from "./Sociallink";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-600 dark:text-white sm:justify-start">
                <Image src="/logo.svg" alt="logo" width={180} height={80} />
              </div>

             <Sociallink/>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Services
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                     Checkup
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Discussion
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Healthy Checkup
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                     Exercising
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Special doctor
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Company
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      History
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Helpful Links
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Legal
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-left">
            Copyright &copy; 2024.<Link href="https://my-portfolio-gray-mu-55.vercel.app/" >Abuzer Khan</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
