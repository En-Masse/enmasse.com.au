import React, {Component} from 'react'
import {prefixLink} from 'gatsby-helpers'
import {Link} from 'react-router'

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.pages.map(page => {
            if (!page.path.includes('blog/') && page.path !== '/404/' && page.path !== '/') {
              return (
                <li>
                  <Link style={{
                    boxShadow: 'none'
                  }} to={prefixLink(page.path)}>{page.data.title}</Link>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

Header.propTypes = {
  route: React.PropTypes.object
}

export default Header