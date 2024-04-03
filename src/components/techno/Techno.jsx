import "./Techno.scss";

// eslint-disable-next-line react/prop-types
const Techno = ({ technologies }) => {
  return (
    <div className='technologies'>
      {Object.values(technologies).map((tech, index) => (
        <img key={index} src={tech} alt="Technologies" />
      ))}
    </div>
  );
}

export default Techno;