import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

function Hotel() {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/244054342.jpg?k=af2a9cac8bcbf0c72214bb9b6db35d1f89c75ef14c2454e74f6b102285c79dca&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/244053854.jpg?k=55e0056a4952239681782e03831336fe9b7734f94696ffb74940d9260a0ff21c&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/247495850.jpg?k=9c39bfae11a5f27ee7bd7928224c0eb3206a6e46796b782766a18f58bc3bada0&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/244053622.jpg?k=0f19b73c5879feb2280cbb251ba0ea08b3154fc4a08580ca59f676435c218e0f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/244054247.jpg?k=980977bd93422646048bffb625ba861feb78ab49d2b36e6e5f573638723656e6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/244054054.jpg?k=f5565f0b7dab41fb8edf4953a7e01bae9961d7397e2f7f3a4db0586f98de561d&o=&hp=1",
    },
  ]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle"> Grand Hotel</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 112</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPrice">
            Book a stay over $114 at this proprety and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImageWrapper">
                <img className="hotelImg" src={photo.src} alt="hotel " />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakov</h1>
              <p className="hotelDesc">
                Located in Kraków, 4.7 km from Wawel Royal Castle, Campanile
                Krakow South features accommodation with a bar and private
                parking. Featuring room service, this property also provides
                guests with a children's playground. The accommodation provides
                a 24-hour front desk, airport transfers, a kids' club and free
                WiFi throughout the property.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this proprety has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$956</b> (9 nights)
              </h2>
              <button>Reserve or Book Now !</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
