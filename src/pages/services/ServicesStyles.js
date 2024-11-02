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
  padding: 60px 30px; /* Increased padding for more space */
  background-color: #f7f9f9;
  text-align: center;
`;

export const SectionTitle = styled.div`
  margin-bottom: 50px; /* Increased margin for spacing */

  span {
    color: #28a745;
    font-weight: 700;
    font-size: 1.2rem; /* Made the subtitle larger */
  }

  h2 {
    font-size: 3rem; /* Made the title larger */
    font-weight: 700;
    margin-top: 10px;
    color: black;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 30px; /* Increased gap between cards */
  justify-content: center;
  flex-wrap: wrap;
`;

export const ServiceCard = styled.div`
  background-color: white;
  border-radius: 10px; /* Slightly increased border radius */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Made the shadow more pronounced */
  overflow: hidden;
  width: 350px; /* Increased card width */
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px; /* Increased image height */
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem; /* Made the title larger */
  font-weight: 700;
  margin: 20px;
  text-align: left;
  color: black;
`;

export const CardDescription = styled.p`
  font-size: 1rem; /* Made the description larger */
  color: #555;
  text-align: left;
  margin: 0 20px 25px 20px; /* Adjusted margins for better spacing */
  line-height: 1.6; /* Increased line height for better readability */
`;
