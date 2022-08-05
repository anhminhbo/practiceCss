import React from "react";

const Table1 = ({ data }) => {

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Number of positive</td>
            <td>Number of hospitalized cases </td>
          </tr>
        </thead>
        {data.map((covidCase, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{covidCase.newDate}</td>
                <td>{covidCase.negative}</td>
                <td>{covidCase.hospitalized}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Table1;
