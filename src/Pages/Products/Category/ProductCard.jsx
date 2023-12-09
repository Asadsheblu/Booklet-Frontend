

const ProductCard = ({item}) => {

    const {img,name,category,price}=item;
    console.log(img);
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
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
              
             
          
                </div>
                
       
        </div>
    );
};

export default ProductCard;