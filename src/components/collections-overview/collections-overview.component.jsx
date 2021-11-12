import React from "react";
import './collections-overview.styles';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";
import {Wrapper} from "./collections-overview.styles";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({collections}) => (
  <Wrapper>
    {
      collections.map(({id, ...otherProps}) => (
        <CollectionPreview key={id} {...otherProps}/>
      ))
    }
  </Wrapper>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);