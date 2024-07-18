import DataTable from "react-data-table-component";
import { ProductSlice } from "../../redux/features/products/ProductSlice";

const ProductTable = () => {
  const { data, isLoading } = ProductSlice.useGetProductQuery({});

  if (isLoading) {
    <p>Loading.......</p>;
  }
  if (!data) {
    return <p>No data is present</p>;
  }
  console.log(data);
  const tdata = data.data;

  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.name,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      cell: (row) => (
        <button
          className="btn bg-purple-400 ml-60"
          onClick={() => handleUpdate(row)}
        >
          Update
        </button>
      ),
    },
    {
      cell: (row) => (
        <button className="btn bg-red-600" onClick={() => handleDelete(row)}>
          Delete
        </button>
      ),
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={tdata}></DataTable>
    </div>
  );
};

export default ProductTable;
