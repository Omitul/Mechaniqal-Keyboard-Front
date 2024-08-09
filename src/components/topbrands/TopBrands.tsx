import { useEffect, useState } from "react";

const TopBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("topbrands.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch brands");
        }
        return response.json();
      })
      .then((data) => {
        setBrands(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 mt-4">Top Brands</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{brand.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
