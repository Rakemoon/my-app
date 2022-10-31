import React, { MutableRefObject, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profile from './profile.json';

function Highlights(): JSX.Element {
    const el: MutableRefObject<null | HTMLSpanElement> = useRef(null);
    const typed: MutableRefObject<null | Typed> = useRef(null);
    useEffect(() => {
        typed.current = new Typed(el.current!, {
            strings: profile.highlights,
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            smartBackspace: true,
        });

        return () => typed.current!.destroy();
    });
    return <span ref={el} />;
}

export default Highlights;
