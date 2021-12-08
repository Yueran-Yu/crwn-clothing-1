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
  top: 50px;
  right: 14%;
  z-index: 5;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-bottom:10px;

  ::-webkit-scrollbar {
    display: none;
`

export const EmptyMessage = styled.span`
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin: 50px auto;
`
