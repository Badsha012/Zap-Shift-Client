import React from 'react';
import Hero from '../../../Component/HomeLayout/Hero';
import Work from '../../../Component/HomeLayout/Work';

import OurService from '../../../Component/HomeLayout/OurService';
import Teams from '../../../Component/HomeLayout/Teams';
import LivePercel from '../../../Component/HomeLayout/LivePercel';

const Home = () => {
    return (
        <div className='py-10'>
            <Hero></Hero>
            <Work></Work>
            <OurService></OurService>
            <Teams></Teams>
            <LivePercel></LivePercel>
        </div>
    );
};

export default Home;