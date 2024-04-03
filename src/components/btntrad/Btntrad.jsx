import { useDispatch, useSelector } from "react-redux"
import { setTradEn } from "../../features/traduction/TradSlice"
import { currentTrad } from "../../features/traduction/TradSlice"
import { currentMode } from "../../features/darkmode/Darkslice"
import tradImg from "../../assets/translate.svg"
import tradImgWhite from "../../assets/translatewhite.svg"
import france from "../../assets/france.svg"
import uk from "../../assets/uk.svg"
import "./Btntrad.scss"

function Btntrad() {
  const dispatch = useDispatch()
  const trad = useSelector(currentTrad)
  const mode = useSelector(currentMode)
  const body = document.body

  const handleSubmitTrue = e => {
    e.preventDefault()
    dispatch(setTradEn(true))
  }

  const handleSubmitFalse = e => {
    e.preventDefault()
    dispatch(setTradEn(false))
  }

  if(trad === true) {
    body.classList.add('en')
    body.classList.remove('fr')
  } else {
    body.classList.add('fr')
    body.classList.remove('en')
  }
 
  return (
    <div>
      { mode ? (
        <>
          {trad ? (
            <div className="btn-trad">
              <button className="trad-dark" onClick={handleSubmitFalse}>
                <img src={tradImgWhite} alt="en" className="trad-img"/>
                <img src={uk} alt="flag"className="trad-drapeau"/>
              </button>
            </div>
          ) : (
            <div className="btn-trad">
              <button className="trad-dark" onClick={handleSubmitTrue}>
                <img src={tradImgWhite} alt="fr" className="trad-img"/>
                <img src={france} alt="fr"className="trad-drapeau"/>
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          {trad ? (
              <div className="btn-trad">
                <button className="trad" onClick={handleSubmitFalse}>
                  <img src={tradImg} alt="en" className="trad-img"/>
                  <img src={uk} alt="flag"className="trad-drapeau"/>
                </button>
              </div>
            ) : (
              <div className="btn-trad">
                <button className="trad" onClick={handleSubmitTrue}>
                  <img src={tradImg} alt="fr" className="trad-img"/>
                  <img src={france} alt="fr"className="trad-drapeau"/>
                </button>
              </div>
            )}
        </>
      )}
    </div>
  )
}

export default Btntrad