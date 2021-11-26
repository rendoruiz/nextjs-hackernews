const Navbar = ({ children }) => {
  return ( 
    <div className="grid grid-flow-col auto-cols-auto justify-start gap-2 border-brandDefault border-brandBorder rounded shadow-sm mb-4 p-3 bg-white text-brandTextSecondary">
      { children }
    </div>
  );
}
 
export default Navbar;