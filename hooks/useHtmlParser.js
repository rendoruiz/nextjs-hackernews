import parse, { domToReact } from 'html-react-parser';

const useHtmlParser = (rawHtmlString) => {
  const options = {
    replace: ({type, name, children, attribs}) => {
      if (type === "tag" && name === "a") {
        return (
          <a 
            href={attribs.href}
            target="_blank"
            className="text-brandOrange sm:underline break-all"
          >
            { domToReact(children) }
          </a>
        )
      }
    }
  }
  
  return parse(rawHtmlString, options);
}

export { useHtmlParser }