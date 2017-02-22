import React from 'react'
import Header from '../components/Header'
import BackgroundVideo from '../components/BackgroundVideo'

const Template = ({children}) => {
  const post = children.props.route.page.data
  let video
  if (post.path === '/') {
    video = (<BackgroundVideo />)
  }
  let pageClass
  if (post.path.slice(1) && post.path.slice(1) !== '404') {
    pageClass = post.path.slice(1)
  } else {
    pageClass = 'index'
  }
  return (
    <div className={pageClass}>
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