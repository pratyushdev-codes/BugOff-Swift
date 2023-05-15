import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
        
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={4000}
          className="carousel-container" 
        >
          <div>
              <img loading='lazy' src="./images/gold.jpg" alt=''  />
          </div>
          <div>
              <img loading='lazy' src="./images/Electronics.jpg" alt=''  />
          </div>
          <div>
              <img loading='lazy' src="./images/Tees.jpg" alt=''  />
          </div>
        </Carousel>
          <div>
            <center><h1>Best picks according to the catergories.</h1></center>
          </div> 

        <style jsx>{`
          .carousel-container {
            margin-bottom: 1px;
          }
        `}</style>
          

    </div>
  )
}

export default Banner
