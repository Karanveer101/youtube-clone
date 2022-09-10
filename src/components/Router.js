import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import VideoPlayer from './VideoPlayer';

function Router(props) {
  const savedVideoId = localStorage.getItem('videoId');
  const initialValue = JSON.parse(savedVideoId);

  console.log(initialValue);
  const [videoId, setVideoId] = useState(initialValue);
  useEffect(() => {
    localStorage.setItem('videoId', JSON.stringify(videoId));
  }, [videoId]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='video' element={<VideoPlayer videoId={videoId} />} />
        <Route path='/' element={<App setVideoId={setVideoId} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
