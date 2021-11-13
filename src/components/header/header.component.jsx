import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {HeaderWrapper, LogoWrapper, OptionsWrapper, OptionDiv, OptionLink} from "./header.style";
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) => (
  <HeaderWrapper>
    <LogoWrapper to='/'>
      <Logo className='logo'/>
    </LogoWrapper>
    <OptionsWrapper>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> :
          <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsWrapper>
    {hidden ? null : <CartDropdown/>}
  </HeaderWrapper>
)

// state is root reducer
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
