import './styles/App.css';

import { IconButton, LightbulbIcon, MoonIcon, Pane } from 'evergreen-ui';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Biography from './components/Biography';
import ClustrMapsWidget from './components/ClusterMapsWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import News from './components/News';
import WorkHistory from './components/WorkHistory';
import { useDarkMode } from './context/DarkModeContext';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import SpellingBee from './pages/spelling_bee/SpellingBee';

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Pane backgroundColor={darkMode ? '#333' : 'white'}>
      <Router>
        <Pane style={{ position: 'relative' }}>
          <IconButton
            height={56}
            icon={darkMode ? LightbulbIcon : MoonIcon}
            onClick={() => toggleDarkMode()}
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '20px',
              zIndex: 1000,
            }}
          />
          <Pane>
            <NavBar />
          </Pane>
        </Pane>
        <Pane className="main-content">
          <Routes>{/* Add notes routing */}</Routes>
          <Container as="main" className="py-4 px-3 mx-auto custom-padding">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Biography />
                    <WorkHistory />
                    <News />
                  </>
                }
              />
              <Route path="/courses" element={<Courses />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="projects/spelling-bee" element={<SpellingBee />} />
            </Routes>
            <ClustrMapsWidget />
          </Container>
        </Pane>
        <Footer />
      </Router>
    </Pane>
  );
};

export default App;
