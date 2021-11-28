const DropdownItem = ({ children }) => {
  return (  
    <li className="grid border-brandDefault border-t-0 border-brandBorder transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive first:border-t-brandDefault first:rounded-t last:rounded-b">
      { children }
    </li>
  );
}
 
export default DropdownItem;