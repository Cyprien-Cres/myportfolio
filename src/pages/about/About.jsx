import Tabbar from "../../components/tabbar/Tabbar"
import swagger from "../../assets/swagger.svg"
import { useSelector } from "react-redux"
import { currentTrad } from "../../features/traduction/TradSlice"
import "./About.scss"

function About() {
  const trad = useSelector(currentTrad)
  return (
    <div className="about">
      {trad ? (
        <>
          <Tabbar />
          <div className="about-section">
            <p className="paraph">
              <span>cypriencres $</span> cd aboutme
            </p>
            <p className="paraph">
              <span>aboutme <span className="branch">(main)</span> $ </span> Hello! My name is cyprien. I'm a web developer. I studied at OpenClassRooms, I'm very curious and I like to learn new things. I'll be happy to get more experience in web development.
            </p>
          </div>
          <Tabbar />
          <div className="about-section">
          <p className="paraph"><span>cypriencres $</span> cd skills/tools</p>
          <p className="paraph"><span>skills/tools <span className="branch">(main)</span> $ </span>ls</p>
          <div className="paraph">
            <span>Proficient With</span><br />
            <ul>
              <li><i className="fa-brands fa-js"></i> javascript</li>
              <li><i className="fa-brands fa-react"></i> react</li>
              <li><i className="fa-brands fa-git-alt"></i> git</li>
              <li><i className="fa-brands fa-github"></i> github</li>
              <li><i className="fa-brands fa-sass"></i> sass</li>
              <li><i className="fa-brands fa-html5"></i> html5</li>
              <li><i className="fa-brands fa-css3-alt"></i> css3</li>
              <li><i className="fa-brands fa-figma"></i> figma</li>
              <li><i className="fa-brands fa-jira"></i> jira</li>
            </ul>
          </div>
          <div className="paraph">
            <span>Exposed To</span>
            <ul>
              <li><i className="fa-brands fa-aws"></i> aws</li>
              <li><i className="fa-solid fa-leaf"></i> mongodb</li>
              <li><i className="fa-brands fa-node-js"></i> nodejs</li>
              <li className="swagger"><img src={swagger} alt="swagger" className="swagger-img"/><div>swagger</div></li>
            </ul>
          </div>
          </div>
          <Tabbar />
          <div className="about-section">
            <p className="paraph"><span>cypriencres $</span> cd hobbies/interests</p>
            <p className="paraph"><span>hobbies/interests <span className="branch">(main)</span> $ </span>ls</p>
            <ul className="hobbies">
              <li>🏀 basketball</li>
              <li>📖 read</li>
              <li>🎮 video games</li>
              <li>🎧 music</li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <Tabbar />
          <div className="about-section">
            <p className="paraph">
              <span>cypriencres $</span> cd aboutme
            </p>
            <p className="paraph">
              <span>aboutme <span className="branch">(main)</span> $ </span> Bonjour! Je m'appelle Cyprien. Je suis développeur web. J'ai étudié chez OpenClassrooms. Je suis très curieux et j'aime apprendre de nouvelles choses. Je serais heureux d'acquérir plus d'expérience dans le domaine du développement web.
            </p>
          </div>
          <Tabbar />
          <div className="about-section">
          <p className="paraph"><span>cypriencres $</span> cd skills/tools</p>
          <p className="paraph"><span>skills/tools <span className="branch">(main)</span> $ </span>ls</p>
          <div className="paraph">
            <span>Compétent avec</span><br />
            <ul>
              <li><i className="fa-brands fa-js"></i> javascript</li>
              <li><i className="fa-brands fa-react"></i> react</li>
              <li><i className="fa-brands fa-git-alt"></i> git</li>
              <li><i className="fa-brands fa-github"></i> github</li>
              <li><i className="fa-brands fa-sass"></i> sass</li>
              <li><i className="fa-brands fa-html5"></i> html5</li>
              <li><i className="fa-brands fa-css3-alt"></i> css3</li>
              <li><i className="fa-brands fa-figma"></i> figma</li>
              <li><i className="fa-brands fa-jira"></i> jira</li>
            </ul>
          </div>
          <div className="paraph">
            <span>Exposé à</span>
            <ul>
              <li><i className="fa-brands fa-aws"></i> aws</li>
              <li><i className="fa-solid fa-leaf"></i> mongodb</li>
              <li><i className="fa-brands fa-node-js"></i> nodejs</li>
              <li className="swagger"><img src={swagger} alt="swagger" className="swagger-img"/><div>swagger</div></li>
            </ul>
          </div>
          </div>
          <Tabbar />
          <div className="about-section">
            <p className="paraph"><span>cypriencres $</span> cd hobbies/interests</p>
            <p className="paraph"><span>hobbies/interests <span className="branch">(main)</span> $ </span>ls</p>
            <ul className="hobbies">
              <li>🏀 basketball</li>
              <li>📖 lecture</li>
              <li>🎮 jeux vidéo</li>
              <li>🎧 musique</li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default About