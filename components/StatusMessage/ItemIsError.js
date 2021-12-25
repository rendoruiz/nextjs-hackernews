// fetch error
const ItemIsError = ({ noError = false, contentId }) => {
  return noError ? null : (
    <div className="py-1 px-4 font-medium text-xs text-brandTextSecondary italic dark:text-brandDarkTextSecondary sm:px-2 sm:text-sm">
      <p>
        An error occured. Content ID "{ contentId }" cannot be found.
      </p>
    </div>
  )
}
 
export default ItemIsError;