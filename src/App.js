import logo from './logo.svg';
import './App.css';
import '../src/css/helper.css'

import HomePage from './components/HomePage'
import PlacesImage from './components/PlacesImage'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpcomingEvents from './components/UpcomingEvents'

function App() {
  return (
    <div className="App app-js" >
      <HomePage/>
      <UpcomingEvents/>
      <PlacesImage/>
      {/* <PlacesImage/> */}
    </div>
  );
}

export default App;
