import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Campaigns() {

    const campaign = [
        {id: 1, image: "c1.jpg", head: "Hunger Prevention Program", postDate: "Mon, Jan 02", postLocation: "San Francisco", btnText: "Donate Now", btnLink: "#"},
        {id: 2, image: "c2.jpg", head: "Affordable Education for Kids and Teens", postDate: "Mon, Jan 02", postLocation: "San Francisco", btnText: "Donate Now", btnLink: "#"},
        {id: 3, image: "c3.jpg", head: "Educational Resources for Schools", postDate: "Mon, Jan 02", postLocation: "San Francisco", btnText: "Donate Now", btnLink: "#"},
        {id: 4, image: "c1.jpg", head: "Hunger Prevention Program", postDate: "Mon, Jan 02", postLocation: "San Francisco", btnText: "Donate Now", btnLink: "#"},
        {id: 5, image: "c2.jpg", head: "Affordable Education for Kids and Teens", postDate: "Mon, Jan 02", postLocation: "San Francisco", btnText: "Donate Now", btnLink: "#"},
    ]
    const csettings={
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // adaptiveHeight: true,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                // adaptiveHeight: true,
              },
            },
          ]
    }

  return (
    <section className="campaign-wrap md:py-36 py-20">
        <div className="container">
            <div className="section-title text-center max-w-screen-md mx-auto !mb-16">
                <h2 className='mb-6'>Our Campaigns</h2>
                <p>We regularly organize charitable campaigns aimed at changing the lives of people around the world.</p>
            </div>
            <div className="campaign-slider">
                <Slider {...csettings}>
                    {campaign.map((item, index) => (
                    <div className="single-grid campaign-grid" key={item.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={(index + 1) * 400}>
                        <div className="post-box mx-3">
                            <a href={item.btnLink}>
                                <div className="camp-thumb relative pb-80p overflow-hidden">
                                    <img src={require("../images/" + item.image)} alt=""  className="absolute top-0 left-0 object-cover h-full w-full transition-all ease-in-out duration-300 hover:scale-110"/>
                                </div>
                            </a>
                            <div className="camp-content text-center pt-8">
                                <a href={item.btnLink}>
                                    <h2 className='text-3xl mb-3 hover:text-tangy ease-in-out duration-300'>{item.head}</h2>
                                </a>
                                <div className="post-list">
                                    <ul className='text-tangy text-lg mb-9 font-roboto'>
                                        <li className="inline-block px-3 relative after:content-['|'] after:absolute after:left-full after:top-0" after="|">{item.postDate}</li>
                                        <li className='inline-block px-3'>{item.postLocation}</li>
                                    </ul>
                                </div>
                                <div className="donate-btn">
                                    <a href={item.btnLink} className="solid-btn bg-seaGreen hover:shadow-btnShadowGreen">{item.btnText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    </section>
  )
}
