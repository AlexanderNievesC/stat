import styled from "@emotion/styled";
import { colors } from "./styles/color";

function App() {
  return (
    <Main>
      <Title >Welcome to Github Stats</Title>
      <Form>
        <div>
          <label>Email_user</label>
          <Input placeholder="example@mail.com"></Input>
        </div>
        <div>
          <label>Password</label>
          <Input placeholder="*******"></Input>
        </div>
      </Form>
      <Button>Login</Button>
      <Createbutton>Create account</Createbutton>
    </Main>
  );
}

export default App;

const Title = styled.div`
  font-weight:400px;
  font-size:32px;
  text-align:center
`

const Main = styled.div`
  display:flex;
  flex-direction:column;
  gap:60px;
  padding:60px;
  align-content:center;
  justify-content:center;
  align-items:center;
  background-color: ${colors.gray[1000]};
  width: 411px;
  height:731px;
  font-family:
`

const Form = styled.form`
  display:flex;
  flex-direction: column;
  align-content:center;
  justify-content:center;
`

const Input = styled.input`
  weight: 213px;
  border-radius:4px;
  padding: 4px 8px;
  box-shadow: 2px 2px 0px 0px #00000040;
  border:none
`

const Button= styled.button`
  width: 80px;
  height: 36px;
  border-radius: 4px;
  border:none;
  background-color:${colors.blue[50]};
  color:white;
  justify-content:center;
`

const Createbutton = styled.div`
  color:${colors.blue[50]};
  font-size:16px;
  font-weight:700;
`