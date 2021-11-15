import styled from 'styled-components';

export const CollectionPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`

export const TitleWrapper = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`

export const PreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`


