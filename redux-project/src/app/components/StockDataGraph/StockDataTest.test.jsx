import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store"; // Import actual Redux store
import StockBarChart from "../StockBarChart";

describe("StockBarChart Component", () => {
  it("fetches and displays stock data", async () => {
    render(
      <Provider store={store}>
        <StockBarChart />
      </Provider>
    );

    await waitFor(() =>
      expect(screen.getByText(/2024-02-01/i)).toBeInTheDocument()
    );

    expect(
      screen.getByText(/No stock data available/i)
    ).not.toBeInTheDocument();
  });

  it("shows loading state initially", () => {
    render(
      <Provider store={store}>
        <StockBarChart />
      </Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
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
