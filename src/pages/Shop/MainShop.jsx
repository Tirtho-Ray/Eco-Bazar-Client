import React from 'react';
import ShopBanner from './ShopBanner';
import ShopProduct from './ShopProduct';
import { Container } from '../../components/ui/reUsable/Container';

const MainShop = () => {
    return (
        <div>
            <ShopBanner />
            <Container>
                <ShopProduct />
            </Container>
        </div>
    );
};

export default MainShop;