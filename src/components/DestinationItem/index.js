// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="list">
      <div className="image">
        <img src={imgUrl} alt={name} />
      </div>
      <p className="card-name">{name}</p>
    </li>
  )
}

export default DestinationItem
