import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { ChatAltIcon, LocationMarkerIcon, MailIcon, PhoneIcon, PhotographIcon, PlayIcon } from '@heroicons/react/solid'
const Footer = () => {
    return (
        <div className='footer block'>
            <div className='personalIcon'>
                <div className='flex'><a href=""><LocationMarkerIcon className='Icon'></LocationMarkerIcon></a>
                    <b>Bagha , Rajshahi, Bangladesh</b><br />
                </div>
                <div className='flex'>
                    <a href=""><PhoneIcon className='Icon'></PhoneIcon></a><b> Helpline:  01750822264</b>
                </div>
                <div className='flex'>
                    <a href="http://"><MailIcon className='Icon'></MailIcon></a><b> Email : sarfarajshaikat116@outlook.com</b>
                </div>
            </div>
            <div className='flex'>
                <a href="https://www.google.com/">
                    <ChatAltIcon className='Icon'></ChatAltIcon></a>
                
                <a href="https://www.youtube.com/watch?v=eaB1bXTA23w"><PlayIcon className='Icon'></PlayIcon></a>
            </div>
            <div className='copyright'>
                <h1>Copyrite <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2022 shaikat corporation</h1>
            </div>
        </div>
    );
};

export default Footer;
