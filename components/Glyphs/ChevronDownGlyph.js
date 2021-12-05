// tablericons chevron-down svg
const ChevronDownGlyph = ({ className }) => {
  return (  
    <svg
      className={className ?? "w-5 h-5"}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="3"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
 
export default ChevronDownGlyph;