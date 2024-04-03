import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "../../components/modalContent/ModalContent"
import projectsList from "../../data/projectsList"
import "./Card.scss"

function Card() {
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <div className="card-container">
      {projectsList.map(({id, title, cover, pictures, fr, en, technologies, site, github}) => (
        <div key={id} className="card">
          <img src={cover} alt={title} onClick={() => setSelectedCard(id)}/>
          <h1 onClick={() => setSelectedCard(id)}>{title}</h1>
          {selectedCard === id && 
          createPortal(
            <ModalContent closeModal={() => setSelectedCard(null)} cover={cover} pictures={pictures} title={title} fr={fr} en={en} technologies={technologies} site={site} github={github}/>,
            document.body
          )}
        </div>
      ))}
    </div>
  )
}

export default Card