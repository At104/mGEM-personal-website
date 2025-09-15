import { SiGithub } from "react-icons/si";
import Link from 'next/link'; // Updated import for Next.js Link

export default function Footer() {
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto md:py-6 px-3 my-2">
          <div className="sm:flex sm:items-center sm:justify-between">
              <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  {/* eslint-disable-next-line */}
                  <img src="/MGEM-Logo.png" className="h-8" alt="Flowbite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">mGEM</span>
              </Link>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-x-4">
                <p className = "text-xs">McMaster iGEM recognizes and acknowledges that it is located on the <br/> traditional territories of the Mississauga and Haudenosaunee nations, and <br/> within the lands protected by the “Dish with One Spoon” wampum agreement.</p>
              </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link href="/" className="hover:underline">mGEM™</Link>. All Rights Reserved.</span>
      </div>
  </footer>
  );
}
