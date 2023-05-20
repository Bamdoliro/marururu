"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface PropsType {
  children: ReactNode;
}

const Provider = ({ children }: PropsType) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
