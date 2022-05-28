import React from 'react';
import './MyProtfolio.css';
const MyProtfolio = () => {
    return (
        <div className='container-me'>
            <h1>Name: Sarfaraj Shaikat</h1>
            <h1>Email: sarfarajshaikat116@outlook.com</h1>
            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                <div class="">
                    <img src="" height="550" alt='' />
                </div>
                <div></div>
            </section>
            <h3 className='background'>I am Sarfaraj Shaikat. I am a Graduate. My majhor is Computer Science and Engineering. I want to reach my goal by working hard to try my best. Now i learn web development.I think it is related to my major for this reason with in next 3 months i want to be a remote job of junior web development.And it will help me problem solveing.In this way one time i will be a senior programmer.</h3>
            <div className='flex justify-end items-center'>
                <div className='mt-10'>
                    <h1>My Skills</h1>
                    <ul className='skill'>
                        <li>HTML</li>
                        <li>Raw CSS</li>
                        <li>Teilwind,Bootstrap</li>
                        <li>React</li>
                        <li>E6 of Javascript</li>
                        <li>Node Js</li>
                        <li>Mongodb</li>
                        <li>Git</li>
                        <li>Netlify</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div>
                    <p className='Link mt-9 mb-5 text-xl'>My projects</p>

                    <a className='Links' href="https://fir-manage-assignment.firebaseapp.com/" target='blank'>Fire-manage link</a>
                    <br />
                    <a className='Links' target="blank" href="https://gym-body-builder.firebaseapp.com/">Body-Builder linl</a>
                    <br />
                    <a className='Links' target="blank" href="https://epic-assignment5.netlify.app/">Account-Balance link</a>
                </div>
            </div>
        </div >
    );
};

export default MyProtfolio;