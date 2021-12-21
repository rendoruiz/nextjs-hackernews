import { useEffect, useState } from "react";

import ExternalLinkGlyph from '../Glyphs/ExternalLinkGlyph';

const ShortenedExternalLink = ({ rawLink, wrapperClassName, textClassName, glyphClassName }) => {
  const [shortenedLink, setShortenedLink] = useState(null);

  useEffect(() => {
    setShortenedLink(shortenLink(rawLink));
  }, [rawLink]);

  return shortenedLink && (  
    <a 
      href={rawLink}
      target="_blank"
      title="view attached external link"
      className={wrapperClassName}
    >
      <span className={textClassName}>
        { shortenedLink }
      </span>
      <ExternalLinkGlyph className={glyphClassName} />
    </a>
  );
}

const shortenLink = (urlString) => {
  if (!urlString) {
    return null;
  }

  // construct pathname and query string
  const url = new URL(urlString);
  let pathnameAndQuery = url.pathname.length === 1 && url.search.length === 0
    ? ''
    : url.pathname + url.search;
  // decode string
  pathnameAndQuery = decodeURI(pathnameAndQuery);
  // shorten link
  pathnameAndQuery = pathnameAndQuery.length <= 20
    ? pathnameAndQuery
    : pathnameAndQuery.slice(0, 17) + '...';

  // return parsed hostname + path and query string
  return url.hostname.replace('www.', '') + pathnameAndQuery;
}
 
export default ShortenedExternalLink;