import React from 'react';

function PlacesImage(props) {
    return (
        <div className='places-image-section container-fluid '>
            <div className = "row row1 h-50 justify-content-center">
                <div className='section-1 the-section col-md-5'>HIMALAYAS</div>
                <div className='section-2 the-section col-md-5'>NEPAL</div>
            </div>
            <div className = "row row1 h-50 justify-content-center"r>
                <div className='section-3 the-section col-md-5'>VARKLA</div>
                <div className='section-4 the-section col-md-5'>LADAKH</div>
            </div>
        </div>
    );
}

export default PlacesImage;