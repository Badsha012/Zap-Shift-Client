import React from 'react';
import Hero from '../../../Component/HomeLayout/Hero';
import Work from '../../../Component/HomeLayout/Work';

import OurService from '../../../Component/HomeLayout/OurService';
import Teams from '../../../Component/HomeLayout/Teams';
import LivePercel from '../../../Component/HomeLayout/LivePercel';
import Customer from '../../../Component/HomeLayout/Customer';

const Home = () => {
    return (
        <div className='py-10'>
            <Hero></Hero>
            <Work></Work>
            <OurService></OurService>
            <Teams></Teams>
            <LivePercel></LivePercel>
            <Customer></Customer>
        </div>
    );
};

export default Home;