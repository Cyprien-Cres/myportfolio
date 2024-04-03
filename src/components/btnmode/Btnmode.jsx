import { useDispatch, useSelector } from "react-redux"
import { setDarkMode } from "../../features/darkmode/Darkslice"
import { currentMode } from "../../features/darkmode/Darkslice"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import "./Btnmode.scss"

function Btnmode() {
  const dispatch = useDispatch()
  const mode = useSelector(currentMode)
  const body = document.body

  const handleSubmitTrue = e => {
    e.preventDefault()
    dispatch(setDarkMode(true))
  }

  const handleSubmitFalse = e => {
    e.preventDefault()
    dispatch(setDarkMode(false))
  }

  if(mode === true) {
    body.classList.add('dark')
    body.classList.remove('light')
  } else {
    body.classList.add('light')
    body.classList.remove('dark')
  }
 
  return (
    <div>
      {mode ? (
        <div>
          <button className="moon">
            <img src={moon} alt="moon" onClick={handleSubmitFalse}/>
          </button>
        </div>
      ) : (
        <div>
          <button className="sun">
            <img src={sun} alt="sun" onClick={handleSubmitTrue}/>
          </button>
        </div>
      )}
    </div>
  )
}

export default Btnmode