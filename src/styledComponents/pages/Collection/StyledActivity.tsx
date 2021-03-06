import styled from 'styled-components'

export const CreationCard = styled.div`
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  grid-column-gap: 2%;
  grid-row-gap: 15px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 32% 32% 32%;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 48% 48%;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 100%;
  }
`

export const ImageCardDiv = styled.div`
  border-radius: 23px;
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  background-size: cover;
`

export const CardFooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  background-color: #f5f5fb;
  width: calc(100% - 2px);
  bottom: 0px;
  border-radius: 20px;
  padding: 10px 5px;
  margin: 1px;
`

export const AvatarTitle = styled.div`
  width: 70%;
  font-size: 14px;
  color: #1f0042;
`

export const Bell = styled.div`
  cursor: pointer;
  svg {
    margin-left: 5px;
  }
  font-size: 12px;
  color: #000;
`
