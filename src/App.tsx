import React, { useEffect } from 'react';
import AOS from 'aos';

import SideBarToggle from './SideBarToggle';
import Header from './Header';
import Hero from './Hero';
import Main from './Main';

import 'aos/dist/aos.css';
import './App.css';

function App(): JSX.Element {
    useEffect((): void => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    });
    return (
        <>
            <SideBarToggle />
            <Header />
            <Hero />
            <Main />
        </>
    );
}

export default App;
