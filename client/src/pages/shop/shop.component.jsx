import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from "react-redux";
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from "../collection/collection.container";

const ShopPage =({fetchCollectionsStart, match})=>{
  useEffect(()=>{
    fetchCollectionsStart()
  },[fetchCollectionsStart])

    return (
      <div className='shop-page'>
        <Route exact
               path={`${match.path}`}
               component={CollectionsOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`}
               component={CollectionPageContainer}/>
        {/*       */}
        {/*<Route path={`${match.path}/:collectionId`}*/}
        {/*       render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>*/}
      </div>
    )
  }

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);

// think of it as: ability to 'pause' functions