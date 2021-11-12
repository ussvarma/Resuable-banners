// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails

  return (
    <li className={`user-card-container ${className}`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button> Show More </button>
      </div>
    </li>
  )
}
export default BannerCardItem
