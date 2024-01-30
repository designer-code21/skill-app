import React, { useState } from "react";
// import PropTypes from 'prop-types'
// import "./accordion.css";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  function classNames(...classes){
    return classes.filter(Boolean).join(' ');
  }
  return (
    <div className="accordion-item">
      <div className={classNames("accordion-toggle", isActive ? "active ":"")} onClick={() => setIsActive(!isActive)}>
        <h3>{props.heading}</h3><span>{isActive ? "-" : "+"}</span>
      </div>
      <div className="accordion-content">{isActive ? <p>{props.content}</p> : ""}</div>
    </div>
  );
};

// Accordion.propTypes={
//   heading: PropTypes.string.isRequired
// }

export default Accordion;