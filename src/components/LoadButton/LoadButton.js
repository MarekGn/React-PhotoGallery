import React from 'react';

import './styles.css';

function LoadButton({children, loading, ...props}) {
    return (
        <button className="button" disabled={loading} {...props}>
            {loading ? 'Loading...' : children}
        </button>
    );
}

export default LoadButton;
