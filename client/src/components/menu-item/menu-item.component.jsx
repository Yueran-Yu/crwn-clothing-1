import React from 'react';
import {Wrapper} from "./menu-item.style";
import {withRouter} from "react-router-dom";

export const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
  return (<Wrapper imageUrl={imageUrl} className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image'/>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </Wrapper>
)
}

export default withRouter(MenuItem);