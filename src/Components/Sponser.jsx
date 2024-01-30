import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sponser() {
  const settings ={
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover:true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          // adaptiveHeight: true,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          // adaptiveHeight: true,
        },
      },
    ]
  }

  const Sponsor =[
    {id: 1, image: "sp1.png", alt: "Thumb1"},
    {id: 2, image: "sp2.png", alt: "Thumb2"},
    {id: 3, image: "sp3.png", alt: "Thumb3"},
    {id: 4, image: "sp4.png", alt: "Thumb4"},
    {id: 5, image: "sp1.png", alt: "Thumb5"},
    {id: 6, image: "sp2.png", alt: "Thumb6"},
    {id: 7, image: "sp3.png", alt: "Thumb7"},
    {id: 8, image: "sp4.png", alt: "Thumb8"},

  ]
  return (
    <section className="sponsor-slider-wrapper pb-28">
        <div className="container">
            <div className="title">
                <h2 className='text-nightBlue text-2xl mb-16 font-dm'>Our Sponsors:</h2>
            </div>
            <div className="slider-box">
              <Slider pause-on-hover="true" {...settings}>
                {Sponsor.map((item) =>  (
                <div className="slide-item" key={item.id}>
                  <div className="sponsor-thumb">
                    <img src={require("../images/" + item.image)} alt={item.alt} className="mx-auto" />
                  </div>
                </div>
                ))}
              </Slider>
            </div>
        </div>
    </section>
  )
}
