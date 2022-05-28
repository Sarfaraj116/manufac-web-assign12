import React from 'react';
import image from '../../Images/images.jpg3.jpg'
import image1 from '../../Images/download.jpg'
import image2 from '../../Images/images (1).png'

const Review = () => {
    return (
        <div>
            <h2 className='text-center text-red-600 font-bold text-2xl mb-5'>Our customer review</h2>
            <div className='card bg-blue-100 shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                <div class="card-body">
                    <h2 class="card-title"> </h2>
                    <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                        <div class="">
                            <img src={image} alt="" />
                        </div>
                    </section>
                </div>
                <div class="card-body">
                    <h2 class="card-title"> </h2>
                    <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                        <div class="">
                            <img src={image1} alt="" />
                        </div>
                    </section>
                </div>
                <div class="card-body">
                    <h2 class="card-title"> </h2>
                    <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                        <div class="">
                            <img src={image2} alt="" />
                        </div>
                    </section>
                </div>
                {/* <AddCustomerReview></AddCustomerReview> */}

                
            </div>
        </div>
    );
}
export default Review;