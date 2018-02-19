import React from 'react';

import { Link }  from 'react-router-dom';

const NotFound = () => {
    return(
        <div role="main" className="container">
            <p>
                Don't know how you got here...
            </p>
            <Link to="/">Return Home</Link>
        </div>
    )
}


export default NotFound;