import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { router } from "./Routes/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className="bg-gray-100">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
      
    </AuthProvider>
  </React.StrictMode>
);
