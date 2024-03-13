import { Routes, Route } from 'react-router-dom';
import './App.css';
import './App-responsive.css';
import Home from './pages/Home'
import Cliente from './pages/Cliente';
import AddCliente from './pages/AddCliente';
import EditCliente from './pages/EditCliente';
import ViewCliente from './pages/ViewCliente';
import NoMatch from './pages/NoMatch';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='cliente' element={<Cliente />} >
          <Route index element={<AddCliente />} />
          <Route path='edit/:id' element={<EditCliente />} />
          <Route path='view' element={<ViewCliente />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;