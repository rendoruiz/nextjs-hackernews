const Navbar = ({ children }) => {
  return ( 
    <div className="grid grid-flow-col auto-cols-auto justify-start gap-2 border-[1px] border-gray-300 rounded p-3 bg-white text-gray-500/80">
      { children }
    </div>
  );
}
 
export default Navbar;