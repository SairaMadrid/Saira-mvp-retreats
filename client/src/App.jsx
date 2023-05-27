import './App.css';
import { Routes, Route, Link } from "react-route-dom";
import Hotels from "./pages/Hotels";
import Home from "./pages/Home";
import Navbar from './components/Navbar';



function App() {
 
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
     </Router>
    </>
  );
}


    {/* <div className="container mt-2">
      <div className="container text-center">
        <h1>Lotus Retreats</h1>
        <nav>
          <ul>
            <li>
              <Link to="/hotels">Hotels list</Link>
            </li>
          </ul>
        </nav>
        </div>
    </div>
  );
} */}


  {/* <Routes>
<Route path="/" element={<Home />} />
<Route path="/hotels" element={<Hotels />} />
</Routes> */}
      
  

export default App
