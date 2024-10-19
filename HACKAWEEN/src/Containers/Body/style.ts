import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #f0f0f0; /* Fundo claro da página */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #008000; /* Fundo verde escuro */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra para o cabeçalho */
`;

export const SiteName = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  margin: 0;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #000; /* Texto em preto */
  background-color: #32a852; /* Verde mais claro para o botão */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #28a745; /* Tom levemente mais escuro no hover */
  }
`;
