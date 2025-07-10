import React from 'react';

import NavBar from '../Navbar';
import Hero from './Hero';
import IntroAbout from './IntroAbout';
import Footer from '../Footer';


function HomePage() {
    return ( 
        <>
            <NavBar />
            <Hero />
            <IntroAbout />
            <Footer />
        </>
     );
}

export default HomePage;