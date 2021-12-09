import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 200px;
  padding: 40px 20px;
  background: #f5f5f5;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 30px 20px;
    margin-top: 100px;
  }
  
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,
  minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px;
  }
`
export const FooterLink = styled.a`
  color: #5b5a5a;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  @media (max-width: 1000px) {
    font-size: 18px;
  }

  &:hover {
    color: #020202;
    font-weight: bolder;
    transition: 200ms ease-in;
  }
`

export const Heading = styled.p`
  font-size: 24px;
  color: #666666;
  margin-bottom: 40px;
  font-weight: bold;

  @media (max-width: 1000px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`
