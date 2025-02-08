"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { fetchStocks } from "./redux/features/stocksSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { stocksData } = useAppSelector((state) => state.stocksData);

  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          {Object.values(
            stocksData["MetaData"].map((stock) => <li>{stock}</li>)
          )}
        </div>
      </main>
    </div>
  );
}

{
  /* {stocksData.metadata.symbol.map((stock) => (
            <span key={stock}>{stock.symbol}</span>
          ))} */
}
