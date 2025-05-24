import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import MagicBook from '@/pages/MagicBook';
import DefaultLayout from '@/layout/DefaultLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/magic-book" element={<MagicBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
