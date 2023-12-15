import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const ProductCard = ({item}) => {

    const {img,name,category,price,_id}=item;
    const {user}=useContext(AuthContext)
    const [,refetch]=useCart()
    const navigate=useNavigate()
    const location=useLocation()
    const handelAddToCart=(item)=>{
        console.log(item);
     if(user && user.email){
      // eslint-disable-next-line no-undef
      const cartItem={cartItemId: _id, name,price,img,email:user?.email}
      fetch('http://localhost:5000/carts',{
        method:"POST",
        headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify(cartItem)
      })
     .then(res=>res.json())
     .then(data=>{
      if(data.insertedId){
        refetch()
        Swal.fire("Product Added To Cart");
        console.log(data);
      }
      
     })
     }
     else{
      Swal.fire({
        title: "Please Login Then Add To cart",
      
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from:location}})
        }
      });
    }
    }
 
    return (
        <div>
            <div className="container mx-auto pt-16">
        
         
          
       
               

<div className="card  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h6 className="card-title">{name}</h6>
    <p>{category}</p>
    <h6>{price}</h6>
    <div className="card-actions justify-end">
      <button onClick={()=>handelAddToCart(item)} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
              
             
          
                </div>
                
       
        </div>
    );
};

export default ProductCard;