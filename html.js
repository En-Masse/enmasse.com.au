import React from 'react'
import Helmet from 'react-helmet'
import {prefixLink} from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw!./public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

const html = () => ({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render() {
    const {body} = this.props
    const head = Helmet.rewind()
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{__html: stylesStr}}
        />
      )
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
        </head>
        <body className="landing-page">
          <p id="react-mount" dangerouslySetInnerHTML={{__html: body}} />
          <script src={prefixLink(`./bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})

export default html