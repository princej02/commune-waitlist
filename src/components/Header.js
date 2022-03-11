import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import JoinBtn from './JoinBtn';

function Header(){
  return (
    <Heading>
      <Logo>
        <img src="/Assets/Logo.svg"/>
      </Logo>
      <Menu>
        <a href="#">Features</a>
        <a href="#">Affiliates</a>
        <a href="#">Picking</a>
        <a href="#">Communities</a>
        <JoinBtn />
        <Icon>
          <MenuIcon />
        </Icon>
      </Menu>
    </Heading>
  )
}

export default Header

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  margin-top: 1rem;
  padding: 2rem 7rem;

  @media(max-width: 700px){
    padding: 2rem 2rem;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  ${'' /* justify-content: center; */}
  align-items: center;
  a {
    text-decoration: none;
    margin-right: 1.5rem;
    color: #545454;
  }

  @media(max-width: 940px){
    a, button {
      display: none;
    }
  }

`

const Button = styled.button`
  height: 50px;
  width: 120px;
  background: #372865;
  border-radius: 5px;
  padding: 7px;
  color: white;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
`
const Icon = styled.div`
  cursor: pointer;
  visibility: hidden;

  @media(max-width: 940px){
    display: block;
    visibility: visible;
  }
  
`