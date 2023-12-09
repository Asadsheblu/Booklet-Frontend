import { useEffect, useState } from "react";

const useCategory=()=>{
    const [category,setCategory]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("https://nextcommerce1backend.onrender.com/product")
        .then(res=>res.json())
        .then(data=>{
          setLoading(false)
            setCategory(data)
        })

    },[])
    return [category,loading]
}
export default useCategory