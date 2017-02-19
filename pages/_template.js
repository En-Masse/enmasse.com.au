import React from 'react'
import {Link} from 'react-router'
import {Container} from 'react-responsive-grid'
import {prefixLink} from 'gatsby-helpers'
import {config} from 'config'
import {rhythm, scale} from '../utils/typography'
import Header from '../components/Header'

class Template extends React.Component {
  render() {
    const {location, children} = this.props
    // let header
    // if (location.pathname === prefixLink('/')) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }} to={prefixLink('/')}
    //       >
    //         {config.blogTitle}
    //       </Link>
    //     </h1>
    //   )
    // } else {
      // header = (
      //   <Header></Header>
      // )
    // }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >

        {children}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template