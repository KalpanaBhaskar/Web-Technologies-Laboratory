import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Create from './pages/Create';
import Post from './pages/Post';
import Archive from './pages/Archive';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:id" element={<Create />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="archive" element={<Archive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
