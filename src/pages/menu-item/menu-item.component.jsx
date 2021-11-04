import React from 'react';
import {Wrapper} from "./menu-item.style";

export const MenuItem = ({title, imageUrl, size}) => (
  <Wrapper imageUrl={imageUrl} className={`${size} menu-item`}>
    <div className='background-image'/>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </Wrapper>
)

export default MenuItem;