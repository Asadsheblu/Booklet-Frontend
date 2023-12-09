
import { FaFire } from "react-icons/fa";
import useProduct from "../../../hooks/useProduct";


const Trending = () => {
    const [products]=useProduct()
    const trending=products.filter(item=>item.title="Trending")
    return (
        <div className="container mx-auto pt-16">
        <h6 className="font-bold flex text-2xl">Trending <FaFire className="text-red-500 text-2xl"/></h6>
           <div className="grid  md:grid-cols-5 sm:grid-cols-1 gap-3">
          
            {
                trending.map(item=><>

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
        </div>
    );
};

export default Trending;