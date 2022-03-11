import styled from 'styled-components'
import Header from './Header'
import Cta from './Cta'


function Section(){
  return (
    <Container>
      <Header />
      <Cta />
    </Container>
  )
}

export default Section

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 7rem;
  position: relative;

  @media(max-width: 700px){
    padding: 0 2rem;
  }
`