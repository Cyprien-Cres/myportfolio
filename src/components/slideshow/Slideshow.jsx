import { useState } from "react"
import "./Slideshow.scss"

// eslint-disable-next-line react/prop-types
const Slideshow = ({ pictures }) => {
  const [index, setIndex] = useState(0)
  const length = {pictures}.pictures.length

  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex >= length ? 0 : newIndex)
  }

    return (
      <div className="slider">
        <button onClick={handlePrevious} className="button-left">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={handleNext} className="button-right">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <img
          src={pictures[index]}
          alt={`Slide ${index}`}
          className="slider-img"
        />
      </div>
  )
}

export default Slideshow