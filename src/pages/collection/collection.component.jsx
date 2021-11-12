import React from 'react';
import {Wrapper} from "./collection.styles";
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";

const CollectionPage = ({collection}) => {
  console.log("*********************")
  console.log(collection)
  return (
    <Wrapper>
      <h2>Collection Page</h2>
    </Wrapper>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);