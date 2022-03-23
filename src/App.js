import './styles/App.css';
import Header from './components/Header';
import Homepage from './components/Homepage/Home'
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import {Route} from 'wouter';


function App() {
  return (
    <div className="App">
      <header className='header'>
    <Header ></Header>
    </header>
    <Route 
      path='/about'
      component={About}
    />
    <Route 
      path='/'
      component={Homepage}
    />
    <Footer></Footer>
    </div>
  );
}

export default App;
