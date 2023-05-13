import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    console.log(service);

    const {_id, title} = service;
    console.log(title);
    return (
        <div>
            <h2>Book Service {title} </h2>
        </div>
    );
};

export default Checkout;