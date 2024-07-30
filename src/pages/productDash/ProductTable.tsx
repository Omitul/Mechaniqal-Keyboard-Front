import DataTable from "react-data-table-component";
import { useDeleteProductMutation } from "../../redux/features/products/ProductSlice";
import { useGetProductQuery } from "../../redux/features/products/ProductSlice";

const ProductTable = () => {
  const { data, isLoading } = useGetProductQuery({});
  // const {} = useDeleteProductMutation();
  const [deleteProduct, { isError }] = useDeleteProductMutation();
  console.log(isError);
  if (isLoading) {
    <p>Loading.......</p>;
  }
  if (!data) {
    return <p>No data is present</p>;
  }

  const handleDelete = async (productId: string): Promise<void> => {
    try {
      console.log(productId, "asenai");
      await deleteProduct(productId).unwrap(); // Use unwrap to handle successful or erroneous responses
      console.log("Product deleted successfully");
    } catch (error) {
      console.log("hoinai", error);
    }
  };

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
        // console.log(row._id),
        <button
          className="btn bg-purple-400 ml-60"
          onClick={() => handleUpdate(row.id as string)}
        >
          Update
        </button>
      ),
    },
    {
      cell: (row) => (
        <button
          className="btn bg-red-600"
          onClick={() => handleDelete(row._id)}
        >
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
