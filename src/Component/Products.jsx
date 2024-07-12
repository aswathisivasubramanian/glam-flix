import React, {useState,useEffect} from 'react'
 import image from "./images/cosmetic homepa 18ad607e-7dcd-47c4-9186-a140f8f68d25.png"
 import "./Product.css"
export default function Products() {
    const [productList, setProductList] =useState([]);
    const [selectedReviews, setSelectedReviews] = useState(null);
 
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
        },[]);
   
 
    //     .then((data)=>setProductList(data["products"]));
    //     console.log(productList);
    // },[]);
    const handleReview = (product) => {
        setSelectedReviews(product);
      };
   
  return (
    <div style={{marginLeft:"200px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px",}}>
        
 
          {productList.map((product, i)=>(
             <div key={i} style={{backgroundColor:"pink",borderRadius:"20px"}} >
   <h3 style={{textAlign:"center",paddingTop:"5px"}}>{product.title}</h3>
  <img src={product.thumbnail}></img>

<h4 style={{position:"relative",left:"70px"}}>${product.price}</h4>
<h4 style={{position:"relative",bottom:"70px",left:"240px"}}>Rating{product.rating}</h4>
<button style={{ position: "relative", top: "-20px", left: "180px", textDecoration: "none", borderRadius: "50px", background: "white", padding: "0", cursor: "pointer",border:"2px solid white",padding:"5px",fontWeight:"bolder" }}>Add to cart</button>

</div>
            ))}
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