import Link from 'next/link'
import clsx from 'clsx';

const NavbarItem = ({ route, text, glyph = null, isActive = false }) => {
  return route && ( 
    <Link href={route}>
      <a className={clsx(
        'flex items-center rounded-full pl-2 pr-3 py-[0.375rem] transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive', 
        isActive && 'bg-brandButtonSelected text-brandOrange cursor-default'
      )}>
        { glyph }
        <span className="ml-2 font-bold">{ text }</span>
      </a>
    </Link>
  );
}
 
export default NavbarItem;