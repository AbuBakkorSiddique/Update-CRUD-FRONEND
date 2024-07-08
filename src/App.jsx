import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import Pages ------------------------
import HomePage from './Pages/HomePage';
import CreatePage from './Pages/CreatePage';
import UpdatePage from './Pages/UpdatePage';
import ReadPage from './Pages/ReadPage';

function App() {
  return (
   <>
   
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/read" element={<ReadPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
   
   
   
   
   
   
   
   </>
  )
}

export default App