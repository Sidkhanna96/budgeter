import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const MonthlyIncomeCalculator = () => {
  const [yearlyIncome, setYearlyIncome] = useState();

  return (
    <div>
      <div>Yearly Income:</div>
      <TextField
        variant="outlined"
        size="small"
        placeholder="30,000"
        onChange={(event) =>
          setYearlyIncome((event.target.value / 12).toFixed(2))
        }
      />
      <span>{yearlyIncome}</span>
    </div>
  );
};

export default MonthlyIncomeCalculator;
