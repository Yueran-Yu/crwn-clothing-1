import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Wrapper} from "./header.style";
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
  <Wrapper>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
          <Link className='option' to='/sign'>SIGN IN</Link>
      }
    </div>
  </Wrapper>
)

export default Header;
