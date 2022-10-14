import React, { CSSProperties } from 'react';

type ProgressData = {
    name: string;
    completed: number;
    margin: string;
};

function ProgressBar(datas: ProgressData[]) {
    const mappedProgress = datas.map(({ name, completed, margin }) => (
        <div className="my-5">
            <h4
                className="text-white font-weight-bold progress-label"
                style={{ marginRight: margin } as CSSProperties}
            >
                {name}
            </h4>
            <div className="progress">
                <div
                    className="progress-bar progress-bar-color-me animated slideInLeft delay-1s slower"
                    aria-valuenow={completed}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={
                        {
                            width: `${completed}%`,
                        } as CSSProperties
                    }
                />
            </div>
        </div>
    ));
    return <div className="animated fadeInUp">{mappedProgress}</div>;
}

export default ProgressBar;
