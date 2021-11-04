import React from 'react';
import {Wrapper} from "./collection-preview.style";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => (

  <Wrapper>
    <h1>{title}</h1>
    <div className='preview'>
      {
        items
          .filter((item, index) => index < 4)
          .map(({id, ...otherProps}) => (
            <CollectionItem key={id}  {...otherProps} />
          ))
      }
    </div>
  </Wrapper>
)

export default CollectionPreview;