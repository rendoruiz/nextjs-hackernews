const ItemIsDeadOrDeleted = ({ type = "story" }) => {
  return (  
    <div className="py-1 px-4 font-medium text-xs text-brandTextSecondary italic sm:px-2 cursor-default">
      Content cannot be found. { type } status is dead or deleted.
    </div>
  );
}
 
export default ItemIsDeadOrDeleted;