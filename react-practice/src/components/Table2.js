import React from "react";

const Table2 = ({ data }) => {
  const newData = data
    .filter(
      (covidCase) =>
        covidCase.newDate >= "2021-01-01" && covidCase.newDate <= "2021-01-31"
    )
    .sort((a, b) => a.date - b.date);
  return (
    <>
      <table>
        <thead>
          <tr>
            {newData.map((covidCase, index) => {
              return <td key={index}>{covidCase.newDate}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {newData.map((covidCase, index) => {
              return <td key={index}>{covidCase.positiveIncrease}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table2;
