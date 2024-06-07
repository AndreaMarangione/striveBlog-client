import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import UploadBlog from './pages/UploadBlog';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoutes from './middlewares/ProtectedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path='/uploadBlog' element={<UploadBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
