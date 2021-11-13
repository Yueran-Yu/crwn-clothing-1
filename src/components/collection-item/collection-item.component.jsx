import React from 'react';
import {Wrapper} from './collection-item.style';
import CustomButton from "../custom-button/custom-button.compnent";
import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  const AddItem = () => {
    addItem(item)
  }

  return (
    <Wrapper imageUrl={imageUrl}>
      <div className='image'/>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton className='custom-button' onClick={AddItem} inverted>Add to cart</CustomButton>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);