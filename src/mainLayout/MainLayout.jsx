import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import { Container } from '../components/ui/reUsable/Container';
import Header from '../components/header/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const MainLayout = () => {
    const queryClient   =  new QueryClient()
    return (
        <div>
            <QueryClientProvider client={queryClient}>
             <Header />
             <Container >
               <Navbar />
             </Container>
             <Outlet />
             <Footer />
            </QueryClientProvider>
        </div>
    );
};

export default MainLayout;