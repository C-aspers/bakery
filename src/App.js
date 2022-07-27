import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavbarLayout/Navbar';
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Products/>
    </div>
  );
}

export default App;
