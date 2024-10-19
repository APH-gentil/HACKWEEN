import { useState } from 'react';
import { Container, Title, Form, Input, Button, ErrorMessage } from './style'; 
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState(''); // Novo estado para confirmar a senha
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 

    // Verifica se todos os campos estão preenchidos
    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((user: { email: string }) => user.email === email)) {
      setError('Usuário já existe');
      return;
    }

    // Adiciona o novo usuário ao localStorage
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    // Redireciona para a tela de login
    setError('');
    navigate('/login'); 
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <Form onSubmit={handleRegister}> 
        <Input 
          type="text" 
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
        <Input 
          type="password" 
          placeholder="Confirme a Senha" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <Button type="submit">Cadastrar</Button> 
        {error && <ErrorMessage>{error}</ErrorMessage>} 
      </Form>
    </Container>
  );
}

export default Register;
