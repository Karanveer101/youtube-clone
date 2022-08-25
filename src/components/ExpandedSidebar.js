import React from 'react';
import '../styles/ExpandedSidebar.css';
import Videos from './Videos';

import { AiFillHome, AiOutlineBulb, AiOutlineTrophy, AiOutlineHistory, AiOutlineLike } from 'react-icons/ai';
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdVideoCall, MdOutlineLocalMovies, MdOutlineFeedback
} from 'react-icons/md';

import {FaYoutubeSquare} from 'react-icons/fa'

import {IoAddCircleOutline} from 'react-icons/io5';
import {SiYoutubegaming, SiYoutubemusic, SiYoutubestudio, SiYoutube} from 'react-icons/si'
import {FiSettings, FiFlag, FiHelpCircle} from 'react-icons/fi';

function ExpandedSidebar(props) {

  const {videoMetaInfo} = props
  return (
    <div className='flex'>

    <div className='expandedSidebar'>
      <button className='home'>
        <AiFillHome size={25} />
        Home
      </button>
      <button>
        <MdOutlineExplore size={25} />
        Explore
      </button>
      <button>
        <MdOutlineSubscriptions size={25} />
        Subscriptions
      </button>
      <button >
        <MdVideoCall size={25} />
        Live
      </button>

      <hr></hr>

      <button >
        <MdOutlineVideoLibrary size={25} />
        Library
      </button>
      <button>
        <AiOutlineHistory size={25} />
        History
      </button>
      <button>
        <MdOutlineWatchLater size={25} />
        Watch later
      </button>

      <button >
        <AiOutlineLike size={25} />
        Liked videos
      </button>
      <hr></hr>
      <h4>SUBSCRIPTIONS</h4>
      <button>
        <IoAddCircleOutline size={25} />
        Browse channels
      </button>

      <hr></hr>

      <h4>EXPLORE</h4>
      <button>
        <MdOutlineLocalMovies size={25} />
        Movies & Shows
      </button>

      <button>
        <SiYoutubegaming size={25} />
        Gaming
      </button>

      <button>
        <AiOutlineBulb size={25} />
        Learning
      </button>

      <button>
        <AiOutlineTrophy size={25} />
        Sports
      </button>

<hr></hr>
      <h4>MORE FROM YOUTUBE </h4>
      <button>
        <SiYoutube color='red' size={25} />
        Youtube Premium
      </button>
      <button>
        <SiYoutubestudio color='red' size={25} />
        Creator Studio
      </button>
      <button>
        <SiYoutubemusic color='red' size={25} />
        Youtube Music
      </button>
      <button>
        <FaYoutubeSquare color='red' size={25} />
        Youtube TV
      </button>

      <hr></hr>

      <button>
        <FiSettings size={25} />
        Settings
      </button>

      <button>
       <FiFlag size={25} />
            Report history
      </button>

      <button>
        <FiHelpCircle size={25}/>
        Help
      </button>

      <button>
        <MdOutlineFeedback size={25} />
        Send Feedback
      </button>
      <hr></hr>
    <footer>
        @2022 Google LLC
    </footer>
    </div>

    <Videos videoMetaInfo={videoMetaInfo} />
    </div>
  );
}

export default ExpandedSidebar;
