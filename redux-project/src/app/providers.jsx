"use client";

import { ReduxProvider } from "./redux/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>{children}</ReduxProvider>
    </QueryClientProvider>
  );
};

export default Providers;
