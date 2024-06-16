import React from "react";
import Chart from "./Chart";

const ExpenseChart = ({ expenses }) => {
  console.log(expenses);
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  expenses.forEach((exp) => {
    //지출액을 추출해서 chartDataPoints 배열에 해당 월에
    // value에 합산
    
    //지출액
    const expensePrice = exp.price;
    const expenseMonth = exp.date.getMonth(); //원래 1이 빠져있음!
    chartDataPoints[expenseMonth].value += expensePrice;
  });
  console.log("cdp : ", chartDataPoints);

    
    
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
