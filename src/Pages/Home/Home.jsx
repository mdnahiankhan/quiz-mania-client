import React from 'react';
import Banner from './Banner/Banner';
import Quez from '../Quez/Quez';

const Home = () => {
    return (
        <div className='mx-5 space-y-6'>
            <Banner></Banner>
            <Quez></Quez>
        </div>
    );
};

export default Home;