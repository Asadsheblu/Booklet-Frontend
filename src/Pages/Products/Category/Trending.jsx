
import { FaFire } from "react-icons/fa";
import useProduct from "../../../hooks/useProduct";
import ProductCard from "./ProductCard";


const Trending = () => {
    const [products]=useProduct()
    const trending=products.filter(item=>item.title="Trending")
    return (
        <div className="container mx-auto pt-16">
        <h6 className="font-bold flex text-2xl">Trending <FaFire className="text-red-500 text-2xl"/></h6>
           <div className="grid  md:grid-cols-5 sm:grid-cols-1 gap-3">
          
            {
                trending.map(item=><>

<ProductCard key={item?._id} item={item}></ProductCard>
              
                </>)
                
            }
                </div>
        </div>
    );
};

export default Trending;