// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Contador from './components/Contador/Contador';



function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar boton1={'comprar'} boton2={'mi carrito'} boton3={'historial'} boton4={'categorias'} />
        <Contador/>
        <ItemListContainer greeting='BIENVENIDO USUARIO' />
        <CartWidget/>
        <h1 style={{ color: 'yellow', marginBottom: '3%' }} onClick={() => console.log('hice click')}>MERCADO LIBRE</h1>

      </header>
    </div>
  );
}

export default App;
