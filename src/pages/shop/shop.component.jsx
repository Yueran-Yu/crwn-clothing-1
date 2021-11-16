import React from 'react';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from 'react-router-dom';
import CollectionPage from "../collection/collection.component";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      console.log(collectionsMap)
    })
  }

  render() {
    const {match} = this.props
    return (
      <div>
        {/*we will render nested route  here
    one route will lead us to the collection overview when we are only on shop
    another route will render our new category page which we build when we land on our /shop/:category */}
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        {/*it allows us to access this collectionId as a parameter on the match object when we inside of our collection page
     match will be passed to the CollectionPage as a parameter, so that we can get 'params'  through  match.params  */}
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    )
  }
}

export default ShopPage;