// tablericons microphone-2 svg
const MicrophoneGlyph = ({ className, title }) => {
  return (  
    <svg
      className={className ?? "w-5 h-5"}
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      title={title}
    >
      <path
        d="M-2.646-2.659h29.31v29.305h-29.31z"
        stroke="none"
        strokeWidth="1.832"
      />
      <path
        d="M15.675 13.092A6.106 6.105 0 1010.91 8.33M15.675 13.092l-4.765-4.76-9.175 10.48a2.443 2.442 0 103.452 3.456z"
        strokeWidth="1" fill="rgb(255, 102, 0)" stroke="currentColor" className="transition-colors text-brandObjectBackground dark:text-brandDarkAppBackground"
      />
    </svg>
  );
}
 
export default MicrophoneGlyph;