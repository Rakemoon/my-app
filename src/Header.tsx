import React from 'react';
import profile from './profile.json';

class Header extends React.Component {
    render() {
        return (
            <header id="header" data-aos="slide-right">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img
                            src="/profile-img.jpg"
                            className="img-fluid rounded-circle"
                        />
                        <h1 className="text-light">
                            <a href="/">{profile.name}</a>
                        </h1>
                        <div className="social-links mt-3 text-center">
                            {[
                                'twitter',
                                'facebook',
                                'instagram',
                                'skype',
                                'linkedin',
                            ].map((social) => (
                                <a href="#" className={social}>
                                    <i className={`bx bxl-${social}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
