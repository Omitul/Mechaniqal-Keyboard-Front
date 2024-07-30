import DataTable from "react-data-table-component";
import { useDeleteProductMutation } from "../../redux/features/products/ProductSlice";
import { useDispatch } from "react-redux";
import { useGetProductQuery } from "../../redux/features/products/ProductSlice";

const ProductTable = () => {
  const { data, isLoading } = useGetProductQuery({});

  if (isLoading) {
    <p>Loading.......</p>;
  }
  if (!data) {
    return <p>No data is present</p>;
  }

  const dispatch = useDispatch();

  const handleDelete: (arg0: any) => void(ProductId: string) => {
        dispatch(useDeleteProductMutation(ProductId));
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
          onClick={() => handleUpdate(row.id)}
        >
          Update
        </button>
      ),
    },
    {
      cell: (row) => (
        <button className="btn bg-red-600" onClick={() => handleDelete(row.id)}>
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
function handleUpdate(id: any): void {
  throw new Error("Function not implemented.");
}
