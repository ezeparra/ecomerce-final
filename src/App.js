import NavBar from "../src/components/NavBar";
import Product from "../src/components/Product";
import CheckoutPage from "../src/components/CheckoutPage";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn";




function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/checkout-page">
            <CheckoutPage/>
          </Route>
          <Route path="/">
            <Product />
          </Route>
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
