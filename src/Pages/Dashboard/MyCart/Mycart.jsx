import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Mycart = () => {
  const { user } = useContext(AuthContext);
  const [cart,refetch,increaseQuantity, decreaseQuantity] = useCart();

// Calculate total price using reduce
const totalPrice = cart.reduce((acc, item) => {
  const itemPrice = parseFloat(item.price);

  // Check if itemPrice is a valid number
  if (!isNaN(itemPrice)) {
    return acc + itemPrice;
  }

  // If itemPrice is not a valid number, log a warning and skip this item
  console.warn(`Invalid price for item: ${item.name}. Skipping.`);
  return acc;
}, 0);

// Ensure that totalPrice is a valid number, or fallback to 0 if it's NaN
const validTotalPrice = isNaN(totalPrice) ? 0 : totalPrice;

// Format total price as a string with commas and two decimal places
const formattedTotalPrice = validTotalPrice.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

  
  const handelDelete=(item)=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`http://localhost:5000/carts/${item?._id}`,{
        method:"DELETE"
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.deletedCount>0){
          refetch()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
       })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }

  return (
    <div className="w-full bg-slate-50">
         <h1 className="text-3xl font-bold text-center p-6">Hey {user?.displayName}, its Your product Cart</h1>
      <div className="text-center">
   
      <h2 className="text-3xl font-bold">Total Order: {cart?.length}</h2>
    
      </div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>

        <th>P Image</th>
        <th>P Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((item,index)=>(
  <tr key={item?._id}>
  <th>
   {index+1}
  </th>
  <td>
    <div className="flex items-center gap-3">
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={item?.img} alt="Avatar Tailwind CSS Component" />
        </div>
      </div>
     
    </div>
  </td>
 
  <td>{item?.name}</td>
  <td>
  <span>
    <button onClick={() => decreaseQuantity(item._id)} className="btn btn-ghost">
      -
    </button>
  </span>
  <span>{item.quantity !== undefined ? String(item.quantity) : 'N/A'}</span>

  <span>
    <button onClick={() => increaseQuantity(item._id)} className="btn btn-ghost">
      +
    </button>
  </span>
</td>



  <td>
   <span>${item?.price}</span>
  </td>
  <td>
   <span>  <button onClick={()=>handelDelete(item)} className="btn btn-ghost"><FaTrashAlt className="text-red-600"/></button></span>
  </td>
</tr>
      ))}
    
     
     
    
      
    </tbody>
   
    
    
  </table>
  <div className="divider"></div>
  <div className="justify-end flex">
  <h2 className="text-3xl font-bold">Total Price: {String(formattedTotalPrice)}</h2>

        <button className="btn btn-sm btn-success">Pay</button>
  </div>
</div>
    </div>
  );
};

export default Mycart;
