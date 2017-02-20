import React from 'react'
import Helmet from 'react-helmet'
import {config} from 'config'
import ReadNext from '../components/ReadNext'
import Header from '../components/Header'

import '../css/styles.scss'

const MarkdownWrapper = (props) => {
  const {route} = props
  const post = route.page.data
  switch (post.layout) {
    case 'page':
      return (
        <div className="markdown">
          <Header pages={props.route.pages} />
          <Helmet
            title={`${post.title} | ${config.blogTitle}`}
          />
          <h1 style={{marginTop: 0}}>{post.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.body}} />
        </div>
      )
    default:
      return (
        <div className="markdown">
          <div dangerouslySetInnerHTML={{__html: post.body}} />
          <ReadNext post={post} pages={route.pages} />
        </div>
      )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.shape({
    pages: React.PropTypes.array,
    page: React.PropTypes.object,
    templates: React.PropTypes.array,
  }).isRequired,
}

export default MarkdownWrapper