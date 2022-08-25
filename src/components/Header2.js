import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { MdKeyboardVoice } from 'react-icons/md';
import Search from './Search';

function Header2(props) {
  const {
    setIsSearchBtnClicked,
    title,
    setTitle,
    searchBtn,
    isActive,
    setIsActive,
  } = props;
  return (
    <div>
      <div className='header'>
        <div className='firstNav'>
          <button
            onClick={() => {
              setIsSearchBtnClicked(false);
              setIsActive(false);
            }}
          >
            <IoArrowBack size={25} />
          </button>
        </div>

        <form className='secondNav2'>
          <Search isActive={isActive} title={title} setTitle={setTitle} />
          {searchBtn}
          <button className='voiceBtn'>
            <MdKeyboardVoice size={25} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header2;
