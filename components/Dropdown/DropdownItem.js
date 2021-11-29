import Link from 'next/link';
import clsx from "clsx";

const DropdownItemButton = ({ displayText, displayGlyph, wrapperClassName, ...objectProps }) => {
  return (  
    <li className={clsx("border-brandBorder/30", wrapperClassName ?? "grid")}>
      <button
        className="outline-none flex items-center p-2 transition-colors focus:bg-brandOrange/20 focus:text-brandTextPrimary  hover:bg-brandOrange/20 hover:text-brandTextPrimary active:bg-brandOrange/30"
        {...objectProps}
      >
        { displayGlyph }
        <span className="ml-2 font-bold">{ displayText }</span>
      </button>
    </li>
  );
}

const DropdownItemLink = ({ displayText, displayGlyph, wrapperClassName, ...objectProps }) => {
  return (   
    <li className={clsx("border-brandBorder/30", wrapperClassName ?? "grid")}>
      <a 
        className="outline-none flex items-center p-2 transition-colors focus:bg-brandOrange/20 focus:text-brandTextPrimary  hover:bg-brandOrange/20 hover:text-brandTextPrimary active:bg-brandOrange/30"
        {...objectProps}
      >
        { displayGlyph }
        <span className="ml-2 font-bold">{ displayText }</span>
      </a>
    </li>
  );
}

const DropdownItemRoute = ({ displayText, displayGlyph, wrapperClassName, route, isSelected = false, ...objectProps }) => {
  return (   
    <li className={clsx("border-brandBorder/30", wrapperClassName ?? "grid")}>
      <Link href={route}>
        <a 
          className={clsx(
            "outline-none flex items-center p-2 transition-colors focus:bg-brandOrange/20  hover:bg-brandOrange/20 active:bg-brandOrange/30",
            isSelected ? "text-brandOrange" : "focus:text-brandTextPrimary hover:text-brandTextPrimary"
          )}
          {...objectProps}
        >
          { displayGlyph }
          <span className="ml-2 font-bold">{ displayText }</span>
        </a>
      </Link>
    </li>
  );
}
 
export { DropdownItemButton, DropdownItemLink, DropdownItemRoute };