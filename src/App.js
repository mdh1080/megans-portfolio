import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';   
import Home from './components/Home';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Home/>
      <Nav/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
