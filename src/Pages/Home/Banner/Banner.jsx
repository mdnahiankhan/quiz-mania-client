import React from 'react';
import image from '../../../Assets/Blog-Cover-Guidlines.png'
const Banner = () => {
    return (
        <div className='mt-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={image} className="w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Get ready to play quez.</h1>
                        <p className="py-6">If you want to improve your knowledge to practice quiz and know more you have come to right place.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;