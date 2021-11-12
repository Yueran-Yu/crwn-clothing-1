import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selector";

const ShopPage = ({collections}) => (
  <div>
    {
      collections.map(({id, ...otherProps}) => (
        <CollectionPreview key={id} {...otherProps}/>
      ))
    }
  </div>
)
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})
export default connect(mapStateToProps)(ShopPage);