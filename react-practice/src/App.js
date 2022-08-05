import Table2 from "./components/Table2";
import Table1 from "./components/Table1";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => getData(), []);

  const getData = () => {
    fetch("https://api.covidtracking.com/v1/us/daily.json")
      .then((data) => data.json())
      .then((results) => {
        for (const result of results) {
          const { date } = result;
          const year = date.toString().slice(0, 4);
          const month = date.toString().slice(4, 6);
          const day = date.toString().slice(6, 8);

          const newDate = year + "-" + month + "-" + day;
          result.newDate = newDate;
        }

        setData(results);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* <Table1 data={data} /> */}
      <Table2 data={data} />
    </div>
  );
}

export default App;
