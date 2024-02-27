// eslint-disable-next-line import/no-unresolved
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 2 * 60 * 1000, // time data is "fresh", i.e. will definitely be cached
    cacheTime: 10 * 60 * 1000, // time until the "stale" data is garbage collected
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/"> Adopt Me! </Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
