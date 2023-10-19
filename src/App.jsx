
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Paginas/Home/Home';
import NewPost from './Paginas/Post/NewPost';
import NavBar from './Componentes/NavBar/NavBar';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>

        <NavBar />
        <div className='container'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<NewPost />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
