import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProduct from "../../../hooks/useProduct";
import ProductCard from "./ProductCard";
const AllProduct = () => {
  const [tabindex, setTabindex] = useState(0);
  const [products] = useProduct();
  const panjabi = products.filter((item) => item.category === "Panjabi");
  const casual = products.filter((item) => item.category === "Casual");
  const ToiletPaper = products.filter(
    (item) => item.category === "ToiletPaper"
  );
  return (
    <div className="container mx-auto ">
      <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
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
      </Tabs>
    </div>
  );
};

export default AllProduct;
