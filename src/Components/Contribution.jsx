import React from 'react'

export default function Contribution() {
  return (
    <section className="contri-wrap md:py-36 bg-pista relative py-20">
        <div className="layer absolute right-0 -top-36 hidden sm:block">
            <img src={require("../images/layer2.png")} alt="" className='object-cover object-x-14' />
        </div>
        <div className="container">
            <div className="section-title text-center max-w-screen-md mx-auto !mb-4">
                <h2>Your contribution matters</h2>
            </div>
            <div className="contri-content text-center max-w-screen-sm mx-auto">
                <p className='mb-10'>Make your donation today to change the lives of people globally. <br/>Even the smallest contributions matter!</p>
                <div className="donate-btn" data-aos="zoom-in" data-aos-duration="1000">
                    <a href="" className="solid-btn">Donate Now</a>
                </div>
            </div>
        </div>
    </section>
  )
}
