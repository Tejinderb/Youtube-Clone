import React from 'react'
import Youtube from 'react-youtube';

function Video({videoId}) {
  return (
    <div>
        <Youtube
            videoId={videoId}
        />
    </div>
  )
}

export default Video