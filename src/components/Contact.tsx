import '../styles/Contact.css';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <div className="contact-container">
      <ul className="contact-list">
        <li>
          <FontAwesomeIcon icon={faEnvelope} />{' '}
          <a href="mailto:zyy2sb@virginia.edu" style={{ textDecoration: 'none' }}>
            zyy2sb@virginia.edu
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />{' '}
          <a
            href="https://www.linkedin.com/in/kristina-schatz-74b021240/"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
