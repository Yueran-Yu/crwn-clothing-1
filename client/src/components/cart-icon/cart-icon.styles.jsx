import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 34px;
    height: 34px;
    position: relative;
  }

  .item-count {
    font-size: 10px;
    font-weight: bold;
    bottom: 17px;
    right: 18px;
    position: absolute;
    @media screen and (max-width: 800px) {
      right: 14px;

    }
  }
`