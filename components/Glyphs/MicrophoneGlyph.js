import clsx from "clsx";

// tablericons microphone-2 svg
const MicrophoneGlyph = ({ className, title }) => {
  return (  
    <svg
      className={clsx("stroke-current", className ?? "w-5 h-5")}
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
        strokeWidth="1" fill="currentColor" stroke="#ffffff"
      />
    </svg>
    // <svg
    //   className={clsx("stroke-current", className ?? "w-5 h-5")}
    //   fill="none"
    //   stroke="white"
    //   strokeLinecap="round"
    //   strokeWidth="0.75"
    //   viewBox="0 0 24 24"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M0 0h24v24H0z" stroke="none" />
    //   <path d="M15.002 12.9A5 5 0 1011.1 9M15.002 12.9L11.1 9.001l-7.513 8.584a2 2 0 102.827 2.83l8.588-7.515z" fill="currentColor" stroke="white" />
    // </svg>
  );
}
 
export default MicrophoneGlyph;