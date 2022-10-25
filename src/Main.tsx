import React from 'react';
import About from './sections/About';

class Main extends React.Component {
    render(): JSX.Element {
        return (
            <div id="main">
                <About />
            </div>
        );
    }
}

export default Main;
