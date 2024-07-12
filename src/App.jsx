import Home from './Component/Home'
import './App.css'
import {Link,Route,Routes,BrowserRouter as Router} from "react-router-dom";
import Products from "./Component/Products"
// import Home from "./Component/Home"
import Order from "./Component/Order"
function App() {


  return (
  <>
    <Router>
      <div style={{position:"absolute",zIndex:"1",marginTop:"200px",width:"180px",height:"1000px"}}>
      <main >
        <nav>
          <div style={{display:"flex",flexDirection:"column",padding:"20px",fontSize:"20px",gap:"4px"}} >
            <Link to="/" style={{textDecoration:"none"}} onMouseEnter={(e) =>{ e.target.style.color = 'blue'
            }} onMouseLeave={(e) => e.target.style.color = 'black'}>Home</Link>
            <Link to="/products" style={{textDecoration:"none"}} onMouseEnter={(e) => e.target.style.color = 'blue'} onMouseLeave={(e) => e.target.style.color = 'black'}>Products</Link>
            <Link to="/order" style={{textDecoration:"none"}} onMouseEnter={(e) => e.target.style.color = 'blue'} onMouseLeave={(e) => e.target.style.color = 'black'}>Feedback</Link>
          </div>
         </nav>
      </main>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/order"  element={<Order/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
