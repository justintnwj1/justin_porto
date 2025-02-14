import Layout from "./components/Layout";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import MyProject from "./components/pages/MyProject";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-project' element={<MyProject/>}/>
      </Routes>
      </Layout>
    </Router>
  </>
  );
}

export default App;
