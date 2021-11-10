import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  
  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
`

