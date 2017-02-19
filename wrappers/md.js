import React from 'react'
import moment from 'moment'
import Helmet from 'react-helmet'
import ReadNext from '../components/ReadNext'
import {rhythm} from 'utils/typography'
import {config} from 'config'
import Bio from 'components/Bio'
import Header from 'components/Header'

class MarkdownWrapper extends React.Component {
  render() {
    const {route} = this.props
    const post = route.page.data
    // console.log(this.props)
    // console.log(this.props.route.pages)
    // console.log(config)
    return (
      <div className="markdown">
        <Header pages={this.props.route.pages} />
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1 style={{marginTop: 0}}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.body}} />
        <em
          style={{
            display: 'block',
            marginBottom: rhythm(2),
          }}
        >
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <hr
          style={{
            marginBottom: rhythm(2),
          }}
        />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper