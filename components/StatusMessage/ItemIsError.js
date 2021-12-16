// fetch error
const ItemIsError = ({ error }) => {
  console.log(error)
  return (
    <div>
      <p>An error occured.</p>
      { error && (
        <p>{error}</p> 
      )}
    </div>
  )
}
 
export default ItemIsError;