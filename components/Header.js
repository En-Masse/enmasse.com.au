import React from 'react'
import {prefixLink} from 'gatsby-helpers'
import {Link} from 'react-router'

const Header = (props) => {
  const {post} = props
  return (
    <header>
      <div className="navigation">
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
      <h2>{post.title}</h2>
    </header>
  )
}

Header.propTypes = {
  post: React.PropTypes.shape({
    path: React.PropTypes.string,
    layout: React.PropTypes.string,
    title: React.PropTypes.string,
    body: React.PropTypes.string,
  }).isRequired,
}

export default Header