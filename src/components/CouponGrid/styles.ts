import styled from "styled-components";

export const  GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 16px; /* Espaço entre os cartões */
padding: 16px; /* Margem em relação aos extremos da tela */
margin: 0 auto;
max-width: 1200px; /* Limita a largura máxima para evitar que fique muito esticado em telas grandes */
box-sizing: border-box;
`;