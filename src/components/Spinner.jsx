import { HashLoader } from "react-spinners"

const Spinner = () => {
  return (
    <div className='loadingSpinnerContainer'>
      <HashLoader className="mx-auto" color="#e7610f" size="100px" />
    </div>
  )
}

export default Spinner