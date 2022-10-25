import React from 'react';
import Highlights from './Highlights';

class Hero extends React.Component {
    render(): JSX.Element {
        return (
            <section
                id="hero"
                className="d-flex flex-column justify-content-center align-items-center"
            >
                <div className="hero-container text-center" data-aos="fade-in">
                    <img src="/logo128.png" className="img-fluid" />
                    <h1>Rakemoon</h1>
                    <p>
                        I'm <Highlights />
                    </p>
                </div>
            </section>
        );
    }
}

export default Hero;
