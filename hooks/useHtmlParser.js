import parse, { domToReact } from 'html-react-parser';

const useHtmlParser = (rawHtmlString) => {
  if (!rawHtmlString) {
    return null;
  }
  
  const options = {
    replace: ({type, name, children, attribs}) => {
      // paragraph spacing
      if (type === "tag" && name === "p") {
        return (
          <p className="mt-2 sm:mt-3">
            { domToReact(children, options) }
          </p>
        )
      }

      // wrap code blocks
      if (type === "tag" && name === "pre") {
        return (
          <pre className="whitespace-pre-wrap break-all md:break-words">
            { domToReact(children, options) }
          </pre>
        )
      }

      // add style to anchor/links
      if (type === "tag" && name === "a") {
        return (
          <a 
            href={attribs.href}
            target="_blank"
            className="relative text-brandOrange sm:underline break-all"
            title="view external link in new tab"
          >
            { domToReact(children, options) }
          </a>
        );
      }

      // hide empty elements
      if (type === "tag" && children.length === 0) {
        return (
          <></>
        )
      }
    }
  }
  
  return parse(rawHtmlString, options);
}

export { useHtmlParser }