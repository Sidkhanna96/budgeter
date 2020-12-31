import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import CategoryValue from '../CategoryValue/CategoryValue';
import Typography from '@material-ui/core/Typography';
import './HighLevelBudget.scss';

export const calculateBudget = (monthlyIncome, percentage) => {
  return Math.round(monthlyIncome * (percentage / 100) || 0);
};

const HighLevelBudget = () => {
  const [monthlyIncome, setMonthlyIncome] = useState();

  return (
    <div className="HighLevelBudget">
      <div className="HighLevelBudgetHeading">
        <Typography variant="h5">50/30/20 Budget Calculator</Typography>
        <Typography variant="subtitle1" className="TypographySubtitle">
          Calculator to allocate your Monthly Income. Enter you income
          (preferably after-tax) in the field below.
        </Typography>
      </div>
      <div className="HighLevelBudgetMonthlyIncome">
        <p>Monthly Income After Tax:</p>
        <TextField
          variant="outlined"
          size="small"
          placeholder="2,100"
          value={monthlyIncome}
          onChange={(event) => setMonthlyIncome(event.target.value)}
          type="Number"
        />
      </div>
      <p>How much you have for each category:</p>
      <div className="HighLevelBudgetCategory">
        <CategoryValue
          budgetLabel="Necessities:"
          monthlyDistribution={calculateBudget(monthlyIncome, 50)}
        />
        <CategoryValue
          budgetLabel="Wants:"
          monthlyDistribution={calculateBudget(monthlyIncome, 30)}
        />
        <CategoryValue
          budgetLabel="Savings and Debt:"
          monthlyDistribution={calculateBudget(monthlyIncome, 20)}
        />
      </div>
    </div>
  );
};

export default HighLevelBudget;
