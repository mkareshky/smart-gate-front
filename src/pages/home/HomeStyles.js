import styled from 'styled-components';
import heroImage from '../../images/hero.png';

export const HeroSection = styled.section`
  background-image: url('${heroImage}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
`;

export const Button = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  &:hover {
    background-color: #218838;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  max-width: 1500px;
  margin: auto;
  margin-top: 80px;
  gap: 70px; /* Add gap to create space between content and image */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 20px;
`;

export const ContentSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 20px;
  color: #555;
  font-weight: 400;
`;

export const Highlight = styled.p`
  color: #28a745;
  font-weight: 700;
  margin: 0;
  font-size: 1.2rem;
`;

export const ContactLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 2px solid black;
  &:hover {
    color: #28a745;
    border-bottom-color: #28a745;
  }
`;

export const ContentImage = styled.img`
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;
