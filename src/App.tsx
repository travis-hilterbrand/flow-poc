import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactFlowProvider } from "@xyflow/react";
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
      <ReactFlowProvider>
        <CssBaseline />
        <MainView />
      </ReactFlowProvider>
    </QueryClientProvider>
  );
}

export default App;
