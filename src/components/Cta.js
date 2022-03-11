import styled from "styled-components"
import JoinBtn from './JoinBtn';
import Fade from 'react-reveal/Fade';

function Cta(){
  return (
    <Container>
      <Content>
        <Notify>
          <p>We are now allowing early-access for users. <a href="#">Learn More</a></p>
        </Notify>
        <Title>
          <h1>Build a highly engaged community with no effort.</h1>
        </Title>
        <Description>
          <p>Commune offers the tools you need to build a highly engaged community with
          little to no effort. Simply setup your Commune workspace, and manage everything
          from members to content from one central dashboard.</p>
        </Description>
        <Form>
          <Input />
          <JoinBtn />
        </Form>
        <Footer>
          <p>Used by these companies:</p>
          <Brands>
            <img src="/Assets/Atlassian Icon.svg"/>
            <img src="/Assets/Behance Icon.svg"/>
            <img src="/Assets/Bing Icon.svg"/>
            <img src="/Assets/Bitbucket Icon.svg"/>
            <img src="/Assets/Dropbox Icon.svg"/>
            <img src="/Assets/Twitch Icon.svg"/>
            <img src="/Assets/Twitter Icon.svg"/>
          </Brands>
        </Footer>
      </Content>
      <Illustration>
        <img src="/Assets/illustration.png"/>
      </Illustration>
    </Container>
  )
}

export default Cta

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  margin-top: 5rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  @media(max-width: 940px){
    width: 100%;
    ${'' /* justify-content: center; */}
    align-items: center;
  }
`
const Notify = styled.div`
  text-align: center;
  padding: 7px 18px;
  background-color: #372865;
  color: #CCC1E6;
  border-radius: 25px;
  margin-bottom: 1.5rem;
  a {
    color: #CCC1E6;
    font-weight: 600;
  }
`
const Title = styled.div`
  font-size: 1.5rem;
  width: 90%;
  color: #353252;
  margin-bottom: .5rem;
  font-weight: 900;
  @media(max-width: 1024px){
    h1 {
      font-size: 2rem;
    }
  }
  @media(max-width: 900px){
    h1{
      text-align: center;
    }
  }
`
const Description = styled.div`
  width: 85%;
  color: #545454;
  @media(max-width: 940px){
    text-align: center;
  }
`

const Form = styled.div`
  display: flex;
  margin-top: 1rem;
  @media(max-width: 940px){
    flex-direction: column;
    button {
      width: 100%;
      margin-top: 1rem;
    }
    input {
      margin-right: 0;
    }
  }
`

const Input = styled.input.attrs(props => ({
  type: "email",
  placeholder: "Enter your e-mail address",
}))`
  height: 50px;
  width: 300px;
  padding: 13px;
  font-size: 15px;
  margin-right: 10px;
  outline: none;
`

const Illustration = styled.div`
  width: 35%;
  img {
    width: 100%;
  }

  @media(max-width: 940px){
    display: none;
  }
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  padding-bottom: 2rem;
  p {
    font-weight: 600;
    padding-bottom: 1rem;
  }

  @media(max-width: 940px){
    margin-right: 110px
  }
`

const Brands = styled.div`
  display: flex;
  p {
    color: #545454;
    font-weight: 700;
  }
  img {
    padding-right: 10px;
  }
  @media(max-width: 500px){
    flex-wrap: wrap;
    img {
      padding-top: 10px;
    }
  }

  @media(max-width: 940px){
    align-items: flex-start;
  }
`