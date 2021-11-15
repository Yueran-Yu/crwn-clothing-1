import React from 'react';
import {CollectionPreviewWrapper, PreviewWrapper, TitleWrapper} from "./collection-preview.style";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => (
  <CollectionPreviewWrapper>
    <TitleWrapper>{title}</TitleWrapper>
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

export default CollectionPreview;