import styled from 'styled-components';
import CustomButton from "../custom-button/custom-button.compnent";

export const CollectionItemWrapper = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  padding:0 10px;
  
  &:hover {
    .image {
      opacity: 0.8;
      display: flex;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    height: 250px;
    margin-bottom: 15px;
    &:hover {
      .image {
        opacity: unset;
      }

      .custom-button {
        opacity: unset;
      }
    }
  }
`

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    top: 115px;
  }
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
`

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-bottom: 70px;
`

export const TitleContainer = styled.div`
  width: 90%;
  margin-bottom: 15px;
  text-align: center;


  @media screen and (max-width: 800px) {
    font-size: 13px;
  }
`

export const PriceContainer = styled.div`
  width: 100%;
  font-weight: bolder;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 13px;
  }
`