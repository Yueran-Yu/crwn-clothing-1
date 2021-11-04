import React from 'react';
import {Wrapper} from './collection-item.style';

const CollectionItem = ({name, price, imageUrl}) => (
  <Wrapper imageUrl={imageUrl}>
    <div className='image'/>
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </Wrapper>
)

export default CollectionItem;