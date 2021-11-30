import React from 'react';
import {
  CollectionItemWrapper,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.style';
import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  const AddItem = () => {
    addItem(item)
  }

  return (
    <CollectionItemWrapper>
      <BackgroundImage className='image' imageUrl={imageUrl}/>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton className='custom-button' onClick={AddItem} inverted>Add to cart</AddButton>
    </CollectionItemWrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);