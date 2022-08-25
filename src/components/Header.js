import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Header.css';
import logo from '../images/youtube.webp';
import myPhoto from '../images/myPhoto.jpeg';
import Search from './Search';

import { IoReorderThreeOutline } from 'react-icons/io5';

import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';

import { MdVideoCall, MdKeyboardVoice } from 'react-icons/md';

function Header(props) {
  const {
    setIsSidebarExpanded,
    setIsSearchBtnClicked,
    title,
    setTitle,
    searchBtn,
    setIsActive,
  } = props;

  const [isDesktop, setIsDesktop] = useState(document.body.clientWidth > 600);

  const searchBtn2 = (
    <button
      onClick={() => {
        setIsSearchBtnClicked(true);
        setIsActive(true);
      }}
      className='searchBtn2'
    >
      <AiOutlineSearch size={25} />
    </button>
  );

  const handleResize = () => {
    if (document.body.clientWidth < 600) setIsDesktop(false);
    else if (document.body.clientWidth > 600) {
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className='header'>
      <div className='firstNav'>
        <button
          onClick={() =>
            setIsSidebarExpanded((isSidebarExpanded) => !isSidebarExpanded)
          }
        >
          <IoReorderThreeOutline size={28} />
        </button>
        <button>
          <img className='logo' src={logo} alt='logo' />
        </button>
      </div>

      <form className='secondNav'>
        <Search title={title} setTitle={setTitle} />
        {isDesktop ? searchBtn : searchBtn2}

        <button className='voiceBtn'>
          <MdKeyboardVoice size={25} />
        </button>
      </form>

      <div className='lastNav'>
        <button>
          <MdVideoCall size={25} />
        </button>
        <button>
          <AiOutlineBell size={25} />
        </button>

        <button>
          <img src={myPhoto} alt='account' id='accountPhoto' />
        </button>
      </div>
    </div>
  );
}

export default Header;
