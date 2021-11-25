import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router";
import {connect} from 'react-redux';
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";

import HomePage from './pages/homepages/homepage.component'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
// remember: in the previous video, we stored the user data in our database, but now we have to store that data in the 'state' of our application so we can use it in our app~
import {selectCollectionsForPreview} from './redux/shop/shop.selectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // const {setCurrentUser} = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth)
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       })
    //     })
    //   }
    //   setCurrentUser(userAuth)
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items})=>({title, items})))
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exxact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin'
                 render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state)
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

// const mapDispatchToProps = dispatch => ({
  // setCurrentUser is gonna be attached to the props, so we can use inside of our component
  // dispatch will be called when we call setCurrentUser inside of our function
  // dispatch(setCurrentUser(user)) here 'setCurrentUser(user)' is the action form redux
  // setCurrentUser: user => dispatch(setCurrentUser(user))
// })

export default connect(mapStateToProps)(App);
