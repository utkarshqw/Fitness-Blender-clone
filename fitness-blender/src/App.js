import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navigation';
import Footer from './Component/Footer';
import HomePage from './Routes/HomePage';
import AllRoutes from './Routes/AllRoutes';
// import Card from './Routes/Card';


function App() {
  return (
    <div className="App">
      <Navbar/>
    
      <AllRoutes/>
      <Footer/>

      
      
    </div>
  );
}

export default App;
