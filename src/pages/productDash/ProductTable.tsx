import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import UpdateModal from "../../components/updatemodalcard/UpdateModal";
import { useState } from "react";
import { Product, RowData } from "../../types";
import {
  useDeleteProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/products/ProductApi";

const ProductTable = () => {
  const initialProduct: Product = {
    name: "",
    brand: "",
    price: 0,
    description: "",
    available_quantity: 0,
    rating: 0,
    image: "",
  };

  const { data, isLoading } = useGetProductQuery({});
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<Product>(initialProduct);

  if (isLoading) {
    return <p>Loading.......</p>;
  }

  if (!data) {
    return <p>No data is present</p>;
  }

  const handleUpdate = async (data: RowData) => {
    if (!data._id) {
      console.error("Invalid product ID:", data._id);
      return;
    }

    const updatedProduct = {
      name: data.name,
      brand: data.brand,
      price: Number(data.price),
      description: data.description,
      available_quantity: Number(data.available_quantity),
      rating: Number(data.rating),
      image: data.image,
    };

    setSelectedProduct({ ...data, ...updatedProduct });
    setShowUpdateModal(true);
  };

  const handleDelete = async (productId: string) => {
    if (!productId) {
      console.error("Invalid product ID:", productId);
      await Swal.fire("Invalid product ID", "", "error");
      return;
    }

    Swal.fire({
      title: "Are you sure you want to delete this product?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(productId).unwrap();
          Swal.fire("Deleted Successfully!", "", "success");
        } catch (error) {
          console.error("Failed to delete:", error);
          Swal.fire("Failed to delete!", "", "error");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const tdata = data.data;
  console.log("Product Data: ", tdata);

  const columns = [
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Product Name</div>
      ),
      selector: (row: RowData) => row.name,
      cell: (row: RowData) => (
        <div style={{ fontSize: "1.5rem" }}>{row.name}</div>
      ),
    },
    {
      name: <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Price</div>,
      selector: (row: RowData) => row.price,
      cell: (row: RowData) => (
        <div style={{ fontSize: "1.5rem" }}>{row.price}</div>
      ),
    },
    {
      name: <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Brand</div>,
      selector: (row: RowData) => row.brand,
      cell: (row: RowData) => (
        <div style={{ fontSize: "1.5rem" }}>{row.brand}</div>
      ),
    },
    {
      cell: (row: RowData) => (
        <button
          className="btn bg-purple-400 ml-52"
          onClick={() => handleUpdate(row)}
        >
          Update
        </button>
      ),
    },
    {
      cell: (row: RowData) => (
        <button
          className="btn bg-red-600 mr-52"
          onClick={() => handleDelete(row._id as string)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="hidden md:block">
        <DataTable columns={columns} data={tdata} />
      </div>
      <div className="md:hidden">
        {/* mobile or smaller device er jnno  */}
        {tdata.map((row: RowData) => (
          <div key={row._id} className="mb-4 p-4 border rounded-lg">
            <div className="text-lg font-bold">{row.name}</div>
            <div className="text-sm text-gray-500">Price: {row.price} BDT</div>
            <div className="text-sm text-gray-500">Brand: {row.brand}</div>
            <div className="mt-2 flex space-x-2">
              <button
                className="btn bg-purple-400 text-white py-2 px-4 rounded"
                onClick={() => handleUpdate(row)}
              >
                Update
              </button>
              <button
                className="btn bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => handleDelete(row._id as string)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* larger device  */}
      {showUpdateModal && selectedProduct && (
        <UpdateModal
          product={selectedProduct}
          onClose={() => setShowUpdateModal(false)}
          onUpdate={async (updatedProduct: Product) => {
            try {
              await updateProduct({
                id: selectedProduct._id as string,
                payload: updatedProduct,
              }).unwrap();
              setShowUpdateModal(false);
            } catch (error) {
              console.error("Update failed:", error);
              await Swal.fire("Failed to update product", "", "error");
            }
          }}
        />
      )}
    </div>
  );
};

export default ProductTable;
