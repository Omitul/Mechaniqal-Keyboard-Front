import { useState, useEffect } from "react";
import { useGetProductQuery } from "../../redux/features/products/ProductApi";
import { RowData } from "../../types";
import ProductsDetails from "./ProductsDetails";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<RowData[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // initially fetching
  const { data, isLoading, error } = useGetProductQuery("");

  // search er fetching
  const {
    data: searchData,
    isLoading: searchLoading,
    error: searchError,
  } = useGetProductQuery(searchTerm);

  // this is for initial data effect ( search kora hoinai )
  useEffect(() => {
    if (data && !isSearchActive) {
      setProducts(data.data);
    }
  }, [data, isSearchActive]);

  // this is for search dependend data effect ( search applied )
  useEffect(() => {
    if (searchData && isSearchActive) {
      setProducts(searchData.data);
    }
  }, [searchData, isSearchActive]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  if (isLoading || (isSearchActive && searchLoading)) {
    return <p>Loading...</p>;
  }

  if (error || (isSearchActive && searchError)) {
    return <p>Error fetching products! Please try again.</p>;
  }

  return (
    <div>
      <div className="flex justify-end mt-5 mr-5">
        <div className=" flex flex-row gap-x-3">
          <div>
            <input
              type="text"
              placeholder="Search by name or brand"
              value={searchTerm}
              onChange={handleSearchChange}
              className="input"
            />
          </div>
          <div>
            <button onClick={handleSearchClick} className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4 p-10">
          {products.length > 0 ? (
            products.map((prod: RowData) => (
              <ProductsDetails key={prod._id} prod={prod} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
