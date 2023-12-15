// import { useEffect, useState } from "react";


import useProduct from "../../../hooks/useProduct";
import ProductCard from "./ProductCard";


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
           <div className="grid  md:grid-cols-4 sm:grid-cols-1 gap-3">
          
            {
                popular.map(item=><>

<ProductCard key={item?._id} item={item}></ProductCard>

              
                </>)
                
            }
                </div>
                <hr/>
        </div>
    );
};

export default Popular;