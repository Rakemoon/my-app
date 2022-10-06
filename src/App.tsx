import React from 'react';
import { CSSProperties } from 'react';
import './App.css';
//@ts-ignore 7016
//@ts-ignore 2559
import { stripIndents } from 'common-tags';

const userProfile = {
    name: 'Rakemoon',
    realName: 'Adzikri Fauzi Shiddiq',
    myAvatar: 'https://avatars.githubusercontent.com/u/39423103',
    socials: {
        github: {
            link: 'https://github.com/Rakemoon',
            icon: 'fab fa-github',
        },
        mail: {
            link: 'mailto:rakemoonkuzmin@gmail.com',
            icon: 'far fa-envelope',
        },
        facebook: {
            link: 'https://www.facebook.com/adzikri.fauzi.7',
            icon: 'fab fa-facebook',
        },
    },
    bio: stripIndents`
        A fresh graduate person who learn react for fun,
        really love complicated things and some virtues.
    `,
};

function getSocial(socials: typeof userProfile.socials) {
    const keys = Object.keys(socials) as Array<keyof typeof socials>;
    return keys.map((val) => (
        <a
            href={socials[val].link}
            target="_blank"
            className="button text-white waves-effect font-weight-bolder mx-4"
            style={{ fontSize: '3rem' } as CSSProperties}
        >
            <i className={socials[val].icon} />
        </a>
    ));
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="animated zoomIn">
                    <img
                        src={userProfile.myAvatar}
                        className="App-avatar rounded-circle"
                    />
                    <h1 className="text-center text-white font-weight-bold my-1">
                        {userProfile.name}
                    </h1>
                    <h5 className="text-center text-white font-weight-semi-bold my-1">
                        ({userProfile.realName})
                    </h5>
                    <p className="text-white justify my-3">{userProfile.bio}</p>
                    <div
                        className="row d-flex justify-content-center my-5"
                        role="group"
                    >
                        {getSocial(userProfile.socials)}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
