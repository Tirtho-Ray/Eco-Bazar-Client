import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Container } from "../components/ui/reUsable/Container";
import Header from "../components/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchHeader from "../components/header/SearchHeader";
import { Outlet, useLocation } from "react-router";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const queryClient = new QueryClient();
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div>
        <Toaster position="top-right" reverseOrder={false} />
      <QueryClientProvider client={queryClient}>
        <Header />

        {!isHome && <SearchHeader />}

        <Container>
          <Navbar />
        </Container>

        <Outlet />
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default MainLayout;
