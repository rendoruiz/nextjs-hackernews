import ShareDrawerGlyph from "../../Glyphs/ShareDrawerGlyph";

const StoryItemShareDrawerButton = ({ storyId }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.share({
      url: window.location + 'story/' + storyId,
      title: 'story discussion link',
    });
  }

  return navigator.share && (  
    <button 
      className="row-start-3 col-start-2 justify-self-end self-end relative flex items-center border-brandDefault border-brandButtonOutline rounded-full mt-1 p-1 text-brandTextSecondary bp420:px-2 sm:hidden"
      onClick={(e) => handleClick(e)}
    >
      <ShareDrawerGlyph />
      <span className="hidden bp420:inline-block ml-1 font-medium text-xs">Share</span>
    </button>
  );
}


 
export default StoryItemShareDrawerButton;