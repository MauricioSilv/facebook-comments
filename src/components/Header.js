import React from 'react';
import '../assets/css/Header.css';
import faceLogo from '../assets/img/facebook.png';
function Header(){
  return (
    <header id='header_content'>
      <div className='logo_face'>
        <img src={faceLogo} alt="facebok-logo"/>
      </div>
      <div className='user_name'>
        <p>Meu perfil</p>
      </div>
    </header>
  )
}

export default Header;