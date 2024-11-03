import App from "@/App";
import MainLayout from "@/components/layout/MainLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import Dashboard from "@/Dashboard";
import About from "@/pages/About";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import SignUpSuccess from "@/pages/SignUpSuccess";
import { createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "./admin.routes";
import { userRoutes } from "./user.routes";
import PaymentSuccess from "@/pages/PaymentSuccess";
import AdvancePaymentFailure from "@/pages/AdvancePaymentFailure";
import PaymentFailure from "@/pages/PaymentFailure";
import ErrorPage from "@/pages/ErrorPage";
import BikeDetail from "@/pages/dashboard/BikeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/bikes/:bikeId",
        element: <BikeDetail />,
      },
    ],
  },
  {
    path: "/dashboard/user",
    element: (
      <ProtectedRoute role="user">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: userRoutes,
  },
  {
    path: "/dashboard/admin",
    element: (
      <ProtectedRoute role="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: adminRoutes,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "sign-up-success",
    element: <SignUpSuccess />,
  },
  {
    path: "payment-success/:transactionId",
    element: <PaymentSuccess />,
  },
  {
    path: "advance-payment-failure",
    element: <AdvancePaymentFailure />,
  },
  {
    path: "payment-failure",
    element: <PaymentFailure />,
  },
]);

export default router;
