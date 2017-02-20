import React from 'react'
import {prefixLink} from 'gatsby-helpers'
import {Link} from 'react-router'

const Header = (props) => {
  const {pages} = props
  return (
    <header className="container">
      <Link to={prefixLink('/')} className="six columns">
        <h1>En Masse</h1>
      </Link>
      {pages.map((page) => {
        if (!page.path.includes('blog/') && page.path !== '/404/' && page.path !== '/') {
          return (
            <Link key={page.path} className="one column" to={prefixLink(page.path)}>{page.data.title}</Link>
          )
        }
        return false
      })}
    </header>
  )
}

Header.propTypes = {
  pages: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}

export default Header