import { useGetProductQuery } from "../../redux/features/products/ProductApi";
import { RowData } from "../../types";
import ProductsDetails from "./ProductsDetails";

const Products = () => {
  const { data, isLoading } = useGetProductQuery({});
  if (isLoading) {
    <p>Loading...</p>;
  }

  const tdata = data;
  console.log(tdata);

  return (
    <div>
      <div>
        <div className="grid grid-cols-2 gap-4 p-10">
          {tdata &&
            tdata.data.map((prod: RowData) => (
              <ProductsDetails key={prod._id} prod={prod}></ProductsDetails>
            ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Products;
