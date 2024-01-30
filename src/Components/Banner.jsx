import React from 'react'

export default function Banner() {
  return (
    <section className="banner-wrap pt-24 pb-32">
        <div className="container">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="single-grid lg:order-2">
                    <div className="banner-thumb  after:h-full after:w-full after:bg-seaGreen after:absolute after:top-0 after:left-0 relative after:-z-10 hover:after:translate-x-5 hover:after:-translate-y-5 after:transition-all after:duration-300 after:ease-in-out after:rounded-xl">
                        <img src={require("../images/banner.jpg")} alt="" className='rounded-xl' />
                    </div>
                </div>
                <div className="single-grid lg:order-1 lg:pr-20">
                    <h2 className='md:text-5xl text-4xl text-nightBlue font-dm mb-8' data-aos='fade-right' data-aos-duration="1000">Give a helping <br /> hand to those who need it!</h2>
                    <p className='font-roboto font-xlight text-xl' data-aos='fade-right' data-aos-duration="1000" data-aos-delay="500">Millions of families in America go hungry every year.</p>
                    <div className="donate-btn mt-8" data-aos='fade-right' data-aos-duration="1000" data-aos-delay="800">
                        <a href="" className="solid-btn bg-tangy btnShadow">Donate Now</a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
