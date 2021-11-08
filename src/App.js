import React, {useState, useEffect} from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import HomePage from './pages/homepages/homepage.component'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// remember: in the previous video, we stored the user data in our database, but now we have to store that data in the 'state' of our application so we can use it in our app~

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsubscribeFromAuth = () => {
      auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const useRef = await createUserProfileDocument(userAuth)
            useRef.onSnapshot(snapshot => {
              setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
              })
            })
          } else {
            setCurrentUser(userAuth)
          }
        }
      )
    }
    unsubscribeFromAuth()
    return () => unsubscribeFromAuth()
  }, [])

  console.log(currentUser)
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
