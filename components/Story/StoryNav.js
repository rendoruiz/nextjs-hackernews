
import { useState } from 'react';
import { useRouter } from "next/dist/client/router";
import Link from 'next/link'
import clsx from "clsx";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import FireGlyph from "../Glyphs/FireGlyph";
import LightningGlyph from "../Glyphs/LightningGlyph";
import TrendUpGlyph from "../Glyphs/TrendUpGlyph";
import ChevronDownGlyph from "../Glyphs/ChevronDownGlyph";

const navItems = [
  {
    route: '/',
    text: 'Top',
    glyph: <FireGlyph className="w-full h-full" />,
  },
  {
    route: '/best',
    text: 'Best',
    glyph: <LightningGlyph className="w-full h-full" />,
  },
  {
    route: '/new',
    text: 'New',
    glyph: <TrendUpGlyph className="w-full h-full" />,
  },
];

const StoryNav = () => {
  const router = useRouter();

  return ( 
    <div className="grid grid-flow-col auto-cols-auto justify-between gap-5 mb-1 px-4 bg-white sm:border-brandDefault sm:border-brandBorder sm:rounded sm:mb-4 sm:py-3">
      <MobileNavDropdown router={router} />

      <div className="hidden sm:grid grid-flow-col auto-cols-auto gap-2">
        { navItems.map((item, index) => (
          <Link 
            key={index}
            href={item.route}
          >
            <a className={clsx(
              "flex items-center rounded-full pl-2 pr-[0.625rem] py-[0.375rem] transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive", 
              item.route === router.pathname ? "bg-brandButtonSelected text-brandOrange" : "text-brandTextSecondary"
            )}>
              <div className="w-6 h-6">{ item.glyph }</div>
              <span className="ml-2 font-bold">{ item.text }</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

const MobileNavDropdown = ({ router }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (itemRoute) => {
    if (itemRoute === router.pathname) {
      setIsOpen(false);
    }
  }

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={(state) => setIsOpen(state)}>
      <DropdownMenu.Trigger className="flex items-center rounded px-2 py-3 text-brandTextSecondary sm:hidden"> 
        { navItems.map((item, index) => item.route === router.pathname && (
          <div 
            key={index}
            className="flex self-center items-center -ml-2"
          >
            <span className="w-5 h-5">{ item.glyph }</span>
            <span className="mx-2">{ item.text }</span>
          </div>
        ))}
        <ChevronDownGlyph />
        
        { isOpen && (<div className="fixed z-10 inset-0 bg-black/40 sm:hidden"></div>) }
      </DropdownMenu.Trigger>
      <DropdownMenu.Content 
        className="grid -ml-4 w-screen min-w-[282px] text-brandTextSecondary overflow-hidden sm:hidden"
        align="center"
        sideOffset={-8}
      >
        {/* custom arrow */}
        <DropdownMenu.Label asChild>
          <svg
            className="ml-12 w-4 h-2 scale-y-[-1] text-white fill-current"
            preserveAspectRatio="none"
            viewBox="0 0 30 10"
          >
            <path d="M0 0h30L15 10z" />
          </svg>
        </DropdownMenu.Label>
        {/* actual content */}
        <DropdownMenu.Group className="grid mx-3 px-2 bg-white">
          <DropdownMenu.Label className="py-3 font-bold text-xs uppercase tracking-widest">Sort Posts By:</DropdownMenu.Label>
          <DropdownMenu.Separator className="border-b-brandDefault border-brandBorder" /> 
          { navItems.map((item, index) => (
            <DropdownMenu.Item key={index}>
              <Link href={item.route}>
                <a 
                  className="flex items-center px-1 py-3"
                  onClick={() => handleClick(item.route)}
                >
                  <div className={clsx("w-6 h-6", { "text-brandOrange": item.route === router.pathname })}>{ item.glyph }</div>
                  <span className="ml-3 text-brandTextPrimary">{ item.text }</span>
                </a>
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default StoryNav;