import React from 'react';
import {Wrapper} from "./collection.styles";
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

const CollectionPage = () => {
  const {collectionId} = useParams()
  const collection = useSelector(selectCollection(collectionId))
  const {title, items} = collection;

  return (
    <Wrapper>
      <h2 className='title'>{title}</h2>
      <div className="items">{items.map(i => <CollectionItem key={i.id} item={i}/>)}</div>
    </Wrapper>
  )
}

export default CollectionPage;