import React, {useState, useEffect} from 'react'
import CustomModal from '../Components/Modal'
import {useParams} from 'react-router-dom'
import PageTitle from '../Components/PageTitle'

export default function AboutUs() {
  const [visibility, setVisibility] = useState(false);
  const modalCloseHandler =(e)=> {
    setVisibility(e);
  }

  return (
    <main>
      <PageTitle pageTitle="About Us" />
      <section className="about-wrap">
        <div className="container">
          <div className="about">
            <button onClick={(e)=> setVisibility(!visibility)}>Toggle Modal</button>
              <CustomModal onClose={modalCloseHandler} show={visibility} title="Hello CC">
                <h1>Welcome to React Custom Component</h1>
                <p>Live from CC</p>
              </CustomModal>
          </div>
        </div>
      </section>
    </main>
  );
};
