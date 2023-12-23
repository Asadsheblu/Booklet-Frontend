import { useState } from "react";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProduct from "../../../hooks/useProduct";
import ProductCard from "./ProductCard";
const AllProduct = () => {
  const [serach,setSerach]=useState([])
  // const [tabindex, setTabindex] = useState(0);
  const [products] = useProduct();
  // const panjabi = products.filter((item) => item.category === "Panjabi");
  // const casual = products.filter((item) => item.category === "Casual");
  // const ToiletPaper = products.filter(
  //   (item) => item.category === "ToiletPaper"
  // );
  return (
    <div className="container mx-auto ">
        <label htmlFor="exampleFormControlInput1">Product Category</label>
      <select name="title" className="form-control w-75"  onChange={(e)=>{setSerach(e.target.value)}}>
      <option value="">Select Category</option>
     
      <option value="Other Snacks">Other Snacks</option>
      <option value="Casual">Casual</option>
      <option value="Panjabi"> Panjabi </option>
      <option value="T-Shirts">T-Shirts</option>
      <option value="Sarees">Sarees</option>
      <option value="Toilet Paper">Toilet Paper</option>
      <option value="Bath & Body Accessories">Bath & Body Accessories</option>
      <option value="Mineral Water">Mineral Water</option>
      <option value="Mobiles">Mobiles</option>
      <option value="Herbs & Spices">Herbs & Spices</option>
      <option value="Washing Powder">Washing Powder</option>
      <option value="Fabric Upholstery">Fabric Upholstery</option>
      <option value="IP Security Systems"> IP Security Systems </option>
      <option value="Wafers"> Wafers </option>
      <option value="Grinders"> Grinders </option>
      <option value="Shaving & Grooming">  Shaving & Grooming </option>
      <option value="Fan"> Fan </option>
      <option value="Portable Keyboards ">  Portable Keyboards  </option>
      <option value="Bag"> Bag </option>
      <option value="Chest Freezers">  Chest Freezers </option>
      <option value="Headphones & Headsets Accessories">  Headphones & Headsets Accessories </option>
     
    </select>
    <div className="grid  md:grid-cols-4 sm:grid-cols-2 gap-3">
    {
      products
      .filter((data)=>{
          if(serach==""){
            return data
          }
          else if(data.category ? data.category.toLowerCase().includes(serach.toLowerCase()):""){
            return data
          }
        })
        .map((item)=>(
          <ProductCard key={item?._id} item={item}></ProductCard>
        ))

       
    }
    </div>
      {/* <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
        <TabList>
          <Tab>Panjabi</Tab>
          <Tab>Casual</Tab>
          <Tab>Toilet Paper</Tab>
        </TabList>
        <TabPanel>
          <div className="grid  md:grid-cols-4 sm:grid-cols-1 gap-3">
            {panjabi.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <ProductCard key={item?._id} item={item}></ProductCard>
            ))}{" "}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid  md:grid-cols-4 sm:grid-cols-1 gap-3">
            {casual.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <ProductCard key={item?._id} item={item}></ProductCard>
            ))}{" "}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid  md:grid-cols-4 sm:grid-cols-1 gap-3">
            {ToiletPaper.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <ProductCard key={item?._id} item={item}></ProductCard>
            ))}{" "}
          </div>
        </TabPanel>
      </Tabs> */}
    </div>
  );
};

export default AllProduct;
