import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Services Section Styles
export const ServicesSection = styled.section`
  padding: 50px 20px;
  background-color: #f7f9f9;
  text-align: center;
`;

export const SectionTitle = styled.div`
  margin-bottom: 40px;

  span {
    color: #28a745;
    font-weight: 700;
    font-size: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 10px;
    color: black;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ServiceCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;


export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 15px;
  text-align: left;
  color: black;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  text-align: left;
  margin: 0 15px 20px 15px;
  line-height: 1.5;
`;

