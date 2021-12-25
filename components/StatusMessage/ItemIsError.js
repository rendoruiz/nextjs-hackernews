// fetch error
const ItemIsError = ({ error, noError = false }) => {
  return noError ? null : (
    <div className="py-1 px-4 font-medium text-xs text-brandTextSecondary italic dark:text-brandDarkTextSecondary sm:px-2 sm:text-sm">
      <p>
        <span>An error occured.&nbsp;</span>
        { error && (<span>{ error }</span>)}
      </p>
    </div>
  )
}
 
export default ItemIsError;