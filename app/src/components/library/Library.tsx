

import * as S from './style'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Library = () => {
  return (
    <S.Container>
      <S.LibraryContainer>
    <button>
    <FontAwesomeIcon icon={faBook} className='icon' />
      <span>Your Library</span>
    </button>
    <FontAwesomeIcon icon={faPlus} className='icon plus' />
      </S.LibraryContainer>
      <S.SectionContainer>
    <div>
      <span className='title'>To Create your First playlist</span>
      <span className='subtitle'>It easy we are help you</span>
    </div>
    <button>To Create</button>
      </S.SectionContainer>
      <div className="cookies">
        <a href="">cookies</a>
      </div>
      <div className="languages_button">
        <FontAwesomeIcon icon={faGlobe} className='icon' />
        <span>Português do Brasil</span>
      </div>
    </S.Container>
  )
}

export default Library
