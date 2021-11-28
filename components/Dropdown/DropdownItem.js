const DropdownItem = ({ children }) => {
  return (  
    <li className="grid bg-white transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive">
      { children }
    </li>
  );
}
 
export default DropdownItem;