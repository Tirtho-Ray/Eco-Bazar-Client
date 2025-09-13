import React from 'react';
import InfoHome from './InfoHome';
import { Container } from '../../components/ui/reUsable/Container';
import Banner from '../../components/ui/Home/Banner';
import FeaturesProduct from './FeaturesProduct';
import TrustBlog from './TrustBlog';
import StatsCards from './StatsCards';

const MainHomePage = () => {
    return (
        <div className='font-poppins'>
            <Banner />
            <Container>'
                <InfoHome />
                <FeaturesProduct />
            </Container>
                <TrustBlog />
                <StatsCards />

        </div>
    );
};

export default MainHomePage;