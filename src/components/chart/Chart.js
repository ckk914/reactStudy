import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  console.log("dataPoints: ", dataPoints);

  //1년치 총액
  const totalValue = dataPoints
    .map((dp) => dp.value)
    .reduce((accum, curr) => accum + curr, 0); //총합 만드는 함수

  console.log("tv= ", totalValue);
  return (
    <div className="chart">
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          currentMonthValue={dp.value}
          totalValue={totalValue}
        />
      ))}
    </div>
  );
};

export default Chart;
