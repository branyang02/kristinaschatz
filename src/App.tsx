import './styles/App.css';

import { Pane } from 'evergreen-ui';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Biography from './components/Biography';
import ClustrMapsWidget from './components/ClusterMapsWidget';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NoteBlogCards from './pages/NoteBlogCards';
import NotesBlogs from './pages/NotesBlogs';
import Resume from './pages/Resume';

const App = () => {
  return (
    <Pane
      background="tint2"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Router>
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
                  <Pane color="black">
                    <Biography />
                  </Pane>
                }
              />
              <Route path="/resume" element={<Resume />} />
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
