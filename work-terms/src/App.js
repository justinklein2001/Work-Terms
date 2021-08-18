import HSF from './Components/hsf';
import NCR from './Components/ncr';
import Home from './Components/home';
import NavigationBar from './Components/navbar';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/hsf" component={HSF}></Route>
        <Route exact path="/ncr" component={NCR}></Route>
      </Router>
    </div>
  );
}
export default App;
