import { useEffect, useRef, useState } from "react";

import HorizontalDotsGlyph from "../Glyphs/HorizontalDotsGlyph";

const DropdownWrapper = ({ children, toggleContent }) => {
  const wrapperRef = useRef();
  const listRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  // handle document click events
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickWrapper);
    } else {
      document.removeEventListener("click", handleClickWrapper);
    }

    return () => {
      document.removeEventListener("click", handleClickWrapper);
    };
  }, [isOpen]);

  // click outside dropdown wrapper
  const handleClickWrapper = (e) => {
    if (wrapperRef.current.contains(e.target)) {
      e.stopPropagation();
    } else {
      setIsOpen(false);
    }
  }

  // click dropdown items
  const handleClickList = (e) => {
    e.stopPropagation();
    if (listRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  // click dropdown toggle
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  }

  return ( 
    <div 
      ref={wrapperRef}
      className="relative grid"
    >
      <button
        onClick={(e) => handleClick(e)}
        title="toggle dropdown"
        className="rounded my-1 px-1 hover:bg-brandButtonHover active:bg-brandButtonActive"
      >
        { toggleContent ?? <HorizontalDotsGlyph /> }
      </button>
      
      { isOpen && (
        <ul 
          ref={listRef}
          className="absolute top-[90%] z-10 grid rounded shadow-xl bg-white text-brandTextSecondary overflow-hidden"
          onClick={(e) => handleClickList(e)}
        >
          { children }
        </ul>
      )}
    </div>
  );
}
 
export default DropdownWrapper;