import React from 'react'
// import {Link} from 'react-router'
// import {prefixLink} from 'gatsby-helpers'
// import {config} from 'config'
import Header from '../components/Header'

const Template = ({children}) => {
  const post = children.props.route.page.data
  return (
    <div className="lol">
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