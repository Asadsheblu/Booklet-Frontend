import { useEffect, useState } from "react";

const useProduct=()=>{
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("http://localhost:5000/product")
        .then(res=>res.json())
        .then(data=>{
          setLoading(false)
          setProducts(data)
        })

    },[])
    return [products,loading]
}
export default useProduct