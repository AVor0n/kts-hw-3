import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from 'components';
import { DetailsPage, MainPage } from 'pages';
import '../styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          {/* TODO добавить 404 */}
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
