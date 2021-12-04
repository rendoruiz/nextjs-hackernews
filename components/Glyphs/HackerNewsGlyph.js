const HackerNewsGlyph = ({ className }) => {
  return ( 
    <svg 
      className={className ?? "w-5 h-5"}
      fill="currentColor"
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="80.469"
        width="80.469"
        rx="10"
        strokeWidth=".805"
        x="9.766"
        y="9.766"
      />
      <path
        d="M36.634 24.258L50 50.105l13.438-25.847h7.71L53.395 56.542v19.2h-6.792v-19.2L28.853 24.258z"
        fill="#fff"
        strokeWidth=".805"
      />
    </svg>
  );
}
 
export default HackerNewsGlyph;