
// import './App.css';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../Components/Banner';
import Sponser from '../Components/Sponser';
import Mission from '../Components/Mission';
import Believe from '../Components/Believe';
import Campaigns from '../Components/Campaigns';
import Contribution from '../Components/Contribution';
import Form from '../Components/Form';
import Combo from '../Components/Combo';
import CounterClassFunction from '../Components/CounterClassFunction';
import CounterFunction from '../Components/CounterFunction';
import Accordion from '../Components/Accordion';
import Counter from '../Components/Counter';

function Home() {
    useEffect(() => {
      AOS.init({once: true});
      AOS.refresh();
  
      
      // let timer = setTimeout(() => {
      //   alert ('Alert');
      // }, 1000);
    
      // return () => clearTimeout(timer)
  
      // let interval = setTimeout(() => {
      //   alert('Welcome to Holity Social Support');
      // }, 1000);
      // return () => clearTimeout(interval)
    }, []);
    const count = 0
    return (
        <div className='content'>
          <Banner />
          <Sponser />
          <Mission />
          <Believe />
          <Campaigns />
          <Contribution />
          <CounterClassFunction />
          <CounterFunction counter={0} min={1} max={7} />
          <Accordion heading="Heading" content="Lorem Ipsum"/>
          {/* <Combo /> */}
          <Counter counter={count} min={0} max={5}></Counter>
          <Form />
        </div>
      )
}
 
export default Home;