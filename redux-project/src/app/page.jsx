"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import { useAppSelector } from "./redux/store";
import { useDispatch } from "react-redux";
import { fetchStocks } from "./redux/features/stocksSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { stocksData, hasError, isLoading } = useAppSelector(
    (state) => state.stocksData
  );
  // const metaData = stocksData["Time Series (Daily)"];
  const metaData = stocksData["Time Series (Daily)"] || {};

  console.log("stocks data 2", stocksData);

  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  if (hasError) {
    return <div>Error fetching data</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <ul>
            {stocksData &&
              Object.entries(metaData).map(([key, value]) => (
                <li style={{ color: "white" }} key={key}>
                  <strong>{key}:</strong> {JSON.stringify(value)}
                </li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
