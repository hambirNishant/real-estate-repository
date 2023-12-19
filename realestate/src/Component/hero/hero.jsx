import React from 'react'
import'./hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import{fa-location-dot} from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';
import CountUp from 'react-countup';        
const Hero = ()=> {
  return (
    <>
    <section className="hero-wrapper">
        <div className='paddings innerwidth flexCenter hero-container '>
           {/* left side */}
            <div className="flexColStart hero-left">

                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Discover<br/> Most Suitable<br/> Property
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>
                        Find a variety properties that suit you very easilty</span>
                        <span className='secondaryText'>
                            Forgot all dificulties in finding a residence for you
                        </span>
                </div>
                <div className="flexCenter search-bar">
                <MdLocationOn size={25} color="#007BFF" />
                <input type="text" />
                <button className='button'>Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>
                    
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                

                    <div className="flexColStart stat">
                        <span>
                            <CountUp end={28} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winnings</span>
                    </div>
                </div>
                

                


            </div>
            {/* right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>

        </div>

    </section>
    </>
  )
}

export default Hero;
