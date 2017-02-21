import React from 'react'
import {prefixLink} from 'gatsby-helpers'
import {Link} from 'react-router'

const Header = (props) => {
  const {post} = props
  let button
  if (post.link) {
    button = (<Link className="main-link" to={prefixLink(post.link)}>
      {post.linkText}
    </Link>)
  }
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
      <p className="context" dangerouslySetInnerHTML={{__html: post.context}} />
      {button}
    </header>
  )
}

Header.propTypes = {
  post: React.PropTypes.shape({
    path: React.PropTypes.string,
    layout: React.PropTypes.string,
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    context: React.PropTypes.static,
    link: React.PropTypes.static,
    linkText: React.PropTypes.string,
  }).isRequired,
}

export default Header