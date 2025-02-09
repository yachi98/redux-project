"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import { useAppSelector } from "./redux/store";
import { useDispatch } from "react-redux";
import { fetchStocks } from "./redux/features/stocksSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { stocksData } = useAppSelector((state) => state.stocksData);
  const metaData = stocksData["Meta Data"];
  console.log(stocksData);

  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <ul>
            {metaData &&
              Object.entries(metaData).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
