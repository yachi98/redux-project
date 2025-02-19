"use client";

import { useAppSelector } from "../../redux/store";

const StockDataGraph = () => {
  const { stocksData, hasError, isLoading } = useAppSelector(
    (state) => state.stocksData
  );

  if (hasError) {
    return <div>Error fetching data</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const metaData = stocksData["Time Series (Daily)"] || {};
  return (
    <div>
      {stocksData &&
        Object.entries(metaData).map(([key, value]) => (
          <li style={{ color: "white" }} key={key}>
            <strong>{key}:</strong> {JSON.stringify(value)}
          </li>
        ))}
    </div>
  );
};

export default StockDataGraph;
