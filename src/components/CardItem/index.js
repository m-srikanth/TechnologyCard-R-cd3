// Write your code here.
import './index.css'

const TechCard = prop => {
  const {cardDetails} = prop
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt={title} className="img1" />
      </div>
    </li>
  )
}
export default TechCard
