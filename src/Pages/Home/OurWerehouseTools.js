import React from 'react';
import image1 from '../../Images/w-1.jpg';
import image2 from '../../Images/w-2.jpg';
import image3 from '../../Images/w-3.jpg';

const OurWerehouseTools = () => {
    return (
        <div>
            <h2 className='text-3xl text-blue-700 font-bold mb-5 text-center'> Manufacture Tools Werehouse</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div class="card w-96 shadow-2xl">
                    <figure><img src={image1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-red-300'>This is our Large part of refrigarator tools.It was made by Bangladesh.It is very cheap.</p>
                    </div>
                </div>
                <div class="card w-96 shadow-2xl">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-indigo-400'>This is our Large part of refrigarator tools.It was made by Bangladesh.It is not matchinary parts.</p>
                    </div>
                </div>
                <div class="card w-96 shadow-2xl">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='font-bold text-lg text-red-300'>This is our expensive part of refrigarator tools.It was made by Malayshia.It is very good products.</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default OurWerehouseTools;