import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import Btnmode from "../../components/btnmode/Btnmode"
import Btntrad from "../../components/btntrad/Btntrad"
import menu from "../../assets/menu.svg"
import menuwhite from "../../assets/menuwhite.svg"
import cancel from "../../assets/cancel.svg"
import cancelwhite from "../../assets/cancelwhite.svg"
import cvfr from "../../assets/cv_fr.pdf"
import cven from "../../assets/cv_en.pdf"
import "./Header.scss"
import { useSelector } from "react-redux"
import { currentMode } from "../../features/darkmode/Darkslice"
import { currentTrad } from "../../features/traduction/TradSlice"

function Header() {
  const location = useLocation()
  const mode = useSelector(currentMode)
  const [showEdit, setShowEdit] = useState("")
  const open = () => setShowEdit(true)
  const close = () => setShowEdit(false)
  const isProjects = location.pathname === "/Projects"
  const isAbout = location.pathname === "/About"
  const trad = useSelector(currentTrad)
  
  return (
    <>
      {trad ? (
        <>
          <div className="header">
            {mode ? (
              <>
                <div className="username">
                  <Link to={"=/"}>
                    <h1 className="dark">Cyprien.</h1>
                  </Link>
                </div>
                <div className="menu hidden">
                  <Btntrad />
                  <Btnmode />
                  {showEdit ? (
                    <>
                      <button className="cancel dark btn-menu" onClick={close}>
                        <img src={cancelwhite} alt="cancel"/>
                      </button>
                      <div className="little-menu darkbg">
                        <div>
                          <Link to={"/projects"} onClick={close}>
                            <button className="dark">Projects</button>
                          </Link>
                          <Link to={"/about"} onClick={close}>
                            <button className="dark">About</button>
                          </Link>
                          <a href={cven} target="_blank">
                            <button className="dark">Resume</button>
                          </a>
                          <a href="mailto:kanki.dev@gmail.com" onClick={close}>
                            <button className="dark">Contact</button>
                          </a>
                        </div>
                      </div>
                    </>
              ) : (
                <button onClick={open} className="btn-menu">
                  <img src={menuwhite} alt="menu" className="dark"/>
                </button>
              )}
              </div>
              <div className= "menu">
                <Link to={"/projects"} className={isProjects ? "active" : ""}>
                  <button className="dark">Projects</button>
                </Link>
                <Link to={"/about"} className={isAbout ? "active" : ""}>
                  <button className="dark">About</button>
                </Link>
                <a href={cven} target="_blank">
                  <button className="dark">Resume</button>
                </a>
                <a href="mailto:kanki.dev@gmail.com">
                  <button className="dark">Contact</button>
                </a>
                <Btntrad />
                <Btnmode />
              </div>
            </>
            ) : (
              <>
                <div className="username">
                  <Link to={"/"}>
                    <h1>Cyprien.</h1>
                  </Link>
                </div>
                <div className="menu hidden">
                  <Btntrad />
                  <Btnmode />
                  {showEdit ? (
                    <>
                      <button className="cancel btn-menu" onClick={close}>
                        <img src={cancel} alt="cancel" />
                      </button>
                      <div className="little-menu">
                        <div>
                          <Link to={"/projects"} onClick={close}>
                            <button>Projects</button>
                          </Link>
                          <Link to={"/about"} onClick={close}>
                            <button>About</button>
                          </Link>
                          <a href={cven} target="_blank">
                            <button>Resume</button>
                          </a>
                          <a href="mailto:kanki.dev@gmail.com" onClick={close}>
                            <button>Contact</button>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <button onClick={open} className="btn-menu">
                      <img src={menu} alt="menu"/>
                    </button>
                  )}
                </div>
                <div className= "menu">
                <Link to={"/projects"} className={isProjects ? "active" : ""}>
                    <button className="btn">Projects</button>
                  </Link>
                  <Link to={"/about"} className={isAbout ? "active" : ""}>
                    <button className="btn">About</button>
                  </Link>
                  <a href={cven} target="_blank">
                    <button className="btn">Resume</button>
                  </a>
                  <a href="mailto:kanki.dev@gmail.com">
                    <button className="btn">Contact</button>
                  </a>
                  <Btntrad />
                  <Btnmode />
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="header">
            {mode ? (
              <>
                <div className="username">
                  <Link to={"/"}>
                    <h1 className="dark">Cyprien.</h1>
                  </Link>
                </div>
                <div className="menu hidden">
                  <Btntrad />
                  <Btnmode />
                  {showEdit ? (
                    <>
                      <button className="cancel dark btn-menu" onClick={close}>
                        <img src={cancelwhite} alt="cancel"/>
                      </button>
                      <div className="little-menu darkbg">
                        <div>
                          <Link to={"/projects"} onClick={close}>
                            <button className="dark">Projets</button>
                          </Link>
                          <Link to={"/about"} onClick={close}>
                            <button className="dark">Présentation</button>
                          </Link>
                          <a href={cvfr} target="_blank">
                            <button className="dark">CV</button>
                          </a>
                          <a href="mailto:kanki.dev@gmail.com" onClick={close}>
                            <button className="dark">Contact</button>
                          </a>
                        </div>
                      </div>
                    </>
              ) : (
                <button onClick={open} className="btn-menu">
                  <img src={menuwhite} alt="menu" className="dark"/>
                </button>
              )}
            </div>
            <div className= "menu">
            <Link to={"/projects"} className={isProjects ? "active" : ""}>
                <button className="dark">Projets</button>
              </Link>
              <Link to={"/about"} className={isAbout ? "active" : ""}>
                <button className="dark">Présentation</button>
              </Link>
              <a href={cvfr} target="_blank">
                <button className="dark">CV</button>
              </a>
              <a href="mailto:kanki.dev@gmail.com">
                <button className="dark">Contact</button>
              </a>
              <Btntrad />
              <Btnmode />
            </div>
              </>
            ) : (
              <>
                <div className="username">
                  <Link to={"/"}>
                    <h1>Cyprien.</h1>
                  </Link>
                </div>
                <div className="menu hidden">
                  <Btntrad />
                  <Btnmode />
                  {showEdit ? (
                    <>
                      <button className="cancel btn-menu" onClick={close}>
                        <img src={cancel} alt="cancel" />
                      </button>
                      <div className="little-menu">
                        <div>
                          <Link to={"/projects"} onClick={close}>
                            <button>Projets</button>
                          </Link>
                          <Link to={"/about"} onClick={close}>
                            <button>Présentation</button>
                          </Link>
                          <a href={cvfr} target="_blank">
                            <button>CV</button>
                          </a>
                          <a href="mailto:kanki.dev@gmail.com" onClick={close}>
                            <button>Contact</button>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <button onClick={open} className="btn-menu">
                      <img src={menu} alt="menu"/>
                    </button>
                  )}
                </div>
                <div className= "menu">
                <Link to={"/projects"} className={isProjects ? "active" : ""}>
                    <button className="btn">Projets</button>
                  </Link>
                  <Link to={"/about"} className={isAbout ? "active" : ""}>
                    <button className="btn">Présentation</button>
                  </Link>
                  <a href={cvfr} target="_blank">
                    <button className="btn">CV</button>
                  </a>
                  <a href="mailto:kanki.dev@gmail.com">
                    <button className="btn">Contact</button>
                  </a>
                  <Btntrad />
                  <Btnmode />
                </div>
              </>
            )}
          </div>
        )}
    </>
  ) 
}

export default Header