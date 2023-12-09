// import { useEffect, useState } from "react";


import useProduct from "../../../hooks/useProduct";


const Popular = () => {
  const [products]=useProduct();
  const popular=products.filter(item=>item.title==="Popular");
    // const [populars,setPopulars]=useState([])
    // useEffect(()=>{
    //     fetch("https://nextcommerce1backend.onrender.com/product")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data.filter(item=>item.title==="Popular");
    //        setPopulars(popularItems)
    //     })

    // },[])
    return (
        <div className="container mx-auto pt-16">
           <h6 className="font-bold flex text-2xl">Popular </h6>
           <div className="grid  md:grid-cols-5 sm:grid-cols-1 gap-3">
          
            {
                popular.map(item=><>

<div className="card  bg-base-100 shadow-xl">
  <figure><img src={item?.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h6 className="card-title">{item?.name}</h6>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
              
                </>)
                
            }
                </div>
                <hr/>
        </div>
    );
};

export default Popular;