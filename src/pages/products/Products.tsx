import { useState, useEffect } from "react";
import { useGetProductQuery } from "../../redux/features/products/ProductApi";
import { RowData } from "../../types";
import ProductsDetails from "./ProductsDetails";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<RowData[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [sortOption, setSortOption] = useState("");

  // Fetch initial and search-based data
  const { data, isLoading, error } = useGetProductQuery({
    searchTerm: isSearchActive ? searchTerm : "",
    sortOption,
  });

  useEffect(() => {
    if (data) {
      setProducts(data.data);
    }
  }, [data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setIsSearchActive(true);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSortOption("");
    setIsSearchActive(false);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-2xl text-center">
        No product is available of this name or brand!
      </p>
    );
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
      <div className="flex flex-row justify-start w-28 gap-x-10 ml-10">
        <button onClick={handleClearFilters} className="btn btn-primary">
          Clear Filter
        </button>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="p-2 rounded-lg bg-gray-700 text-white w-60"
        >
          <option value="priceAscending">Price: Low to High</option>
          <option value="priceDescending">Price: High to Low</option>
        </select>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
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
