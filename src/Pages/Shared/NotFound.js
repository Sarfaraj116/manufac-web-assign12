import React from 'react';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='not-found-container'>
            <h1>Page Not Found</h1>
            <h2>404</h2>
            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                <div class="">
                    <img src="https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg" alt="" />
                </div>
            </section>
        </div>

    );
};

export default NotFound;