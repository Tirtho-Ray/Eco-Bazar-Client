import React from 'react';
import Banner from '../../components/ui/HomeBanner/Banner';
import InfoHome from './InfoHome';
import { Container } from '../../components/ui/reUsable/Container';

const MainHomePage = () => {
    return (
        <div className='font-poppins'>
            <Banner />
            <Container>'

            <InfoHome />
            </Container>
        </div>
    );
};

export default MainHomePage;