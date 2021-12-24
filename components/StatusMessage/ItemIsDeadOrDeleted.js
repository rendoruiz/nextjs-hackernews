const ItemIsDeadOrDeleted = ({ type = "story" }) => {
  return (  
    <div className="py-1 px-4 font-medium text-xs text-brandTextSecondary italic cursor-default dark:bg-brandDarkAppBackground dark:text-brandDarkTextSecondary sm:px-2 sm:dark:bg-transparent">
      Content invalid.{ type } status is dead or deleted.
    </div>
  );
}
 
export default ItemIsDeadOrDeleted;