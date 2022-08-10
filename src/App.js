import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavbarLayout/Navbar';
import Products from "./components/Products/Products";
import Footers from './components/Footers/Footers';
import StartingPage from './components/StartingPage/StartingPage';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <StartingPage />
        <Products/>
        <Footers />
    </div>
  );
}

export default App;
