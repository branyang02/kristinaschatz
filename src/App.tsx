import './styles/App.css';

import { IconButton, LightbulbIcon, MoonIcon } from 'evergreen-ui';
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
import About from './pages/About';
import Blog from './pages/blog/Blog';
import Sora from './pages/blog/blogs/Sora/Sora';
import Transformers from './pages/blog/blogs/Transformers/Transformers';
import Courses from './pages/Courses';
import CSO2 from './pages/notes/CSO2/cso2';
import Notes from './pages/notes/Notes';
import Projects from './pages/Projects';
import SpellingBee from './pages/spelling_bee/SpellingBee';

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Router>
      <div style={{ position: 'relative' }}>
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
        <div className="nav-bar">
          <NavBar />
        </div>
      </div>
      <div className="main-content">
        {' '}
        {/* This is the main content area */}
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
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="projects/spelling-bee" element={<SpellingBee />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/sora" element={<Sora />} />
            <Route path="/blog/transformers" element={<Transformers />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/cso2" element={<CSO2 />} />
          </Routes>
          <ClustrMapsWidget />
        </Container>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
