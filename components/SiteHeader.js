import Link from 'next/link';
import * as Switch from '@radix-ui/react-switch';

import AppIconGlyph from "./Glyphs/AppIconGlyph";
import { useState } from 'react';
import clsx from 'clsx';

const SiteHeader = () => {
  return ( 
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-[0.625rem] bg-[#1d2535] text-white shadow-md sm:bg-white sm:text-brandTextPrimary">
      <Link href="/">
        <a className="flex items-center">
          <AppIconGlyph className="w-7 h-7 text-brandOrange"/>
          <h1 className="ml-2 font-primary font-bold text-lg sm:text-xl">Hacker News</h1>
        </a>
      </Link>

      <DarkModeSwitch />
    </header>
  );
}

const DarkModeSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex items-center">
      UwU
      <Switch.Root  
        checked={isChecked}
        onCheckedChange={(oldState) => setIsChecked(oldState)}
        className={clsx(
          "flex items-center rounded-full w-10 h-6 transition-colors",
          isChecked ? "bg-brandOrange" : "bg-brandTextPrimary"
        )}
      >
        <Switch.Thumb className={clsx(
          "rounded-full mx-[2px] w-5 h-5 bg-white transition-transform",
          { "translate-x-4": isChecked },
        )} />
      </Switch.Root>
    </div>
  );
}
 
export default SiteHeader;