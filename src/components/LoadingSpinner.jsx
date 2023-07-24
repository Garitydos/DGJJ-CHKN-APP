import { Spinner } from "reactstrap";

function LoadingSpinner() {
    return (
        <div>  <Spinner
        color="dark"
        type="grow"
      >   Loading...
      </Spinner></div>
    )
}
export default LoadingSpinner