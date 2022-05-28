import React from 'react';
import image from '../../Images/images.jpg3.jpg'
import image1 from '../../Images/download.jpg'
import image2 from '../../Images/images (1).png'

const Review = () => {
    return (
        <div>
            <h2 className='text-center text-red-600 font-bold text-2xl mb-5'>Customer reviews</h2>
            <div className='card bg shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                <div class="card-body">
                    <h2 class="card-title">Buyers </h2>
                    <section class="hero container bg-lime-400 max-w-screen-lg mx-auto text-center pb-10">
                        <div class="">
                            <img src={image} alt="" />
                        </div>
                    </section>
                </div>
                <div class="card-body">
                    <h2 class="card-title">Customers </h2>
                    <section class="hero container bg-amber-400 max-w-screen-lg mx-auto text-center pb-10">
                        <div class="">
                            <img src={image1} alt="" />
                        </div>
                    </section>
                </div>
                <div class="card-body">
                    <h2 class="card-title"> People </h2>
                    <section class="hero container bg-purple-400 max-w-screen-lg mx-auto text-center pb-10">
                        <div class="">
                            <img src={image2} alt="" />
                        </div>
                    </section>
                </div>
                

                
            </div>
        </div>
    );
}
export default Review;