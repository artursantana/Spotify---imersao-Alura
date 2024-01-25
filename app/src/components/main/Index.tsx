
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import * as S from './style'
import Image from 'next/image'

const Index = () => {
  return (
    <S.ContainerDiv>
      <S.ContainerNav>
        <div className='logo'>
          <a href="">
              <Image src='/assets/icons/logo-spotify.png' width={250} height={250} alt='hello' />
          </a>
        </div>
        <S.ContainerDivul>
          <ul>
            <li><a href=""><FontAwesomeIcon icon={faHouse} /><span> Home</span></a></li>
            <li><a href=""><FontAwesomeIcon icon={faMagnifyingGlass} /><span> Search</span></a></li>
          </ul>
        </S.ContainerDivul>
      </S.ContainerNav>
    </S.ContainerDiv>
  )
}

export default Index
