import React from 'react';
import State from './State';
import Counter from './Counter';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Mission() {
    const counter = 0;
    const missionGrid = [
        {id: 1, class:'bg-tangyLight hover:shadow-solidTangy', countBg:'bg-tangyDark', countText:'text-tangyLight', count: '01', head: 'Our Mission', content:'We see our mission in generating resources through fundraising initiatives and partnerships.'},
        {id: 2, class:'lime bg-lime hover:shadow-solidLime', countBg:'bg-limeDark', countText:'text-lime', count: '02', head: 'Our Vision', content:'We aim to grant wishes that will give hope to people in need in communities across the world.'},
        {id: 3, class:'saffron bg-saffron hover:shadow-solidSaffron', countBg:'bg-saffronDark', countText:'text-saffron', count: '03', head: 'Our Goal', content:'The goal of our organization is to  reduce the inequity in access to education & health care.'},
    ]
  return (
    <section className="mission-wrap md:pb-36 pb-20">
        <div className="container">
            <div className="section-title text-center max-w-screen-md mx-auto">
                <h2>Welcome to Holity, a nationwide charitable, non-profit organization</h2>
            </div>
            <div className="row">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {missionGrid.map((item, index) => (
                    <div className="animate-box" data-aos='fade-up' data-aos-duration="1000" data-aos-delay= {(index + 1) * 300} key={item.id}>
                        <div className={classNames( "mission-box  rounded-md py-8 px-7 ease-in-out duration-300 hover:-translate-y-2 hover:-translate-x-2 ", item.class)}  >
                            <div className={classNames("count rounded-full overflow-hidden  inline-block h-20 w-20 pt-5", item.countBg)}>
                                <h3 className={classNames('text-7xl', item.countText)}>{item.count}</h3>
                            </div>
                            <div className="mission-content mt-7">
                                <h3 className='text-3xl mb-3'>{item.head}</h3>
                                <p className='text-lg font-roboto font-xlight text-nightBlue'>{item.content}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <Counter counter={counter}></Counter>
        </div>
    </section>
  )
}
