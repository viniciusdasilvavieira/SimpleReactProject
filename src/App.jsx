import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Add from './Pages/add';
import Delete from './Pages/delete';
import List from './Pages/list';
import Details from './Pages/detailed_list';
import './style/body.css';

function App() { 

  return (
    <div className="App">
      <Router>

      <Navbar />
      <div className='container'>
          <div className='body'>
              <div className='sidebar'>
                <Link to="/listar"
                  className = 'noDecoration'>
                  <div className='accountMenuButton'>LISTAGEM</div>
                </Link>
                <Link to="/criar"
                className = 'noDecoration'>
                  <div className='accountMenuButton'>CRIAÇÃO</div>
                </Link>
                <Link to="/remover"
                className = 'noDecoration'>
                  <div className='accountMenuButton'>REMOÇÃO</div>
                </Link>
              </div>
              <div className='main'>
                <Routes>
                  <Route
                    path='/'
                    element={<List />} //exibição padrão
                  />
                  <Route
                    path='/criar'
                    element={<Add />}
                  />
                  <Route
                    path='/remover'
                    element={<Delete />}
                  />
                  <Route
                    path='/listar'
                    element={<List />}
                  />
                  <Route
                    path='/detalhes/:classIndex/:counter'
                    element={<Details />}
                  />
                </Routes>
              </div>         
          </div>        
      </div>
      <Footer />

      </Router>

    </div>
  )

}

export default App;
