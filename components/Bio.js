import React from 'react'
import {config} from 'config'
import {rhythm} from 'utils/typography'
import {prefixLink} from 'gatsby-helpers'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={prefixLink('/static/img/em-logo.png')} alt={`author ${config.authorName}`} width="46" height="46" style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <strong>{config.authorName}</strong> is currently writing this.
      </p>
    )
  }
}

export default Bio