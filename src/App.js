import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header titulo="Galería de Imágenes con React" />
      <div className='Gallery'>
        <Card />
      </div>
      <Footer titulo="Galeria de imagenes desde internet elegidas al azar"/>
    </div>
  );
}

export default App;