import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import himalayas from "./../css/images/himalayas2.jpg";
import nepal from "./../css/images/nepal1.jpg";
import varkla from "./../css/images/varkla1.jpg";
import ladakh from "./../css/images/ladakh2.jpg";


function UpcomingEvents(props) {
    let count = 0;

    useEffect(()=>{

        if(count==0){
            
        }
    })
    
    const scrollRight = ()=>{
        console.log("fahima");
    }

    return (
        <div className='upcoming-events-parent'>
            <div className=' upcoming-event-header'>UPCOMING EVENTS</div>

            <div className='event-card-parent col-11 col-md-4'>
                <div className='event-card col-11 col-11 '>
                    <img className='event-picture' src={himalayas}></img>
                    <div className='trek-name'>Himalayas Trek</div>
                    <hr className='my-hr'></hr>
                    <div className='available-date-section'>
                        <div className='available-date-text'>Dates Planned</div>
                        <div className='available-dates'>
                            <div className ="dates-display">october 2023</div>
                            <div className ="dates-display">november 2023</div>
                            <div className ="dates-display">December 2023</div>
                            <div className ="dates-display">january 2024</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='event-card-parent col-11 col-11 col-md-4'>
                <div className='event-card col-11 col-11'>
                    <img className='event-picture' src={nepal} loading="lazy"></img>
                    <div className='trek-name'>Nepal Trek</div>
                    <hr className='my-hr'></hr>
                    <div className='available-date-section'>
                        <div className='available-date-text'>Dates Planned</div>
                        <div className='available-dates'>
                            <div className ="dates-display">october 2023</div>
                            <div className ="dates-display">november 2023</div>
                            <div className ="dates-display">December 2023</div>
                            <div className ="dates-display">january 2024</div>
                            {/* <div className ="dates-display">Febrary 2024</div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='event-card-parent col-11 col-11 col-md-4'>
                <div className='event-card col-11 col-11'>
                    <img className='event-picture' src={varkla}></img>
                    <div className='trek-name'>Varkla Trek</div>
                    <hr className='my-hr'></hr>
                    <div className='available-date-section'>
                        <div className='available-date-text'>Dates Planned</div>
                        <div className='available-dates'>
                            <div className ="dates-display">october 2023</div>
                            <div className ="dates-display">november 2023</div>
                            <div className ="dates-display">December 2023</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='event-card-parent col-11 col-11 col-md-4'>
                <div className='event-card col-11 col-11'>
                    <img className='event-picture' src={ladakh}></img>
                    <div className='trek-name'>Ladakh Trek</div>
                    <hr className='my-hr'></hr>
                    <div className='available-date-section'>
                        <div className='available-date-text'>Dates Planned</div>
                        <div className='available-dates'>
                            <div className ="dates-display">october 2023</div>
                            <div className ="dates-display">november 2023</div>
                            <div className ="dates-display">December 2023</div>
                        </div>
                    </div>
                </div>
            </div>

            <div classNAme="scroll-right" onClick={scrollRight}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default UpcomingEvents;



