// modified tablericons arrows-maximize svg
const ExpandGlyph = ({ className }) => {
  return (  
    <svg
      className={className ?? "w-5 h-5"}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M16 20h4v-4M14 14l6 6M8 4H4v4M4 4l6 6" />
    </svg>
  );
}
 
export default ExpandGlyph;