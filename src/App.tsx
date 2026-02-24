import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';


import {HOME_ROOT, ROUTES, SECONDARY_ROUTES } from './routes/routes';
import { useWindowContext } from './contexts/WindowContext';
import Footer from './components/Footer';

import Navigation from './components/Navigation';



function App() {

  const ALL_ROUTES = HOME_ROOT.concat(ROUTES).concat(SECONDARY_ROUTES);

  const {widthBreak, width} = useWindowContext();

  return (
   <div className="app">
      <Navigation></Navigation>
      <div className="conteneur">
        <Routes>
          {ALL_ROUTES.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      {width > widthBreak &&  <Footer/>}
    </div>
  )
}

export default App
