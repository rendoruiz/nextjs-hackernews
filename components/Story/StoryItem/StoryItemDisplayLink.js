import clsx from "clsx";
import ExternalLinkGlyph from "../../Glyphs/ExternalLinkGlyph";

const StoryItemDisplayLink = ({ rawLink, className }) => {
  return (  
    <a 
      title="view story attached link"
      href={rawLink}
      target="_blank"
      className={clsx(
        className ?? "inline-flex",
        "row-start-2 col-start-2 justify-self-start relative items-end w-[70px] h-[52px] bg-brandOrange text-[0.625rem] sm:row-start-auto sm:col-start-auto sm:items-center sm:-mt-1 sm:t-1 sm:pb-2 sm:w-auto sm:h-auto sm:bg-transparent sm:text-xs sm:text-brandOrange sm:hover:underline"
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <span className="p-1 bg-black/70 text-white truncate sm:p-0 sm:px-0 sm:bg-transparent sm:text-current sm:overflow-auto">{ getDisplayUrl(rawLink) } </span>
      <ExternalLinkGlyph className="hidden ml-1 w-4 h-4 sm:inline-block" />
    </a>
  );
}

const getDisplayUrl = (rawUrlString) => {
  const url = new URL(rawUrlString);
  let urlSuffix = url.pathname.length === 1 && url.search.length === 0
    ? ''
    : url.pathname + url.search;
  // decode strings
  urlSuffix = decodeURI(urlSuffix);
  // shorten link
  urlSuffix = urlSuffix.length <= 20
    ? urlSuffix
    : urlSuffix.slice(0, 17) + '...';
  return url.hostname.replace('www.', '') + urlSuffix;
}
 
export default StoryItemDisplayLink;