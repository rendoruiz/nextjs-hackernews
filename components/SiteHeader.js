import Link from 'next/link';
import * as Switch from '@radix-ui/react-switch';
import clsx from 'clsx';

import { useDarkMode } from '../stores/appConfig';
import AppIconGlyph from "./Glyphs/AppIconGlyph";

const SiteHeader = () => {
  return ( 
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-[0.625rem] bg-[#1d2535] text-brandDarkTextPrimary shadow-md transition-colors sm:bg-brandObjectBackground sm:text-brandTextPrimary sm:dark:bg-brandDarkObjectBackground sm:dark:text-brandDarkTextPrimary">
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
  const [isChecked, setIsChecked] = useDarkMode();

  return (
    <div className="flex items-center">
      <span className='mr-3 font-medium text-sm uppercase'>{ isChecked ? "Dark" : "Light" }</span>
      <Switch.Root  
        checked={isChecked}
        onCheckedChange={(oldState) => setIsChecked(oldState)}
        className={clsx(
          "group flex items-center rounded-full w-10 h-6 transition-colors hover:bg-opacity-80",
          isChecked ? "bg-brandOrange" : "bg-brandDarkObjectBackground"
        )}
      >
        <Switch.Thumb className={clsx(
          "rounded-full mx-[2px] w-full h-5 max-w-[20px] bg-brandObjectBackground scale-[0.80] transition-all group-hover:scale-90 group-active:scale-90 group-active:max-w-[24px] ",
          isChecked ? "translate-x-4 group-active:translate-x-3" : ""
        )} />
      </Switch.Root>
    </div>
  );
}
 
export default SiteHeader;