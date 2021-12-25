// fetch error
const ItemIsError = ({ error, noError = false }) => {
  return noError ? null : (
    <div>
      <p>An error occured.</p>
      { error && (
        <p>{error}</p> 
      )}
    </div>
  )
}
 
export default ItemIsError;