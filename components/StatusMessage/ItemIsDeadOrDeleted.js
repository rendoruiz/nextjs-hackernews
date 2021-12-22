const ItemIsDeadOrDeleted = ({ type = "story" }) => {
  return (  
    <div className="py-1 px-2 font-medium text-xs text-brandTextSecondary italic sm:py-0">
      Content cannot be found. { type } status is dead or deleted.
    </div>
  );
}
 
export default ItemIsDeadOrDeleted;