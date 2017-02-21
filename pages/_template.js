import React from 'react'
// import {Link} from 'react-router'
// import {prefixLink} from 'gatsby-helpers'
// import {config} from 'config'
import Header from '../components/Header'
import BackgroundVideo from '../components/BackgroundVideo'

const Template = ({children}) => {
  const post = children.props.route.page.data
  console.log(post)
  let video
  if (post.path === '/') {
    video = (<BackgroundVideo />)
  }
  return (
    <div>
      {video}
      <Header post={post} />
      {children}
    </div>
  )
}

Template.propTypes = {
  children: React.PropTypes.shape({
    props: React.PropTypes.Object,
  }),
}

Template.defaultProps = {
  children: {
    props: {
    },
  },
}

export default Template