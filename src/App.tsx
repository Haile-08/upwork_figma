import { CiSearch } from 'react-icons/ci'
import './App.css'
import logo from "./assets/logo.png"
import image from "./assets/image.png"
import { MdOutlineShoppingBag } from 'react-icons/md'
import { LiaUserSolid } from 'react-icons/lia'

function App() {

  return (
    <>
      <div className="home-main">
        <div className="home-nav">
          <div className="sales-off">
            <p>CUSTOMER APPRECIATION SALE! 15% OFF SITEWIDE</p>
          </div>
          <div className="home-nav-nav">
            <div className="home-nav-info">
              <div className="home-nav-info-left">
                <img src={logo} alt="logo" />
                <p>Who We Are</p>
                <p>Solutions</p>
                <p>PORTFOLIO</p>
                <p>Connect</p>
              </div>
              <div className="home-nav-info-right">
                <button>GET A QUOTE</button>
              </div>
            </div>
            <div className="home-nav-options">
              <CiSearch />
              <MdOutlineShoppingBag />
              <LiaUserSolid />
            </div>
          </div>
        </div>
        <div className="home-body">
          <div className="text">
            <h2>Our Story</h2>
            <p className='light'>
            Joseph Benjamin Lawton began his printing
            journey in the late 1800s at age 10. Years
            later after being shot for printing the truth in
            his Louisiana newspaper, he decided to apply
            his courage to a new venture in Orlando -
            pineapple farming. The severe freeze of 1899
            forced J.B. Lawton to return to what he knew
            —printing. Lawton Press was formed in 1900,
            and our family’s legacy began.
            </p>
            <p className='bold'>
            The Lawton family tradition continued, with each
            son learning printing from a young age, expanding
            the business with each generation. J.C. Lawton
            took over until 1948, followed by J.B. Lawton III,
            and then Ces Lawton in 1981. In 2002, the 5th
            generation, Kimberly Lawton Koon, and Tyler Koon
            took over the helm driving growth with advanced
            technology
            </p>
          </div>
          <div className="image">
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
