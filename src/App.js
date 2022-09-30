import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPageVideo from './commonComponents/landingPageVideo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/'
        element = {<LandingPageVideo />}>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
