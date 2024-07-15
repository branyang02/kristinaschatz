import './styles/App.css';

import { IconButton, LightbulbIcon, MoonIcon, Pane } from 'evergreen-ui';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Biography from './components/Biography';
import ClustrMapsWidget from './components/ClusterMapsWidget';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import News from './components/News';
import WorkHistory from './components/WorkHistory';
import { useDarkMode } from './context/DarkModeContext';
import NoteBlogCards from './pages/NoteBlogCards';
import NotesBlogs from './pages/NotesBlogs';
import Projects from './pages/Projects';

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Pane
      backgroundColor={darkMode ? '#333' : 'white'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
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
        </Pane>
        <Pane>
          <NavBar />
        </Pane>
        <Pane className="main-content">
          <Routes>
            <Route path="/blogs" element={<NoteBlogCards type="blogs" />} />
            <Route path="/blogs/:blogId" element={<NotesBlogs type="blogs" />} />
          </Routes>
          <Container as="main" className="py-4 px-3 mx-auto custom-padding">
            <Routes>
              <Route
                path="/"
                element={
                  <Pane color={darkMode ? 'white' : 'black'}>
                    <Biography />
                    <WorkHistory />
                    <News />
                  </Pane>
                }
              />
              <Route path="/projects" element={<Projects />} />
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
