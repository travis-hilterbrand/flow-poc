import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainView } from "./components/MainView";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <MainView />
    </QueryClientProvider>
  );
}

export default App;
