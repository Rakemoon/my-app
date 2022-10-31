import React from 'react';
import profile from './profile.json';

function Header(): JSX.Element {
    return (
        <header id="header" data-aos="slide-right">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img
                        src="/profile-img.jpg"
                        className="img-fluid rounded-circle"
                    />
                    <h1 className="text-light">
                        <a>{profile.name}</a>
                        <p>({profile.realName})</p>
                    </h1>
                    <div className="social-links mt-3 text-center">
                        {profile.socials.map((social) => (
                            <a href={social.url} className={social.type}>
                                <i className={`bx bxl-${social.type}`} />
                            </a>
                        ))}
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <li>
                            <a href="#hero" className="nav-link scrollto">
                                <i className="bx bx-home" /> <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link scrollto">
                                <i className="bx bx-user" /> <span>About</span>
                            </a>
                        </li>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
