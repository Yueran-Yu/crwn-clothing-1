import React from 'react';
import {CollectionPageWrapper, CollectionItemsWrapper, CollectionTitle} from "./collection.styles";
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

const CollectionPage = () => {
  const {collectionId} = useParams()
  const collection = useSelector(selectCollection(collectionId))
  const {title, items} = collection;

  return (
    <CollectionPageWrapper>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsWrapper>{items.map(i => <CollectionItem key={i.id} item={i}/>)}</CollectionItemsWrapper>
    </CollectionPageWrapper>
  )
}

export default CollectionPage;