import { useEffect, useState } from "react";
import { apiservice } from "../services/api";
//import axios from "axios"

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //search product and sort product
  const [search, setSearch] = useState("");
  const [sortdata, setSortdata] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        //First time loading message will be visible before fetching a data

        const response = await apiservice.get("/products");
        //console.log(response.data.products)
        const result = await response.data;
        console.log(result.products);
        setProducts(result.products);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch products !!!");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* Create function for search and sort data */
  let filterProducts = products.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  /* Sorting */
  if(sortdata === "low"){
    filterProducts.sort((a,b)=>{
      return a.price - b.price
    })
  }

  if(sortdata === "high"){
    filterProducts.sort((a,b)=>{
      return b.price - a.price
    })
  }

  if (loading) {
    return (
      <h1 className="text-blue-500 text-center mt-28 text-7xl">
        Please Wait for few second<span className="loading-icon">...</span>
      </h1>
    );
  }

  if (error) {
    return <h1 className="text-red-500 text-3xl text-center">{error}</h1>;
  }

  return (
    <div className="">
      <div className="flex mb-20 gap-10 justify-center">
        <div>
          {/* search */}
          <input
            type="text"
            placeholder="Enter Product keyword.."
            className="border-2 p-3 rounded-2xl"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div>
          {/* sort */}
          <select
            className="border-2 p-3 rounded-2xl"
            value={sortdata}
            onChange={(event) => setSortdata(event.target.value)}
          >
            <option value="">Sort By Price</option>
            <option value="low">Low ➡️ High</option>
            <option value="high">High ➡️ Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filterProducts.map((item) => {
          return (
            <div key={item.id} className="">
              <div className="border-2 rounded-2xl p-3 h-115">
                <div className="flex justify-center bg-gray-300 rounded-2xl">
                  <img
                    src={item.thumbnail}
                    alt={item.tile}
                    loading="lazy"
                    width="200px"
                  />
                </div>
                <div className="font-bold text-center text-xl">
                  {item.title}
                </div>
                <div className="text-justify mt-2">{item.description}</div>
                <div className="font-bold mt-2 text-xl text-center">
                  Price - Rs. {item.price}
                </div>
                {/* <div className="text-2xl font-bold text-center">
                  ⭐ {item.rating}
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
