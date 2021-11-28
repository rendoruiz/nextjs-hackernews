import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import HorizontalDotsGlyph from "../Glyphs/HorizontalDotsGlyph";

const DropdownWrapper = ({ children, toggleDisplayText, toggleDisplayGlyph, isHorizontal = false, wrapperClassName }) => {
  const wrapperRef = useRef();
  const listRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  // handle document mouse & keyboard events
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickWrapper);
      document.addEventListener("keydown", handleClickWrapper);
    } else {
      document.removeEventListener("mousedown", handleClickWrapper);
      document.removeEventListener("keydown", handleClickWrapper);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickWrapper);
      document.removeEventListener("keydown", handleClickWrapper);
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
      className={wrapperClassName ?? "relative grid"}
    >
      <button
        onClick={(e) => handleClick(e)}
        title="toggle dropdown"
        className={clsx(
          "rounded transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive",
          (toggleDisplayGlyph || toggleDisplayText) ? "flex items-center pl-1 pr-2 py-1 font-bold" : "my-1 px-1"
        )}
      >
        { toggleDisplayGlyph ?? <HorizontalDotsGlyph /> }
        { toggleDisplayText && (
          <span className="ml-1">{ toggleDisplayText }</span>
        )}
      </button>
      
      { isOpen && (
        <ul 
          ref={listRef}
          className={clsx(
            "absolute top-[90%] z-10 justify-self-end grid border-brandDefault border-brandBorder rounded shadow-xl bg-white text-brandTextSecondary overflow-hidden bp360:justify-self-center bp420:justify-self-start",
            isHorizontal ? "grid-flow-col divide-x-brandDefault" : "divide-y-brandDefault"
          )}
          onClick={(e) => handleClickList(e)}
        >
          { children }
        </ul>
      )}
    </div>
  );
}
 
export default DropdownWrapper;