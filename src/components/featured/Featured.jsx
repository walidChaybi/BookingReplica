import "./featured.css"

function Featured() {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 Proprieties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="featuredTitles">
            <h1>Paris</h1>
            <h2>123 Proprieties</h2>
          </div>
        </div>
      </div>

      <div className="featured">
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 Proprieties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="featuredTitles">
            <h1>Paris</h1>
            <h2>123 Proprieties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="featuredTitles">
            <h1>Dubai</h1>
            <h2>123 Proprieties</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
