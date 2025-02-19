import Background from "./components/Background";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Contain from "./components/Contain";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import MyProject from "./components/pages/MyProject";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Background>
          <Navigation />
          <Profile />
          <Contain>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/my-project" element={<MyProject />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Contain>
        </Background>
      </Router>
    </>
  );
}

export default App;
