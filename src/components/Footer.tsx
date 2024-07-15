import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pane } from 'evergreen-ui';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Pane
      display="flex"
      padding={16}
      alignItems="center"
      justifyContent="center"
      gap="20px"
      color={'black'}
    >
      <p>© {currentYear} Kristina Schatz</p>
      <a className="icon" href="mailto:jqm9ba@virginia.edu" title="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        className="icon"
        href="https://www.linkedin.com/in/kristina-schatz-74b021240/"
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </Pane>
  );
};

export default Footer;
