import styled from 'styled-components'

export const SideBarDiv = styled.div`
  @media screen and (max-width: 1280px) {
    background-color: #000;
    position: fixed;
    z-index: 2;
    ${() =>
      localStorage.getItem('rightmenu') === 'on'
        ? 'left: 0;transition: 0.7s ease;'
        : 'left: -331px;transition: 0.7s ease;'}
  }
  background-color: #fff;
  width: 331px;
  z-index: 2;
  height: 100;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const SibeBarLogo = styled.div`
  width: 331px;
  height: 200px;
  position: fixed;
`
export const LogoImg = styled.img`
  width: 214.64px;
  height: 65.69px;
  margin-top: 52px;
  cursor: pointer;
`

export const SideBarTab = styled.div`
  top: 175px;
  width: 331px;
  position: fixed;
`
export const SideBarButton = styled.div`
  width: 331px;
  position: fixed;
  bottom: 51px;
`

export const TabPane = styled.div`
  svg {
    margin-right: 42px;
  }
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 15px 53px;
  font-size: 17px;
  font-style: bold;
  font-weight: 500;
`
