import ShareDrawerGlyph from "../../Glyphs/ShareDrawerGlyph";

const StoryItemMobileShareTrigger = ({ storyId }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.share({
      url: window.location.origin + '/story/' + storyId,
      title: 'story discussion link',
    });
  }

  return !navigator.share ? null : (  
    <button 
      title="share drawer trigger"
      className="col-start-2 justify-self-end self-end relative flex items-center border-brandDefault border-brandButtonOutline rounded-full p-1 text-brandTextSecondary transition-colors dark:border-brandDarkButtonOutline dark:text-brandDarkBorderSeparator bp420:px-2 sm:hidden"
      onClick={(e) => handleClick(e)}
    >
      <ShareDrawerGlyph />
      <span className="hidden bp420:inline-block ml-1 font-medium text-xs">
        Share
      </span>
    </button>
  );
}

export default StoryItemMobileShareTrigger;