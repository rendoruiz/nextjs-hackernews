import clsx from 'clsx';
import Link from 'next/link'

const NavbarItem = ({ route, text, glyph = null, isActive = false }) => {
  return route && ( 
    <Link href={route}>
      <a className={clsx('flex items-center rounded-full pl-2 pr-3 py-[0.375rem] transition-colors hover:bg-gray-200 active:bg-gray-300', isActive && 'bg-gray-100 text-yellow-500 cursor-default')}>
        { glyph }
        <span className="ml-2 font-bold">{ text }</span>
      </a>
    </Link>
  );
}
 
export default NavbarItem;