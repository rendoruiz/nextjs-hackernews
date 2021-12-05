import Link from 'next/link'
import NavbarWrapper from "../Navbar/NavbarWrapper";
import NavbarItem from "../Navbar/NavbarItem";
import FireGlyph from "../Glyphs/FireGlyph";
import LightningGlyph from "../Glyphs/LightningGlyph";
import TrendUpGlyph from "../Glyphs/TrendUpGlyph";
import clsx from "clsx";
import ChevronDownGlyph from "../Glyphs/ChevronDownGlyph";
import { useRouter } from "next/dist/client/router";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

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
    <div className="grid grid-flow-col auto-cols-auto justify-between gap-5 mb-1 px-4 bg-white sm:border-brandDefault sm:border-brandBorder sm:rounded sm:mb-4">
      <MobileNavDropdown router={router} />

      <div className="hidden sm:grid grid-flow-col auto-cols-auto gap-2">
        { navItems.map((item, index) => (
          <Link 
            key={index}
            href={item.route}
          >
            <a className="flex items-center px-1 py-3">
              <div className={clsx("w-6 h-6", { "text-brandOrange": item.route === router.pathname })}>{ item.glyph }</div>
              <span className="ml-3 text-base text-brandTextPrimary">{ item.text }</span>
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
    <DropdownMenu open={isOpen} onOpenChange={(state) => setIsOpen(state)}>
      <DropdownMenuTrigger 
        className="flex items-center rounded px-2 py-3 text-brandTextSecondary transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive sm:hidden" 
        id="radix-storynav-dropdownmenu.trigger"
      > 
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
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="grid w-[94vw] min-w-[282px] text-brandTextSecondary overflow-hidden sm:hidden"
        align="center"
        sideOffset={-8}
      >
        {/* custom arrow */}
        <DropdownMenuLabel asChild>
          <svg
            className="ml-10 w-4 h-2 scale-y-[-1] text-white fill-current"
            preserveAspectRatio="none"
            viewBox="0 0 30 10"
          >
            <path d="M0 0h30L15 10z" />
          </svg>
        </DropdownMenuLabel>
        {/* actual content */}
        <DropdownMenuGroup className="grid px-2 bg-white">
          <DropdownMenuLabel className="py-3 font-bold text-xs uppercase tracking-widest">Sort Posts By:</DropdownMenuLabel>
          <DropdownMenuSeparator className="border-b-brandDefault border-brandBorder" /> 
          { navItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <Link href={item.route}>
                <a 
                  className="flex items-center px-1 py-3"
                  onClick={() => handleClick(item.route)}
                >
                  <div className={clsx("w-6 h-6", { "text-brandOrange": item.route === router.pathname })}>{ item.glyph }</div>
                  <span className="ml-3 text-base text-brandTextPrimary">{ item.text }</span>
                </a>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StoryNav;