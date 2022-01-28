import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {HeaderWrapper, LogoWrapper, OptionsWrapper, OptionLink} from "./header.style";
import {connect} from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {signOutStart} from "../../redux/user/user.actions";

const Header = ({currentUser, hidden, signOutStart}) => {
  return (
    <HeaderWrapper>
      <LogoWrapper to='/'>
        <Logo className='logo'/>
      </LogoWrapper>
      <OptionsWrapper>
        <p> {currentUser ? (`Welcome,   ${currentUser.displayName.split(' ')[0]}`) : ''}</p>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/contactUs'>
          CONTACT
        </OptionLink>
        {
          currentUser ?
            <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink> :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon/>
      </OptionsWrapper>
      {hidden ? null : <CartDropdown/>}
    </HeaderWrapper>
  )
}

// state is root reducer
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
