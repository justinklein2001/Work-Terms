import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import WorkTerm from './WorkTerm';
import WorkTerm2 from './WorkTerm2';
import ADknown from '../data/ADknown';
import HS from '../data/HS';
import NCR from '../data/NCR';
import Tulip from '../data/Tulip';
import hs_img from '../images/DMForm.png';
import ncr_img from '../images/ncr.png';
import tulip_img from '../images/appointments.png';
import adknown_img from '../images/adknown.jpg'
import { useState } from 'react';

function CarouselWork() {

const [hs] = useState(HS);
const [ncr] = useState(NCR);
const [tulip] = useState(Tulip);
const [adknown] =useState(ADknown);
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
        {/*Adknwon*/}
        <Carousel.Item>
            <WorkTerm2 data={adknown} img={adknown_img} img_caption="Adknown Earth Day 2023" />
        </Carousel.Item>
        {/*Tulip*/}
        <Carousel.Item>
            <WorkTerm2 data={tulip} img={tulip_img} img_caption="Chanel appointments screen that leverages Tulip functionality" />
        </Carousel.Item>
        {/*NCR*/}
            <Carousel.Item>
        <WorkTerm2 data={ncr} img={ncr_img} img_caption="API Toolkit is in active development, visuals are not available."/>
        </Carousel.Item>
        {/*H&S*/}
        <Carousel.Item>
            <WorkTerm data={hs} img={hs_img}/>
        </Carousel.Item>

    </Carousel>
);
}
export default CarouselWork;