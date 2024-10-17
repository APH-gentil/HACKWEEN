import { Container, Title, Form, Input, Button } from './style';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/body'); 
  };

  return (
    <Container>
      <Title>HACKAWEEN</Title>
      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </Container>
  );
}

export default Login;
