import React from 'react';
import './CategoryValue.scss';

const CategoryValue = ({ budgetLabel, monthlyDistribution }) => {
  return (
    <div className="CategoryValue">
      <label>{budgetLabel}</label>
      <div>${monthlyDistribution}</div>
    </div>
  );
};

export default CategoryValue;
