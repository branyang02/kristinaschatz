import '../styles/NavBar.css';

import { IconButton, Menu, MenuIcon, Popover, Position } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, To } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import resumePDF from '../assets/resume.pdf';
import { useDarkMode } from '../context/DarkModeContext';

function NavBar() {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelect = (path: To) => {
    navigate(path);
  };

  const desktopMenu = (
    <Nav className="justify-content-end">
      <Nav.Link
        as={Link}
        to="/"
        className="navbar-text"
        style={{ color: darkMode ? 'white' : 'black' }}
      >
        Home
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/courses"
        className="navbar-text"
        style={{ color: darkMode ? 'white' : 'black' }}
      >
        Relevant Coursework
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/blogs"
        className="navbar-text"
        style={{ color: darkMode ? 'white' : 'black' }}
      >
        Blog
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/notes"
        className="navbar-text"
        style={{ color: darkMode ? 'white' : 'black' }}
      >
        Notes
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/projects"
        className="navbar-text"
        style={{ color: darkMode ? 'white' : 'black' }}
      >
        Projects
      </Nav.Link>
      <Nav.Link
        href={resumePDF}
        target="_blank"
        className="navbar-text"
        style={{ color: darkMode ? 'white' : 'black' }}
      >
        Resume
      </Nav.Link>
    </Nav>
  );

  const mobileMenu = (
    <Popover
      position={Position.BOTTOM_RIGHT}
      content={({ close }) => (
        <Menu>
          <Menu.Group>
            <Menu.Item
              onSelect={() => {
                handleSelect('/');
                close();
              }}
            >
              Home
            </Menu.Item>
            <Menu.Item
              onSelect={() => {
                handleSelect('/courses');
                close();
              }}
            >
              Relevant Coursework
            </Menu.Item>
            <Menu.Item
              onSelect={() => {
                handleSelect('/blogs');
                close();
              }}
            >
              Blog
            </Menu.Item>
            <Menu.Item
              onSelect={() => {
                handleSelect('/notes');
                close();
              }}
            >
              Notes
            </Menu.Item>
            <Menu.Item
              onSelect={() => {
                handleSelect('/projects');
                close();
              }}
            >
              Projects
            </Menu.Item>
            <Menu.Item onSelect={close} is="a" href={resumePDF} target="_blank">
              Resume
            </Menu.Item>
          </Menu.Group>
        </Menu>
      )}
    >
      <IconButton
        icon={MenuIcon}
        height={50}
        appearance="minimal"
        className="menu-button-style"
      />
    </Popover>
  );
  return (
    <>
      <Navbar style={{ paddingTop: '20px' }}>
        <Container
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              color: darkMode ? 'white' : 'black',
            }}
            className="navbar-text"
          >
            Brandon (Yifan) Yang
          </Navbar.Brand>
          {isMobile ? mobileMenu : desktopMenu}
        </Container>
      </Navbar>
      <hr
        style={{
          backgroundColor: darkMode ? 'white' : 'black',
          color: darkMode ? 'white' : 'black',
          borderColor: darkMode ? 'white' : 'black',
        }}
      />
    </>
  );
}

export default NavBar;
