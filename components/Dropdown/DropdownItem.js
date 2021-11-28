const DropdownItemButton = ({ displayText, displayGlyph, ...objectProps }) => {
  return (  
    <li className="grid bg-white">
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

const DropdownItemLink = ({ displayText, displayGlyph, ...objectProps }) => {
  return (  
    <li className="grid bg-white">
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