import React from 'react';
import AOS from 'aos';

import SideBarToggle from './SideBarToggle';
import Header from './Header';
import Hero from './Hero';

import 'aos/dist/aos.css';
import './App.scss';

class App extends React.Component {
    componentDidMount(): void {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }

    render(): JSX.Element {
        return (
            <>
                <SideBarToggle />
                <Header />
                <Hero />
            </>
        );
    }
}

export default App;
