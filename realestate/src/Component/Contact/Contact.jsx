import React from 'react'
import './Contact.css';
import { MdCall } from 'react-icons/md';
import{BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottmCenter} from 'react-icons/hi2';
const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className='paddings innerwidth flexCenter c-container'>
                {/* left side */}
                <div className= "flexColStart c-left">
                    <span className='orangeText'>Our Contact Us</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>
                
                <div className='flexColStart contactModes'>
                    {/* first row */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart details">
                                    <span>Call</span>
                                    <span>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>
                    </div>
                </div>
                
                
                </div>
                {/* right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
