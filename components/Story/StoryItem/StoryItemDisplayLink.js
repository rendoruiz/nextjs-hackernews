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
        "justify-self-start items-center -mt-2 pt-1 pb-2 text-xs text-brandOrange hover:underline"
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {getDisplayUrl(rawLink)} 
      <ExternalLinkGlyph className="ml-1 w-4 h-4" />
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