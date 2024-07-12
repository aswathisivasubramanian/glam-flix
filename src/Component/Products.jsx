import React, {useState,useEffect} from 'react'
 import image from "./images/cosmetic homepa 18ad607e-7dcd-47c4-9186-a140f8f68d25.png"
 import "./Product.css"
 import Cart from './Order';
 import Carousel from 'react-bootstrap/Carousel';
 import Logo from "./images/Screenshot 2024-07-12 112952.png";
export default function Products() {
    const [productList, setProductList] =useState([]);
    
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((data)=> data.json())
        .then((data)=>{
        setProductList(data.products.map(product => ({
            ...product,
            // Simulating reviews for each product (as provided in your data)
            reviews: product.reviews.map(review => ({
              id: review.reviewerEmail,  // Using email as unique ID for simplicity
              title: `Rating: ${review.rating}`,
              description: review.comment,
              date:review.date,
              revname:review.reviewerName,
              revemail:review.reviewerEmail,
            })),
          })));
        });
        },[productList]);
   
 
    //     .then((data)=>setProductList(data["products"]));
    //     console.log(productList);
    // },[]);
    const handleReview = (product) => {
        setSelectedReviews(product);
      };
      const handleAddToCart = (product) => {
        setCart([...cart, product]); // Add product to cart
        alert("Product added to cart!");
    }
   
  return (
    <div style={{marginLeft:"200px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr ",gap:"10px",}}>
      
        <img  src={Logo} style={{position:"absolute",left:"-10px",top:"10px"}}/>
 
          {productList.map((product, i)=>(
             <div key={i} style={{backgroundColor:"pink",borderRadius:"20px"}} >
   <h3 style={{textAlign:"center",paddingTop:"5px"}}>{product.title}</h3>
  <img src={product.thumbnail}></img>

<h4 style={{position:"relative",left:"70px"}}>${product.price}</h4>
<h4 style={{position:"relative",bottom:"70px",left:"240px"}}>Rating{product.rating}</h4>
<button style={{ position: "relative", top: "-20px", left: "180px", textDecoration: "none", borderRadius: "50px", background: "white", padding: "0", cursor: "pointer",border:"2px solid white",padding:"5px",fontWeight:"bolder" } } onClick={() => handleAddToCart(product)}>Add to cart</button>

</div>

            ))}
              <div style={{ }}>
                <h2>Cart</h2>
                <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Confirm Buy</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={index}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td><button style={{ position: "relative", textDecoration: "none", borderRadius: "50px", background: "white", padding: "10px", cursor: "pointer",border:"2px solid white",padding:"10px",fontWeight:"bolder",color:"black" } }>Buy</button></td>
              <td><img src={product.thumbnail}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
               
            </div>
    </div>
 
   
  )
}
 //   <tr key={i}>
              //       <td>{product.id}</td>
              //       <td>{product.title}</td>
              //       <td>{product.price}</td>
              //       <td>{product.rating}</td>
              //       <td>
              
              // </td>