import React from 'react';
import AOS from 'aos';

import SideBarToggle from './SideBarToggle';
import Header from './Header';
import Hero from './Hero';
import Main from './Main';

import 'aos/dist/aos.css';
import './App.css';

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
                <Main />
            </>
        );
    }
}

export default App;
