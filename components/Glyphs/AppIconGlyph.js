const AppIconGlyph = ({ className }) => {
  return (  
    <svg 
      className={className ?? "w-5 h-5"}
      fill="currentColor"
      viewBox="0 0 100 100" 
      mlns="http://www.w3.org/2000/svg"
    >
      <rect height="100" width="100" rx="10" />
      <path
        d="M74.59 18.01v63.98h-8.48V52.42H33.85v29.57h-8.44V18.01h8.44v27.51h32.26V18.01h8.48z"
        fill="#fff"
      />
    </svg>
  );
}
 
export default AppIconGlyph;