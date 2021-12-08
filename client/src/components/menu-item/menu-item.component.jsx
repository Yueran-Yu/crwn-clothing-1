import React from 'react';
import {
  MenuItemWrapper,
  BackgroundImageWrapper,
  ContentSubtitle,
  ContentWrapper,
  ContentTitle
} from "./menu-item.style";
import {withRouter} from "react-router-dom";

export const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
  return (
    <MenuItemWrapper size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageWrapper className='background-image' imageUrl={imageUrl}/>
      <ContentWrapper>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentWrapper>
    </MenuItemWrapper>
  )
}

export default withRouter(MenuItem);
