import cancel from "../../assets/cancel.svg"
import cancelwhite from "../../assets/cancelwhite.svg"
import Slideshow from "../slideshow/Slideshow"
import Techno from "../techno/Techno"
import "./ModalContent.scss" 
import { useSelector } from "react-redux"
import { currentMode } from "../../features/darkmode/Darkslice"
import { currentTrad } from "../../features/traduction/TradSlice"

// eslint-disable-next-line react/prop-types
function ModalContent({ closeModal, id, title, pictures, fr, en, technologies, site, github }) {
  const mode = useSelector(currentMode)
  const trad = useSelector(currentTrad)

  return (
    <>
      {mode ? (
          <>
            <div key={id} className={`${title}`}>
            <div onClick={closeModal} className="overlay"></div>
            <div className="modal dark">
              <img src={cancelwhite} alt="cancel" className="close-modal" onClick={closeModal}/>
              <h1>{title}</h1>
              <Slideshow pictures={pictures} />
              { trad ? (
                <p>{en}</p>
              ) : (
                <p>{fr}</p>
              )}
              <div><Techno technologies={technologies}/></div>
                <div className="link-dark">
                  { trad ? (
                    <>
                      <a href={`${site}`} target="_blank"><button><i className="fa-brands fa-safari"></i> Project</button></a>
                      <a href={`${github}`} target="_blank"><button><i className="fa-solid fa-code"></i> Code</button></a>
                    </>
                  ) : (
                    <>
                      <a href={`${site}`} target="_blank"><button><i className="fa-brands fa-safari"></i> Projet</button></a>
                      <a href={`${github}`} target="_blank"><button><i className="fa-solid fa-code"></i> Code</button></a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div key={id} className={`${title}`}>
              <div onClick={closeModal} className="overlay"></div>
              <div className="modal">
                <img src={cancel} alt="cancel" className="close-modal" onClick={closeModal}/>
                <h1>{title}</h1>
                <Slideshow pictures={pictures} />
                { trad ? (
                  <p>{en}</p>
                ) : (
                  <p>{fr}</p>
                )}
                <div><Techno technologies={technologies}/></div>
                  <div className="link-projects">
                    { trad ? (
                      <>
                        <a href={`${site}`} target="_blank"><button><i className="fa-brands fa-safari"></i> Project</button></a>
                        <a href={`${github}`} target="_blank"><button><i className="fa-solid fa-code"></i> Code</button></a>
                      </>
                    ) : (
                      <>
                        <a href={`${site}`} target="_blank"><button><i className="fa-brands fa-safari"></i> Projet</button></a>
                        <a href={`${github}`} target="_blank"><button><i className="fa-solid fa-code"></i> Code</button></a>
                      </>
                    )}
                  </div>
                </div>
              </div>
          </>
        )}
    </>
  )
}

export default ModalContent
