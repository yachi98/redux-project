"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStocks } from "./redux/features/stocksSlice";
import SearchNav from "./components/SearchNav/SearchNav";
import StockBarChart from "./components/StockBarChart";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <SearchNav />
          <StockBarChart />
        </div>
      </main>
    </div>
  );
}
