import Link from 'next/link';

import AppIconGlyph from "./Glyphs/AppIconGlyph";

const SiteHeader = () => {
  return ( 
    <header className="sticky top-0 z-30 flex items-center px-4 py-[0.625rem] bg-[#1d2535] text-white shadow-lg sm:bg-white sm:text-brandTextPrimary">
      <Link href="/">
        <a className="flex items-center">
          <AppIconGlyph className="w-7 h-7 text-brandOrange"/>
          <h1 className="ml-2 font-primary font-bold text-lg sm:text-xl">Hacker News</h1>
        </a>
      </Link>
    </header>
  );
}
 
export default SiteHeader;