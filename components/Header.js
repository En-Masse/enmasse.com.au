import React from 'react'
import {prefixLink} from 'gatsby-helpers'
import {Link} from 'react-router'

const Header = () =>
  <header className="container">
    <div className="navbar">
      <Link to={prefixLink('/')}>
        <h1>En Masse</h1>
      </Link>
      <Link to={prefixLink('/about/')}>
        About
      </Link>
      <Link to={prefixLink('/clients/')}>
        Clients
      </Link>
      <Link to={prefixLink('/services/')}>
        Services
      </Link>
      <Link to={prefixLink('/blog/')}>
        Blog
      </Link>
      <Link to={prefixLink('/contact/')}>
        Enquiries
      </Link>
    </div>
  </header>

export default Header