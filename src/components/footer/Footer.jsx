import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #cccccc; /* Color gris */
  color: #333;
  text-align: center;
  padding: 5px;
  width: 100%;
  margin-top: auto;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>Todos los derechos reservados &copy; 2024</p>
    </FooterContainer>
  );
}

export default Footer;
