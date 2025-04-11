import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import MagicBook from '@/pages/MagicBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magic-book" element={<MagicBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
