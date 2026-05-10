import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy Load Pages - Main
const Dashboard = React.lazy(() => import("./pages/main/Dashboard"));
const Orders = React.lazy(() => import("./pages/main/Orders"));
const Customers = React.lazy(() => import("./pages/main/Customers"));
const NotFound = React.lazy(() => import("./pages/main/NotFound"));

// 1. TAMBAHKAN INI: Lazy Load untuk List dan Detail Produk
const Products = React.lazy(() => import("./pages/main/Products"));
const ProductDetail = React.lazy(() => import("./pages/main/ProductDetail"));

// Lazy Load Pages - Auth
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// Layouts & Components
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
          
          {/* 2. ROUTE PRODUK: Daftar Produk dan Detail Produk */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* Error Pages */}
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

        {/* 404 NOT FOUND */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;