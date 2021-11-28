import clsx from "clsx";
import { useEffect, useState } from "react";
import HorizontalDotsGlyph from "../Glyphs/HorizontalDotsGlyph";

const DropdownWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log('add listener')
      window.addEventListener("click", handleWindowClick);
    } 
  }, [isOpen]);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isOpen) {
      window.removeEventListener("click", handleWindowClick);
    }
    setIsOpen(!isOpen);
    
    console.log('toggle click')
  }

  const handleWindowClick = () => {
    console.log('window click');
    setIsOpen(false);
    window.removeEventListener("click", handleWindowClick);
  }

  return ( 
    <div className="relative grid">
      <button
        title="dropdown toggle"
        onClick={(e) => handleClick(e)}
      >
        <HorizontalDotsGlyph />
      </button>
      
      { isOpen && (
        <div 
          className="absolute top-full z-10 text-red-500"
        >
          test content
        </div>
      )}
    </div>
  );
}
 
export default DropdownWrapper;