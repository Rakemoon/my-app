import React from 'react';
import profile from '../profile.json';

type ProggressBarData = { name: string; rate: number };
type History = {
    title: string;
    date: string;
    at: string;
    does: string[];
};

function makeProgbar(datas: ProggressBarData[]): JSX.Element[] {
    return datas.map((data) => (
        <div className="progress">
            <span className="skill">
                {data.name} <i className="val">{data.rate}%</i>
            </span>
            <div className="progress-bar-wrap">
                <div
                    className="progress-bar"
                    data-aos="fade-right"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={data.rate}
                    style={{ width: `${data.rate}%` }}
                />
            </div>
        </div>
    ));
}

function makeHistory(datas: History[]): JSX.Element[] {
    return datas.map((data) => {
        const does = data.does.map((x) => <li>{x}</li>);
        return (
            <div className="history">
                <h4>{data.title}</h4>
                <h5>{data.date}</h5>
                <p>
                    <em>{data.at}</em>
                </p>
                {does.length ? <ul>{does}</ul> : <></>}
            </div>
        );
    });
}

function About(): JSX.Element {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                    <p>{profile.about}</p>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="child-title">Skills</h3>
                        {makeProgbar(profile.skills)}
                    </div>
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="child-title">Languages</h3>
                        {makeProgbar(profile.languages)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="child-title">Education</h3>
                        {makeHistory(profile.education)}
                    </div>
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="child-title">Work History</h3>
                        {makeHistory(profile.workHistory)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
