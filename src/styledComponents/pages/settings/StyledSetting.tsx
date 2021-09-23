import styled from 'styled-components'

type InfoInputProps = {
  editFlag: boolean
}

export const AvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`
export const ChangeAvatar = styled.div`
  position: relative;
`
export const AvatarBadge = styled.div`
  position: absolute;
  bottom: 13px;
  right: 18px;
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  cursor: pointer;
`
export const AvatarImage = styled.img`
  width: 169px;
  height: 171px;
`
export const UserName = styled.span`
  margin-top: 22px;
  font-size: 20px;
  font-weight: bold;
`
export const UserDescription = styled.span`
  font-size: 16px;
  color: #a2a2c2;
`
export const CardDiv = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
  @media screen and (max-width: 800px) {
    grid-template-columns: 100%;
  }
`
export const EditableInput = styled.input`
  border: none;
  padding: 15px 15px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  background-color: #e5e9fa;
  outline: none;
  width: 100%;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const FormDiv = styled.div`
  margin: 10px 20px;
`

export const InfoLabel = styled.div`
  margin: 2px 0;
  font-size: 17px;
  font-weight: 500;
  svg {
    margin-left: 10px;
    cursor: pointer;
  }
`

export const InfoInput = styled.input<InfoInputProps>`
  margin: 2px 0;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 100%;
  ${({ editFlag }) =>
    editFlag
      ? 'padding: 15px 15px;color: #000;background-color:#e5e9fa;'
      : 'padding: 15px 0;color: #a2a2c2;background-color:#fff;'};
`

export const EditBtn = styled.button`
  border: none;
  background-color: #fff;
  outline: none;
`
