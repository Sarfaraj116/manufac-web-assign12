
import React from 'react';
import './BusinessSummary.css'
const BusinessSummary = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-3xl text-blue-700 font-bold mb-3 text-center'> Business Summary</h2>
            <div class=" justify-between card lg:card-side shadow-3xl mb-5">
                <div class="card-body">

                    <h2 class="text-center text-xl font-bold text-indigo-800"> Customer Review</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div class="rating gap-1 bg-red-400 mt-10">
                            <input type="radio" name="rating-3" class="mask mask-star-2 bg-red-600" />
                            <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-600" checked />
                            <input type="radio" name="rating-3" class="mask mask-star-2 bg-yellow-600" />
                            <input type="radio" name="rating-3" class="mask mask-star-2 bg-lime-600" />
                            <div>
                            <p className='text-3xl text-red-500 font-bold ml-3'>100+</p>
                            <p className='text-3xl text-blue-700 font-bold ml-3'>Countries</p>
                            </div>
                        </div>
                        <div>
                            <div class="rating gap-1 mt-10">
                                <input type="radio" name="rating-3" class="mask mask-star-2 bg-red-600" />
                                <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-600" checked />
                                <input type="radio" name="rating-3" class="mask mask-star-2 bg-yellow-600" />
                                <input type="radio" name="rating-3" class="mask mask-star-2 bg-lime-600" />
                                <input type="radio" name="rating-3" class="mask mask-star-2 bg-red-600" />
                            </div>
                            <p className='text-3xl text-red-500 font-bold ml-3 mt-8'>120M+</p>
                            <p className='text-3xl text-blue-700 font-bold ml-3'>120M+ Annual revenue</p>
                        </div>
                        <div className='bg-orange-500 '>
                            <div class="rating rating-lg bg-orange-500 mt-10">
                                <input type="radio" name="rating-9" class="rating-hidden" />
                                <input type="radio" name="rating-9" class="mask mask-star-2" />
                                <input type="radio" name="rating-9" class="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" class="mask mask-star-2" />
                                <input type="radio" name="rating-9" class="mask mask-star-2" />
                                <input type="radio" name="rating-9" class="mask mask-star-2" />
                            </div>
                           <div className='bg-orange-500'>
                           <p className='text-3xl text-red-500 font-bold ml-3 mt-5'>4 star</p>
                            <p className='text-3xl text-blue-700 font-bold ml-3'>Our Reatings</p>
                           </div>
                        </div>
                        <div>
                            <div class="rating rating-xs">
                                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-700" checked />
                                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-700" />
                            </div>
                            <div class="rating rating-sm">
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-700" checked />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-700" />
                            </div>
                            <div class="rating rating-md">
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-700" checked />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-700" />
                            </div>
                            <div class="rating rating-lg">
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-700" checked />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-700" />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-700" />
                            </div>
                            <p className='text-3xl text-red-500 font-bold mt-3'>500+</p>
                            <p className='text-3xl text-blue-700 font-bold'>Feedbacks</p>
                        </div>
                    </div>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;