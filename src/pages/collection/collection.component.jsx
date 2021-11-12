import React from 'react';
import {Wrapper} from "./collection.styles";
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({collection}) => {
  console.log("**************")
  console.log(collection)
  const {title, items} = collection;
  return (
    <Wrapper>
      <h2 className='title'>{title}</h2>
      <div className="items">{items.map(i => <CollectionItem key={i.id} item={i}/>)}</div>
    </Wrapper>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);