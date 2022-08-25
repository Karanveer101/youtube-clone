import React from 'react';
import '../styles/Videos.css';
function Videos(props) {
  const { videoMetaInfo } = props;
  console.log(videoMetaInfo);

  const displayVideos = videoMetaInfo.map((item) => (
    <div>
      <div
        style={{
          backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
        }}
      ></div>
      <h4>{item.snippet.title}</h4>
    </div>
  ));

  return <div className='videos'>{displayVideos}</div>;
}

export default Videos;
