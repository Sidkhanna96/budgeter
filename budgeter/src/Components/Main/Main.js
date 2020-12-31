import React from 'react';
import HighLevelBudget from './../HighLevelBudget/HighLevelBudget';
import CategoryBudgetTable from './../CategoryBudgetTable/CategoryBudgetTable';
import CategoryTreeView from './../CategoryTreeView/CategoryTreeView';
import ToolToUse from './../ToolToUse/ToolToUse';
import MonthlyIncomeCalculator from './../MonthlyIncomeCalculator/MonthlyIncomeCalculator';
import logo from './../../Images/logo.svg';

import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <div className="MainContent">
        <h1>Confused about how to allocate your monthly income ?</h1>
        <p>
          It can be hard to figure out how much money you should save, spend on
          rent or buy things that you want. The tools below can help you guide
          how much to allocate your monthly income for different categories and
          budget your expenses.
        </p>
        <p>
          The 50/30/20 rule was popularized by Elizabeth Warren and it is a
          simple budgeting technique. it allocates 50% of your monthly income on
          Necessities, 30% on wants and 20% on Savings & Debts. Use the
          calculator below to calculate the values.
        </p>
        <HighLevelBudget />
        <p>
          The above values should give you some guideline on how much you should
          spend on each category. Below are some common expenses within each
          category that you may consider (sub-categories).
        </p>
        <CategoryTreeView />
        <p>
          Using the tool below, for each category enter the sub-categories and
          their expenses that you spend your monthly income on. The tool below
          will give you the total, which in turn would highlight how much you're
          spending in each category.
        </p>
        <CategoryBudgetTable />
        <ToolToUse />
        {/* <img src={logo} /> */}
      </div>
    </div>
  );
};

export default Main;
