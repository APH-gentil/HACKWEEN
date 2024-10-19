import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, SiteName, Button } from './style';  // Importa os novos estilos

function Body() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <SiteName>GreenScapes</SiteName>
        <Button onClick={() => navigate('/login')}>Login</Button>
      </Header>
    </Container>
  );
}

export default Body;
