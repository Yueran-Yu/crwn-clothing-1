import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from "react-router";
import {useSelector, useDispatch} from 'react-redux';
import {selectCurrentUser} from "./redux/user/user.selectors";
import HomePage from './pages/homepages/homepage.component'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
//remember: in the previous video, we stored the user data in our database, but now we have to store that data in the 'state' of our application so we can use it in our app~
import {checkUserSession} from './redux/user/user.actions';
import {GlobalStyle} from "./global.styles";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import Footer from "./components/footer/footer.component";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import ContactPage from "./components/contact/contact.component";

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/contactUs' component={ContactPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin'
               render={() => currentUser ? (<Redirect to='/'/>) : (<SignIn/>)}/>
        <Route eaxct path='/signup' component={SignUp}/>
      </Switch>
      <ScrollToTop/>
      <Footer className='footer'/>
    </div>
  )
}

export default App;
