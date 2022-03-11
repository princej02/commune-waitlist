import styled from "styled-components"

function JoinBtn(){
  return (
    <Button>Join Waitlist</Button>
  )
}

export default JoinBtn

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