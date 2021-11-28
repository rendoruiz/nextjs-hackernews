import clsx from "clsx";

const DropdownItemButton = ({ displayText, displayGlyph, wrapperClassName, ...objectProps }) => {
  return (  
    <li className={clsx("bg-white", wrapperClassName ?? "grid")}>
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
    <li className={clsx("bg-white", wrapperClassName ?? "grid")}>
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
 
export { DropdownItemButton, DropdownItemLink };