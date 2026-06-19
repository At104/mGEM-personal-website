import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-screen-xl mx-auto md:py-8 px-6 my-2">
          <div className="sm:flex sm:items-center sm:justify-between">
              <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse group">
                  {/* eslint-disable-next-line */}
                  <img src="/MGEM-Logo.png" className="h-8 drop-shadow-[0_0_6px_rgba(241,117,35,0.35)]" alt="mGEM Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-mgem-peach group-hover:text-mgem-gold transition-colors">mGEM</span>
              </Link>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-mgem-peach/80 sm:mb-0 space-x-4">
                <p className="text-xs leading-relaxed">McMaster iGEM recognizes and acknowledges that it is located on the <br/> traditional territories of the Mississauga and Haudenosaunee nations, and <br/> within the lands protected by the &ldquo;Dish with One Spoon&rdquo; wampum agreement.</p>
              </ul>
          </div>
          <hr className="home-section-divider my-6 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-mgem-peach/60 sm:text-center">
            © 2025 <Link href="/" className="hover:text-mgem-gold transition-colors">mGEM™</Link>. All Rights Reserved.
          </span>
      </div>
  </footer>
  );
}
