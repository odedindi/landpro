import React from 'react';

export const WithAuth = (WrappedComponent) => {

    return (props) => {
        const token = localStorage.getItem('token');
        if (token) {
            return <WrappedComponent />;
        } else {
            props.history.push('/login');
            return null;
        };
    };
};