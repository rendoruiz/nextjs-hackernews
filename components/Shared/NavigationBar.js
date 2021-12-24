import { useEffect, useState } from 'react';
import { useRouter } from "next/dist/client/router";
import Link from 'next/link'
import clsx from "clsx";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import ChevronDownGlyph from '../Glyphs/ChevronDownGlyph';

const NavigationBar = ({ navigationItems, routePrefix = "", withPersistQueryString, className }) => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(null);
  const [countQueryString, setCountQueryString] = useState(null);

  // for assigning active state
  useEffect(() => {
    if (navigationItems && router) {
      [...navigationItems].every((item, index) => {
        if (router?.pathname.includes(item.route)) {
          setActiveItem(index);
          return false;
        } else {
          setActiveItem(0);
        }
        return true;
      });
    }
  }, [router?.pathname]);

  // for assigning count querystring
  useEffect(() => {
    if (withPersistQueryString && router?.query?.count) {
      setCountQueryString(router.query.count);
    }
  }, [router?.query?.count]);

  return (
    <div className={clsx(
      className,
      "grid grid-flow-col auto-cols-auto justify-between gap-5 mb-1 px-4 bg-brandObjectBackground transition-colors dark:bg-brandDarkObjectBackground dark:text-brandDarkTextPrimary sm:border-brandDefault sm:border-brandBorder sm:rounded sm:mb-4 sm:px-3 sm:py-[0.625rem] sm:dark:border-brandDarkBorder",
    )}>
      {/* mobile nav */}
      <MobileNavigationDropdown 
        navigationItems={navigationItems}
        routePrefix={routePrefix}
        countQueryString={countQueryString}
        activeItem={activeItem}
      />

      {/* desktop nav */}
      <DesktopNavigationList
        navigationItems={navigationItems}
        routePrefix={routePrefix}
        countQueryString={countQueryString}
        activeItem={activeItem}
      />
    </div>
  );
}

// navigation dropdown
const MobileNavigationDropdown = ({ navigationItems, routePrefix, countQueryString, activeItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  // close if same route is accessed
  const handleClick = () => {
    setIsOpen(false);
  }

  return (
    <DropdownMenu.Root 
      open={isOpen} 
      onOpenChange={(state) => setIsOpen(state)}
    >
      <DropdownMenu.Trigger className="flex items-center rounded px-2 py-3 text-brandTextSecondary dark:text-brandDarkTextSecondary sm:hidden"> 
        { navigationItems.map((item, index) => index === activeItem && (
          <div 
            key={index}
            className="flex self-center items-center -ml-2"
          >
            <span className="w-5 h-5">
              { item.glyph }
            </span>
            <span className="mx-2">
              { item.text }
            </span>
          </div>
        ))}
        <ChevronDownGlyph />

        {/* custom overlay */}
        { isOpen && (<div className="fixed z-10 inset-0 bg-brandDarkAppBackground/40 dark:bg-brandDarkAppBackground/70 sm:hidden" />) }
      </DropdownMenu.Trigger>
      <DropdownMenu.Content 
        className="grid -ml-4 w-screen min-w-[282px] text-brandTextSecondary overflow-hidden dark:text-brandDarkTextSecondary sm:hidden"
        align="center"
        sideOffset={-8}
      >
        {/* custom arrow */}
        <DropdownMenu.Label asChild>
          <svg
            className="ml-12 w-4 h-2 scale-y-[-1] fill-current"
            preserveAspectRatio="none"
            viewBox="0 0 30 10"
          >
            <path d="M0 0h30L15 10z" />
          </svg>
        </DropdownMenu.Label>
        {/* actual content */}
        <DropdownMenu.Group 
          className="grid border-brandDefault border-brandBorder mx-3 px-2 bg-brandObjectBackground dark:bg-brandDarkAppBackground" 
          onClick={() => handleClick()}
        >
          <DropdownMenu.Label className="py-4 font-bold text-xs2 uppercase tracking-widest">Sort Posts By:</DropdownMenu.Label>
          <DropdownMenu.Separator className="border-b-brandDefault border-brandBorder dark:border-brandDarkBorderSeparator" /> 
          { navigationItems.map((item, index) => (
            <DropdownMenu.Item key={index}>
              <Link 
                href={{ 
                  pathname: routePrefix + (item.route ?? "/"),
                  query: countQueryString && { count: countQueryString },
                }}
                shallow
              >
                <a className="flex items-center px-1 py-3">
                  <div className={clsx("w-6 h-6", { "text-brandOrange": index === activeItem })}>
                    { item.glyph }
                  </div>
                  <span className="ml-3 text-brandTextPrimary dark:text-brandDarkTextPrimary">
                    { item.text }
                  </span>
                </a>
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

// desktop nav list
const DesktopNavigationList = ({ navigationItems, routePrefix, countQueryString, activeItem }) => {
  return (
    <div className="hidden sm:grid grid-flow-col auto-cols-auto gap-2 text-sm tracking-wide">
      { navigationItems.map((item, index) => (
        <Link 
          key={index}
          href={{ 
            pathname: routePrefix + (item.route ?? "/"),
            query: countQueryString && { count: countQueryString },
           }}
          shallow
        >
          <a className={clsx(
            "flex items-center rounded-full pl-2 pr-[0.625rem] py-1 transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive hover:dark:bg-brandDarkButtonHover active:dark:bg-brandDarkButtonActive", 
            index === activeItem ? "bg-brandButtonSelected text-brandOrange dark:bg-brandDarkButtonSelected dark:text-brandDarkTextPrimary" : "text-brandTextSecondary dark:text-brandDarkTextSecondary"
          )}>
            <div className="w-6 h-6">
              { item.glyph }
            </div>
            <span className="ml-2 font-bold">
              { item.text }
            </span>
          </a>
        </Link>
      ))}
    </div>
  )
}
 
export default NavigationBar;