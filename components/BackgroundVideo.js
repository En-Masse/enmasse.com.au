import React, {PropTypes} from 'react'
import {prefixLink} from 'gatsby-helpers'

import './BackgroundVideo.scss'

const BackgroundVideo = ({
  videos,
  videoId,
  preload,
  loop,
  autoPlay,
  poster,
}) => {
  const videoProps = {
    preload,
    loop,
    autoPlay,
    poster,
  }
  const videoElements = videos.map(video =>
    <source key={video.src} src={video.src} type={video.type} />,
  )
  return (
    <div className="videoContainer">
      <video id={videoId} className="video-background" {...videoProps}>
        {videoElements}
      </video>
    </div>
  )
}

BackgroundVideo.propTypes = {
  videos: React.PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    type: PropTypes.string,
  })),
  loop: PropTypes.bool,
  autoPlay: PropTypes.bool,
  videoId: PropTypes.string,
  preload: PropTypes.bool,
  poster: PropTypes.string,
}

BackgroundVideo.defaultProps = {
  videos: [
    {
      src: prefixLink('/static/video/handshake.mov'),
      type: 'video/mp4',
    },
  ],
  preload: true,
  loop: true,
  autoPlay: true,
  videoId: 'video',
  poster: '',
}

export default BackgroundVideo