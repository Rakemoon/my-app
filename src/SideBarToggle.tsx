import React, { useState } from 'react';

function SideBarToggle(): JSX.Element {
    const [isActive, setState] = useState(false);
    return (
        <i
            className={
                isActive
                    ? 'bi mobile-nav-toggle d-xl-none bi-x'
                    : 'bi mobile-nav-toggle d-xl-none bi-list'
            }
            onClick={() => {
                setState(!isActive);
                document.body.classList.toggle('mobile-nav-active');
            }}
        />
    );
}

export default SideBarToggle;
