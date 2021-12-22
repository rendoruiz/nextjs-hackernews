import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { useHtmlParser } from "../../../../hooks/useHtmlParser";
import ChevronDownGlyph from "../../../Glyphs/ChevronDownGlyph";

const UserViewDetailsAboutExpander = ({ rawHtmlString }) => {
  const mobileWrapperMaxHeight = 18;
  const textWrapperRef = useRef(null);
  const [textContent, setTextContent] = useState(null);
  const [textWrapperHeight, setTextWrapperHeight] = useState(null);
  const [isLongText, setIsLongText] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // parse html
  useEffect(() => {
    setTextContent(useHtmlParser(rawHtmlString));
  }, [rawHtmlString]);

  // get wrapper height
  useEffect(() => {
    if (!textWrapperHeight) {
      const height = textWrapperRef?.current?.clientHeight;
      if (Number.isInteger(height)) {
        setTextWrapperHeight(height);
        setIsLongText(height > mobileWrapperMaxHeight ? true : false);
      }
    }
  });

  return textContent && (  
    <div className="grid gap-1 mb-2 md:mb-0">
      <span className="hidden md:block tracking-wide font-medium">About</span>
      <div 
        ref={textWrapperRef}
        className={clsx(
          " h-auto font-light text-xs break-words overflow-hidden transition-all ease-in-out md:!max-h-fit md:font-normal",
          isLongText && !isExpanded ? "duration-500" : "duration-300"
        )}
        style={{ maxHeight: isLongText && !isExpanded ? `${mobileWrapperMaxHeight}px` : `${textWrapperHeight}px` }}
      >
        { textContent }
      </div>

      { isLongText && (
        <button 
          title="show all about text trigger"
          className={clsx(
            "flex justify-center items-center mb-1 font-medium text-xs2 text-brandTextSecondary uppercase transition-all md:hidden",
            { "mt-1": isExpanded }
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="mr-1 tracking-wider leading-none">
            { !isExpanded ? "Expand": "Collapse" }
          </span>
          <ChevronDownGlyph className={clsx(
            "w-3 h-3 transition-transform duration-300",
            { "-rotate-180": isExpanded }
          )} />
        </button>
      )}
    </div>
  );
}
 
export default UserViewDetailsAboutExpander;