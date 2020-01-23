import React from 'react';

const withClassFun = (WrappedComponent, classes) => {
    return props => (
    <div className={classes}>
        <WrappedComponent {...props} />
    </div>);
}

export default withClassFun;
    