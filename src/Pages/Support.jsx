import React, {useState} from 'react'
import CustomModal from '../Components/CustomModal';
import AccordionBlock from '../Components/AccordionBlock';
import CounterState from '../Components/CounterState';
import CustomTabs from '../Components/CustomTabs';
import CounterAlpha from '../Components/CounterAlpha';
import VideoBlock from '../Components/VideoBlock';
import AccordionSample from '../Components/AccordionSample';
import QtyCounter from '../Components/QtyCounter';

export default function Support() {
  const [visibility, setVisibility]=useState(false)
  const closeModal = () => {
    setVisibility(false);
  }

  return (
    <section className="modal-wrap">
      <div className="container">
        <div className="modal-main">
          <div className="modal-btn">
            <button type="button" onClick={(e)=> setVisibility(true)} className="bg-purple-100 py-3 px-6 rounded-lg text-purple-900 font-medium mb-5">Open Modal Please!</button>
          </div>
          <CustomModal title="Welcome to Custom Coded Modal" content="Coding is Mind Boggling!!!" show={visibility} onClose={closeModal} />
         {/* {visibility && <CustomModal title="Welcome to Custom Coded Modal" children="Coding is Mind Boggling!!!" show={visibility} onClose={closeModal} />} */}
        </div>
        <AccordionSample/>
        <div className="accordion-main py-4 px-4 bg-purple-50 rounded-lg">
          <AccordionBlock title="Accordion" heading="Heading" content="Onstuimige groei? Handjes tekort? Te weinig grip op je assets? We got you! Alles onder controle met onze slimme digitale oplossingen voor energie, constructie en telecom. "></AccordionBlock>
          <AccordionBlock title="Accordion" heading="Heading" content="Lorem Ipsum"></AccordionBlock>
        </div>
        <CounterState initial={1} min={1} max={15}></CounterState>
        <CustomTabs></CustomTabs>
        <CounterAlpha initial={3} min={2} max={10}></CounterAlpha>
        <VideoBlock />
        <QtyCounter min={1} max={10} initial={1} />
      </div>
    </section>
  )
}
