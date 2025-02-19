import React from "react";
import { useAppSelector } from "../redux/store";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div
      style={{
        background: "#000000",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.6)",
      }}
    >
      <p style={{ fontWeight: "bold", color: "#333" }}>Date: {label}</p>
      <p style={{ color: "#8884d8" }}>Close: ${payload[0].value.toFixed(2)}</p>
      <p style={{ color: "#fb8b23" }}>Volume: {payload[1].value.toFixed(2)}M</p>
    </div>
  );
};

const StockBarChart = () => {
  const { stocksData, isLoading, hasError } = useAppSelector(
    (state) => state.stocksData
  );
  const metaData = stocksData["Time Series (Daily)"];

  if (!metaData) {
    return <p style={{ color: "white" }}>No stock data available</p>;
  }

  if (hasError) {
    return <div>Error fetching data</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const chartData = Object.entries(metaData)
    .slice(0, 30)
    .map(([date, values]) => ({
      name: date,
      value: parseFloat(values["1. open"]),
      high: parseFloat(values["2. high"]),
      low: parseFloat(values["3. low"]),
      close: parseFloat(values["4. close"]),
      volume: parseInt(values["5. volume"]) / 1000000,
    }))
    .reverse();

  return (
    <ResponsiveContainer width={900} height={400}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="close" fill="#8884d8" />
        <Bar dataKey="volume" fill="#fb8b23" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StockBarChart;
