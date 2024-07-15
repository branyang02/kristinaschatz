import '../styles/Biography.css';

import React from 'react';

import Contact from './Contact';

const Biography: React.FC = () => {
  return (
    <div className="biography-container">
      <div className="biography-text">
        <h3>Biography</h3>
        <p>
          I am a pre-med student at the{' '}
          <a href="https://www.virginia.edu/">University of Virginia</a>. I have
          experience as an Emergency Medical Technician (EMT), and I am actively involved
          in refugee support and volunteering activities. Additionally, I serve as a
          Teaching Assistant (TA) and have been shadowing doctors affiliated with the{' '}
          <a href="https://www.sjia.org/">SJIA</a>. My diverse experiences have fueled my
          passion for medicine and community service, and I am committed to making a
          positive impact in the healthcare field.
        </p>
        <Contact />
      </div>
      <div className="biography-image">
        <img
          src={'https://branyang02.github.io/images/kristina.jpg'}
          alt="Kristina Schatz"
        />
      </div>
    </div>
  );
};

export default Biography;
