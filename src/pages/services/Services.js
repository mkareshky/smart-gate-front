import React from 'react';
import { ServicesSection, SectionTitle, CardContainer, ServiceCard, CardImage, CardTitle, CardDescription } from './ServicesStyles';
import expense from '../../images/expense.jpg';
import financial from '../../images/financial.jpg';
import income from '../../images/income.jpg';

function Services() {
  return (
    <ServicesSection>
      <SectionTitle>
        <span>OUR EXPERT SERVICES</span>
        <h2>Tailored financial solutions</h2>
      </SectionTitle>
      <CardContainer>
        <ServiceCard>
          <CardImage src={income} alt="Income Tracker" />
          <CardTitle>Income tracker &gt;</CardTitle>
          <CardDescription>Monitor and categorize your income streams effortlessly.</CardDescription>
        </ServiceCard>
        <ServiceCard>
          <CardImage src={expense} alt="Expense Manager" />
          <CardTitle>Expense manager &gt;</CardTitle>
          <CardDescription>Efficiently track and manage your expenses with ease.</CardDescription>
        </ServiceCard>
        <ServiceCard>
          <CardImage src={financial} alt="Financial Analytics" />
          <CardTitle>Financial analytics dashboard &gt;</CardTitle>
          <CardDescription>Unlock powerful insights through detailed financial analytics.</CardDescription>
        </ServiceCard>
      </CardContainer>
    </ServicesSection>
  );
}

export default Services;
