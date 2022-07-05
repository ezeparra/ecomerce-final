import NavBar from "../src/components/NavBar";
import Product from "../src/components/Product";
import CheckoutPage from "../src/components/CheckoutPage";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import {useEffect} from "react";
import Checkout from "./components/CheckoutForm/Checkout";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";



function App() {

 const[{user}, dispatch] = useStateValue();
 console.log(user);


useEffect(() => {
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    {dispatch({
            type:actionType.SET_USER,
            user:uid,
          })}    
  }});
}, [])





  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>            
          <Route path="/checkout-page" element={<CheckoutPage/>}/>        
          <Route path="/" element={<Product />}/>
          <Route path="/checkout" element={<Checkout />}/>         
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
