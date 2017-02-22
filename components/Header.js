import React, {Component} from 'react'
import {prefixLink} from 'gatsby-helpers'
import {Link} from 'react-router'
import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }
    this.navToggle = this.navToggle.bind(this)
  }

  navToggle() {
    const {navOpen} = this.state
    this.setState({
      navOpen: !navOpen,
    })
  }

  render() {
    const {post} = this.props
    const {navOpen} = this.state
    let button
    if (post.link) {
      button = (<Link className="main-link" to={prefixLink(post.link)}>
        {post.linkText}
      </Link>)
    }
    let headerClass
    if (post.path.slice(1) && post.path.slice(1) !== '404') {
      headerClass = post.path.slice(1)
    } else {
      headerClass = 'index'
    }
    return (
      <header className={headerClass}>
        <Link to={prefixLink('/')}>
          <img className="logo" src={prefixLink('/static/img/enmasse-logo.png')} alt={'En Masse'} />
        </Link>
        <button className={`navToggle active-${navOpen}`} onClick={this.navToggle}><span /></button>
        <div className={`navigation navopen-${navOpen}`}>
          <Link to={prefixLink('/about/')} onClick={this.navToggle}>
            About
          </Link>
          <Link to={prefixLink('/clients/')} onClick={this.navToggle}>
            Clients
          </Link>
          <Link to={prefixLink('/services/')} onClick={this.navToggle}>
            Services
          </Link>
          <Link to={prefixLink('/blog/')} onClick={this.navToggle}>
            Blog
          </Link>
          <Link to={prefixLink('/contact/')} onClick={this.navToggle}>
            Enquiries
          </Link>
        </div>
        <h1>{post.title}</h1>
        <p className="context" dangerouslySetInnerHTML={{__html: post.context}} />
        {button}
      </header>
    )
  }
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