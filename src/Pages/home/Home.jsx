import Featured from "../../components/featured/Featured"
import Footer from "../../components/footer/Footer"
import GuestLove from "../../components/guestLove/GuestLove"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import ProprietyList from "../../components/proprietyList/ProprietyList"
import "./home.css"

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <ProprietyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <GuestLove />
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default Home
