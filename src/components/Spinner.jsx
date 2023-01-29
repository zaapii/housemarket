import { HashLoader } from "react-spinners"

const Spinner = () => {
  return (
    <div className='loadingSpinnerContainer'>
      <HashLoader className="mx-auto" color="#36d7b7" size="100px" />
    </div>
  )
}

export default Spinner