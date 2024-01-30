import React from 'react'

export default function Believe() {
  return (
    <section className="believe-wrap bg-limeLight md:py-36 py-20 relative">
        <div className="layer absolute -left-7 -top-24 sm:block hidden">
            <img src={require("../images/layer1.png")} alt="" />
        </div>
        <div className="container z-10 relative">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="single-grid believe-grid">
                    <div className="believe-thumb">
                        <img src={require("../images/believe.jpg")} alt="" />
                    </div>
                </div>
                <div className="single-grid believe-content lg:pl-20">
                    <div className="section-title">
                        <h2>We believe that access to affordable finance is the greatest barrier to quality education in Africa.</h2>
                    </div>
                    <div className="donate-btn">
                        <a href="" className="solid-btn bg-tangy btnShadow">Donate Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
