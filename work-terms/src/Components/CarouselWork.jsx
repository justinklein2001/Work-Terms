import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import WorkTerm from './WorkTerm';
import HS from '../data/HS';
//import NCR from '../data/NCR';
import hs_img from '../images/DMForm.png'
import { useState } from 'react';

function CarouselWork() {

const [hs] = useState(HS);
//const [ncr] = useState(NCR);
const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};


return (

    <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon arrows" />}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon arrows" />}
        >
        {/*H&S*/}
        <Carousel.Item>
            <WorkTerm data={hs} img={hs_img}/>
        </Carousel.Item>
        {/*NCR
        <Carousel.Item>
            <WorkTerm data={ncr}/>
        </Carousel.Item>*/}

    </Carousel>
);
}
export default CarouselWork;