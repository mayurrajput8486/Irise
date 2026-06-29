import { useEffect, useState } from "react";
import { apiservice } from "../services/api";
//import axios from "axios"

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  //For API fetch we use async and await
  const fetchProducts = async () => {
    const response = await apiservice.get("/products");
    //console.log(response.data.products)
    const result = response.data.products;
    console.log(result);
    setProducts(result);
  };

  //Now comp is continiously in loop and render multiple time
  //to handle this side effect we use useEffect()
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center mb-5 mt-5">My Products List</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((item) => {
          return (
            <div key={item.id} className="">
              <div className="border-2 w-80 rounded-2xl p-3 h-140">
                <div>
                  <img src={item.thumbnail} alt={item.tile} loading="lazy" className="w-full object-cover"/>
                </div>
                <div className="font-bold text-center text-xl">
                  {item.title}
                </div>
                <div className="text-justify mt-2">{item.description}</div>
                <div className="font-bold mt-2 text-xl text-center">
                  Price - Rs. {item.price}
                </div>
                <div className="text-2xl font-bold text-center">
                  ⭐ {item.rating}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
