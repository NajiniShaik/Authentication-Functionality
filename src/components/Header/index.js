import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <ul className="navbar-menu">
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
