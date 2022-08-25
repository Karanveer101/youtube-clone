import React from 'react';
import '../styles/Sidebar.css';
import '../styles/media.css'
import { AiFillHome, AiOutlineHistory } from 'react-icons/ai';
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from 'react-icons/md';
import Videos from './Videos';

function Sidebar(props) {

  const {videoMetaInfo} = props
  return (
    <div className='flex'>


    <div className='sidebar'>
      <button>
        <AiFillHome size={25} />
        <span>Home</span>
      </button>
      <button>
        <MdOutlineExplore size={25} />
        <span>Explore</span>
      </button>
      <button>
        <AiOutlineHistory size={25} />
        <span>History</span>
      </button>
      <button>
        <MdOutlineSubscriptions size={25} />
        <span>Subscriptions</span>
      </button>

      <button>
        <MdOutlineVideoLibrary size={25} />
        <span>Library</span>
      </button>
    </div>
    <Videos videoMetaInfo={videoMetaInfo}/>
    </div>
  );
}

export default Sidebar;
