import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LogoutSVG } from '../components/CustomSVG'

const LogoutDiv = styled.div`
  position: fixed;
  bottom: 50px;
  font-size: 17px;
  font-weight: 500;
  svg {
    margin-left: 10px;
  }
  right: 50px;
  cursor: pointer;
  color: #000;
`

const Logout: React.FC = () => {
  return (
    <Link
      to="/signin"
      style={{ textDecoration: 'none' }}
      onClick={() => {
        localStorage.setItem('isAuth', 'false')
        localStorage.setItem('currentRouter', 'signin')
      }}
    >
      <LogoutDiv>
        Logout
        <LogoutSVG />
      </LogoutDiv>
    </Link>
  )
}

export default Logout
