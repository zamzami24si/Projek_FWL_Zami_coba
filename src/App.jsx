import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy Load Pages - Main Dashboard
const Dashboard = React.lazy(() => import("./pages/main/Dashboard"));
const Products = React.lazy(() => import("./pages/main/Products"));
const ProductDetail = React.lazy(() => import("./pages/main/ProductDetail"));
const Orders = React.lazy(() => import("./pages/main/Orders"));

// Halaman Baru Sesuai Sidebar Coffee & Bakery
const Inventory = React.lazy(() => import("./pages/main/Inventory"));
const Analytics = React.lazy(() => import("./pages/main/Analytics"));
const Settings = React.lazy(() => import("./pages/main/Settings"));

// HALAMAN BARU UNTUK PRAKTIKUM COMPONENTS 👇
const Components = React.lazy(() => import("./pages/main/Components"));

// Fallback & Error Pages
const NotFound = React.lazy(() => import("./pages/main/NotFound"));

// Lazy Load Pages - Auth
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// Layouts & Global Components
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Loading = React.lazy(() => import("./components/Loading"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* MAIN APP SYSTEM */}
        <Route element={<MainLayout />}>
          {/* Dashboard Utama */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Fitur Manajemen Produk */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          
          {/* Fitur Operasional Toko */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />

          {/* RUTE HALAMAN COMPONENTS BARU DI SINI 👇 */}
          <Route path="/components" element={<Components />} />

          {/* Rute Simulasi Error HTTP */}
          <Route path="/error-400" element={<NotFound code="400" message="Bad Request" />} />
          <Route path="/error-401" element={<NotFound code="401" message="Unauthorized" />} />
          <Route path="/error-403" element={<NotFound code="403" message="Forbidden" />} />
        </Route>

        {/* AUTHENTICATION SYSTEM */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* GLOBAL 404 NOT FOUND */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;