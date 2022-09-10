import React from 'react';
import '../styles/Videos.css';
import { Link } from 'react-router-dom';

function Videos(props) {
  const { videoMetaInfo, setVideoId } = props;
  console.log(videoMetaInfo);

  const displayVideos = videoMetaInfo.map((item) => (
    <Link to='/video'>
      <div className='video' onClick={() => setVideoId(item.id)}>
        <div
          style={{
            backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
          }}
        ></div>

        <h4>{item.snippet.title}</h4>
      </div>
    </Link>
  ));

  return <div className='videos'>{displayVideos}</div>;
}

export default Videos;
