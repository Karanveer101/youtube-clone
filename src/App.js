import Header from './components/Header';
import Sidebar from './components/Sidebar';
import React, { useState, useEffect } from 'react';
import ExpandedSidebar from './components/ExpandedSidebar';
import Header2 from './components/Header2';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState('');
  console.log(title);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      params: {
        maxResults: 25,
      },
    })
      .then((res) => setVideoMetaInfo(res.data.items))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [videoMetaInfo, setVideoMetaInfo] = useState([]);
  console.log(videoMetaInfo);

  const handleResizeSidebar = () => {
    if (document.body.clientWidth > 900) setIsSidebarExpanded(true);
    else {
      setIsSidebarExpanded(false);
    }
  };
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
    if (document.body.clientWidth > 900) {
      return true;
    } else {
      return false;
    }
  });
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  console.log(isSearchBtnClicked);

  useEffect(() => {
    window.addEventListener('resize', handleResizeSidebar);
    return () => window.removeEventListener('resize', handleResizeSidebar);
  });

  const handleSearchBtn = (e) => {
    e.preventDefault();
    setTitle(title);
    axios({
      method: 'get',
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      params: {
        q: `${title}`,
      },
    })
      .then((res) => setVideoMetaInfo(res.data.items))
      .catch((err) => console.log(err));
  };

  const searchBtn = (
    <button type='submit' onClick={handleSearchBtn} className='searchBtn'>
      <AiOutlineSearch size={25} />
    </button>
  );

  const handleResize = () => {
    if (document.body.clientWidth > 600) {
      setIsSearchBtnClicked(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className='App'>
      {isSearchBtnClicked ? (
        <Header2
          title={title}
          setTitle={setTitle}
          setIsSearchBtnClicked={setIsSearchBtnClicked}
          searchBtn={searchBtn}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      ) : (
        <Header
          isSearchBtnClicked={isSearchBtnClicked}
          setIsSearchBtnClicked={setIsSearchBtnClicked}
          sidebar={isSidebarExpanded}
          setIsSidebarExpanded={setIsSidebarExpanded}
          setVideoMetaInfo={setVideoMetaInfo}
          title={title}
          setTitle={setTitle}
          searchBtn={searchBtn}
          setIsActive={setIsActive}
        />
      )}
      {isSidebarExpanded === true ? (
        <ExpandedSidebar videoMetaInfo={videoMetaInfo} />
      ) : (
        <Sidebar videoMetaInfo={videoMetaInfo} />
      )}
    </div>
  );
}

export default App;
