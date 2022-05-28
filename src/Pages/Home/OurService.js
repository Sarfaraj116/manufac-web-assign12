import React from 'react';
import image from '../../Images/service-1.jpg';
import image1 from '../../Images/service-2.jpg';
import image2 from '../../Images/service-3.jpg';


const OurService = () => {
    return (
        <div>
            <h2 className='text-center text-blue-500 font-bold text-4xl mb-5'>Our Service Engineers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                < div class="card shadow-2xl" >
                    <figure class="px-10 pt-10">
                        <img src={image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p>He is one of the best expert person of my company.</p>
                    </div>
                </div >
                <div class="card w-96 shadow-2xl">
                    <figure class="px-10 pt-10">
                        <img src={image1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p>He is very skill to solve compresser problem.</p>
                    </div>
                </div>
                <div class="card w-96 shadow-2xl">
                    <figure class="px-10 pt-10">
                        <img src={image2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p>He is junior enginner of my company.</p>
                    </div>
                </div>
                
            </div >
        </div>
    );
};

export default OurService;