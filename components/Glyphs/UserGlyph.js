const UserGlyph = ({ className }) => {
  return (  
    <svg
      className={className ?? "w-5 h-5"}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        fillRule="evenodd"
      />
    </svg>
  );
}
 
export default UserGlyph;