import React from 'react';
import { HeroSection, HeroContent, Title, Subtitle, Button, ContentSection, ContentTitle, ContentSubtitle, Highlight, ContentImage, ContactLink } from './HomeStyles';
import finanaImage from '../../images/hub.jpg';

function Home() {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <Title>SmartGate</Title>
          <Subtitle>Track your income and expenses with ease using SmartGate</Subtitle>
          <Button>View Services</Button>
        </HeroContent>
      </HeroSection>
      <ContentSection>
        <div>
          <Highlight>Your Financial Hub</Highlight>
          <ContentTitle>Track and optimize your finances</ContentTitle>
          <ContentSubtitle>
            SmartGate offers a professional business dashboard that tracks and displays your income and expenses, providing insightful analytics for effective financial management. Based in Milan, we empower businesses to gain a clearer understanding of their financial health and make informed decisions. Experience the simplicity and efficiency of our tools, designed to enhance your financial oversight and drive growth.
          </ContentSubtitle>
          <ContactLink href="#">Get in touch</ContactLink>
        </div>
        <ContentImage src={finanaImage} alt="Financial Analysis" />
      </ContentSection>
    </>
  );
}

export default Home;
