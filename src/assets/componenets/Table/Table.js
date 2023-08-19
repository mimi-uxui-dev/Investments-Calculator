import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function Table(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yd) => (
          <tr key={yd.year}>
            <td>{yd.year}</td>
            <td>{formatter.format(yd.savingsEndOfYear)}</td>
            <td>{formatter.format(yd.yearlyInterest)}</td>
            <td>
              {formatter.format(
                yd.savingsEndOfYear -
                  props.initialInvestment -
                  yd.yearlyContribution * yd.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment + yd.yearlyContribution * yd.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
