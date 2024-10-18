import { useState } from 'react';
import { Container, Title, Form, Input, Button, ErrorMessage } from './style'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = () => {

    if (!email || !password) {
      setError('Por favor, preencha o email e a senha.'); 
    }
    if (email === 'a' && password === '1') {
      navigate('/body'); 
      setError(''); 
    } else {
      setError('Usuário ou senha incorretos'); 
    }
  };

  return (
    <Container>
      <Title>HACKAWEEN</Title>
      <Form>
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button onClick={handleLogin}>Login</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>} 
      </Form>
    </Container>
  );
}

export default Login;
