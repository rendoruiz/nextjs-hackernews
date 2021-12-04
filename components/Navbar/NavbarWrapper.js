const NavbarWrapper = ({ children }) => {
  return ( 
    <div className="grid grid-flow-col auto-cols-auto justify-start gap-2 border-brandDefault border-brandBorder mb-4 p-3 bg-white text-brandTextSecondary sm:rounded sm:shadow-sm">
      { children }
    </div>
  );
}
 
export default NavbarWrapper;