import React,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Translate } from '@mui/icons-material';

function Header() {

  const [BurgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick = {() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show = {BurgerStatus}>
          <CloseWrapper>
          <CustomClose onClick = {() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">CyberTruck</a></li>
          <li><a href="#">Roadster</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
      </BurgerNav>

    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex:1;
  justify-content: center;

  a{
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    text-decoration: none;
    color: black;
  }

  @media(max-width: 768px){
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a{
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-right: 10px;
  text-decoration: none;
  color: black;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  background-color: white;
  top:0;
  right:0;
  bottom: 0;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display:flex;
  flex-direction: column;
  text-align: start;
  transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'}; 
  transition: transform 0.2s ease-in;

  li{
    padding: 20px 0px;
    border-bottom: 1px solid black;
  }

  a{
    font-weight: 600;
    text-decoration: none;
    color: black;
  }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

