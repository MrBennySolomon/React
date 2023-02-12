import './Card.css';


const Card = ({img, title, description, links}) => {
  return (
    <div className="card">
      <img src={img} alt='img'/>
      <h3>{title}</h3>
      <h5>{description}</h5>
      <a href='https://www.google.com'>{links[0]}</a>
      <a href='https://www.google.com'>{links[1]}</a>
    </div>
  )
}

export default Card