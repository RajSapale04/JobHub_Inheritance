import { useState } from 'react';
import PricingCard from './PricingCard';

const PricingContainer = () => {
  return (
    <div className="container">
      <h1>Our Pricing</h1>
      <div className="selector">
        <h2>Annually</h2>
        <div id="selector-bar">
          <div id="selector-ball"></div>
        </div>
        <h2>Monthly</h2>
      </div>
      <div id="cards">
        <PricingCard
          title="Basic"
          monthlyPrice={1599}
          annuallyPrice={11999}
          storage="500 GB"
          usersAllowed={2}
          sendLimit="3 GB"
        />
        <PricingCard
          title="Professional"
          monthlyPrice={2199}
          annuallyPrice={16999}
          storage="1 TB"
          usersAllowed={5}
          sendLimit="10 GB"
        />
        <PricingCard
          title="Master"
          monthlyPrice={3599}
          annuallyPrice={24999}
          storage="2 TB"
          usersAllowed={10}
          sendLimit="20 GB"
        />
      </div>
    </div>
  );
};

export default PricingContainer;
