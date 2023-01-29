import { useNavigate, useLocation } from "react-router-dom"
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg"
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg"
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg"

const Navbar = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    return route === location.pathname
  }

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate('/')}>
            <ExploreIcon fill={pathMatchRoute('/') ? '#e7610f' : '#8f8f8f'} width='36px' height='36px' />
            <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/offers')}>
            <OfferIcon fill={pathMatchRoute('/offers') ? '#e7610f' : '#8f8f8f'} width='36px' height='36px' />
            <p className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Offer</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/profile')}>
            <PersonOutlineIcon fill={pathMatchRoute('/profile') ? '#e7610f' : '#8f8f8f'} width='36px' height='36px' />
            <p className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar