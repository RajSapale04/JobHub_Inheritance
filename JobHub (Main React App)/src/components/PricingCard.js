import { useState } from 'react';

const PricingCard = ({ title, monthlyPrice, annuallyPrice, storage, usersAllowed, sendLimit }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h3 className="monthly">&#8377;{monthlyPrice}</h3>
      <h4 className="annually">&#8377;{annuallyPrice}</h4>
      <hr />
      <p>{storage} Storage</p>
      <hr />
      <p>{usersAllowed} Users Allowed</p>
      <hr />
      <p>Send up to {sendLimit}</p>
      <hr />
      <button>Learn More</button>
    </div>
  );
};

export default PricingCard;
