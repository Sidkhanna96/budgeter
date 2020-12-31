import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import './CategoryTreeView.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const CategoryTreeView = () => {
  return (
    <div className="CategoryTreeView">
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        className="TreeView"
      >
        <TreeItem nodeId="1" label="Necessities:">
          <ul>
            <li>Rent or mortgage payments</li>
            <li>Food and household supplies</li>
            <li>Utility bills</li>
            <li>Insurance premiums (Auto, Health, medical & life)</li>
            <li>Auto loans and transportation costs</li>
            <li>Cell phone bills</li>
            <li>Essential clothing & shoes </li>
            <li>Minimum credit payments</li>
          </ul>
        </TreeItem>
        <TreeItem nodeId="2" label="Wants:">
          <ul>
            <li>Restaurants & take out meals</li>
            <li>Luxury clothing and shoes</li>
            <li>Gadgets or toys</li>
            <li>Personal Care (Spa, nails, hair etc.)</li>
            <li>Vacations, Travel and Concerts</li>
          </ul>
        </TreeItem>
        <TreeItem nodeId="3" label="Savings And Debt:">
          <ul>
            <li>
              Emergency Fund 3-6 months. (This could be 3-6 months of your
              monthly salary or atleast 3-6 month of Necessity spendings)
            </li>
            <li>
              Debt Obligations
              <ul>
                <li>Credit Card Payments</li>
                <li>Student Loans</li>
              </ul>
            </li>
            <li>Investment in Stocks</li>
          </ul>
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default CategoryTreeView;
