import React, { useState } from 'react';
import MaterialTable from 'material-table';
import './CategoryBudgetTable.scss';
import {
  TableContainer,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Table,
} from '@material-ui/core';

const CategoryBudgetTable = () => {
  const [state, setState] = useState({
    columns: [
      { title: 'Category Spendings', field: 'categorySpending' },
      { title: 'Amount', field: 'amount', type: 'number' },
    ],
    data: [
      {
        categorySpending: 'Rent or mortgage payments',
        amount: 1000,
      },
    ],
  });

  const calculateTotalAmount = () => {
    let total = 0;
    state.data.forEach(
      (eachCategoryAmount) => (total += Number(eachCategoryAmount.amount) || 0)
    );
    return total;
  };

  return (
    <div className="CategoryBudgetTable">
      <TableContainer component={Paper}>
        <MaterialTable
          title={'Expense calculator for each category'}
          columns={state.columns}
          data={state.data}
          options={{
            search: false,
            padding: 'dense',
            paging: false,
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Total:</TableCell>
              <TableCell>{`$${calculateTotalAmount()}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CategoryBudgetTable;
