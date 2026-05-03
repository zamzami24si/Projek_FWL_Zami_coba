import { Routes, Route } from "react-router-dom";
//import Dashboard from "./pages/main/Dashboard";
//import Orders from "./pages/main/Orders";
//import Customers from "./pages/main/Customers";
//import NotFound from "./pages/main/NotFound";
//import { MainLayout } from "./layouts/MainLayout";
//import AuthLayout from "./layouts/AuthLayout";
//import Login from "./pages/auth/Login";
//import Register from "./pages/auth/Register";
//import Forgot from "./pages/auth/Forgot";
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./pages/main/Dashboard"));
const Orders = React.lazy(() => import("./pages/main/Orders"));
const Customers = React.lazy(() => import("./pages/main/Customers"));
const NotFound = React.lazy(() => import("./pages/main/NotFound"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

const Loading = React.lazy(() => import("./components/Loading"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* MAIN APP */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          <Route path="/error-400" element={<NotFound code="400" message="Bad Request" />} />
          <Route path="/error-401" element={<NotFound code="401" message="Unauthorized" />} />
          <Route path="/error-403" element={<NotFound code="403" message="Forbidden" />} />
        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;