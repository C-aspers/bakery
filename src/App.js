import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavbarLayout/Navbar';
import Products from "./components/Products/Products";
import Footers from './components/Footers/Footers';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Products/>
        <Footers />
    </div>
  );
}

export default App;
