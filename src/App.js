import React, {useState, useEffect} from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import HomePage from './pages/homepages/homepage.component'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
      const unsubscribeFromAuth = () => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            console.log(user)
          }
        )
      }
      unsubscribeFromAuth()
      return () => {
        unsubscribeFromAuth()
      }
    }
  )

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
}

export default App;
