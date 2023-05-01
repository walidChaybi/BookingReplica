import "./searchItem.css"

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/301108189.webp?k=ca2ab91647ed23f4f54daa4add0bffc8887eccb99b12ae0f5c71c3d5ff250d65&o=&s=1"
        alt="hotel"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartements</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxi">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartement with air conditioning
        </span>
        <span className="siFeatures">
          Entire studio . 1 bathroom . 21m 1 full bed
        </span>
        <span className="siCancel">Free cancellation</span>
        <span className="siCancelSub">
          You can cancel laet, so lock in this great price today !
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$152</span>
          <span className="siTax">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
