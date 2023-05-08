import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';   
import Home from './components/Home';
import Projects from './components/Projects';
import Bar from './components/Bar';


function App() {
  return (
    <div className="App">
      <Home/>
      <Nav/>
      <About/>
      <Projects/>
      <Bar/>
      <Contact/>
    </div>
  );
}

export default App;
