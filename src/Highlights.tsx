import React from 'react';
import Typed, { TypedOptions } from 'typed.js';
import profile from './profile.json';

class Highlights extends React.Component {
    private typed: Typed | null = null;

    private el: HTMLSpanElement | null = null;

    componentDidMount(): void {
        const options: TypedOptions = {
            strings: profile.highlights,
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            smartBackspace: true,
        };

        this.typed = new Typed(this.el!, options);
    }

    componentWillUnmount(): void {
        this.typed!.destroy();
    }

    render(): JSX.Element {
        return <span ref={(el) => (this.el = el)} />;
    }
}

export default Highlights;
