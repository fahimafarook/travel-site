import React, { useEffect } from 'react';
import '../css/helper.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger if needed

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

gsap.registerPlugin(ScrollTrigger);

function HomePage(props) {

    let count = 0;

    useEffect(()=>{

        if(count==0){
            gsap.to(".bg-layer1",{
                scrollTrigger:{
                    scrub:1
                },
                y:-10,
                scale:1.2
            })

            gsap.to(".bg-layer2",{
                scrollTrigger:{
                    scrub:1
                },
                scale:0.999,
                y:10
            })

            gsap.to(".lets-hike",{
                scrollTrigger:{
                    scrub:1
                },
                scale:0.5,
                y:500,
                opacity:0,
            })

            gsap.to(".bg-layer3",{
                scrollTrigger:{
                    scrub:1
                },
                // scale:0.5,
                x:200,
                // scale:1.05
            })
            count = count+1;
        }
    })
    return (
        <div className=''>
            <div className='lets-hike'>COME LETS HIKE</div>
            <div className='bg-layer1'></div>
            <div className='bg-layer2'></div>
            {/* <div className='bg-layer3'></div> */}
        </div>
    );
}

export default HomePage;