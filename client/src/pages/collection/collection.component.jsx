import React, {useState} from 'react';
import {CollectionPageWrapper, CollectionItemsWrapper, CollectionTitle} from "./collection.styles";
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import Pagination from "../../components/pagination/pagination.component";

const CollectionPage = () => {
  const {collectionId} = useParams()
  const collection = useSelector(selectCollection(collectionId))
  const {title, items} = collection;
  const [pageNumber, setPageNumber] = useState(0)
  const itemsPerPage = 12
  const pageVisited = pageNumber * itemsPerPage
  const currentDisplayItems = items.slice(pageVisited, pageVisited + itemsPerPage)
  const pageCount = Math.ceil(items.length / itemsPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <CollectionPageWrapper>
      <CollectionTitle>{title}</CollectionTitle>
      <Pagination pageCount={pageCount} changePage={changePage}/>
      <CollectionItemsWrapper>
        {currentDisplayItems.map(i => <CollectionItem key={i.id} item={i}/>)}
      </CollectionItemsWrapper>
      <Pagination pageCount={pageCount} changePage={changePage}/>
    </CollectionPageWrapper>
  )
}

export default CollectionPage;