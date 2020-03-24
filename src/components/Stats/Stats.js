import React from 'react';

import './styles.css';

const Stats = ({ stats }) => {
    if (!stats) {
        // loading not yet started
        return <div className="stats">Loading...</div>;
    }
    return (
        <div className="stats">
            {stats.error && '🤯 Error!'}
            {stats.isLoading && '🙄 Loading...'}
            {stats.downloads !== null && `🤘 ${stats.downloads}`}
        </div>
    );
};

export default Stats;
