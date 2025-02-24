import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import StockBarChart from "../StockBarChart";
import { fetchStocks } from "@/app/redux/features/stocksSlice";
// import StockDataGraph from "./StockDataGraph";

describe("StockBarChart Component", () => {
  store.dispatch(fetchStocks());

  it("shows loading state initially", () => {
    render(
      <Provider store={store}>
        <StockBarChart />
      </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("fetches and displays stock data", async () => {
    render(
      <Provider store={store}>
        <StockBarChart />
      </Provider>
    );

    // await waitFor(() =>
    //   expect(screen.getByText(/Loading/i)).toBeInTheDocument()
    // );

    await waitFor(() =>
      expect(screen.getByText(/2025-01-14/i)).toBeInTheDocument()
    );

    // expect(
    //   screen.getByText(/No stock data available/i)
    // ).not.toBeInTheDocument();
  });

  it("shows error message if fetching fails", async () => {
    render(
      <Provider store={store}>
        <StockBarChart />
      </Provider>
    );

    await waitFor(() =>
      expect(screen.getByText(/Error fetching data/i)).toBeInTheDocument()
    );
  });
});
