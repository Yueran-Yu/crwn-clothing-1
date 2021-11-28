import React from 'react';
import {CollectionPreviewWrapper, PreviewWrapper, TitleWrapper} from "./collection-preview.style";
import CollectionItem from "../collection-item/collection-item.component";
import {withRouter} from "react-router";

const CollectionPreview = ({title, items, history, match, routeName}) => (
  <CollectionPreviewWrapper>
    <TitleWrapper onClick={()=> history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleWrapper>
    <PreviewWrapper>
      {
        items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}/>
          ))
      }
    </PreviewWrapper>
  </CollectionPreviewWrapper>
)

export default withRouter(CollectionPreview);