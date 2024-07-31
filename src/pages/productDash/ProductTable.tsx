import DataTable from "react-data-table-component";
import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../redux/features/products/ProductSlice";
import { useGetProductQuery } from "../../redux/features/products/ProductSlice";
import Swal from "sweetalert2";
import UpdateModal from "../../components/updatemodalcard/UpdateModal";
import { useState } from "react";
import { Product, RowData } from "../../types";

const ProductTable = () => {
  const initialProduct = {
    name: "",
    brand: "",
    price: Number(""),
    description: "",
    available_quantity: Number(""),
    rating: Number(""),
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
    setSelectedProduct(data);
    setShowUpdateModal(!showUpdateModal);

    try {
      await updateProduct({
        id: data._id as string,
        payload: data,
      }).unwrap();

      setShowUpdateModal(!showUpdateModal);
    } catch (error) {
      console.error(error);
      await Swal.fire("Failed to update product", "", "error");
    }
  };

  const handleDelete = async (productId: string) => {
    Swal.fire({
      title: "Are you sure want to delete this product?",
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
          console.error(error);
          Swal.fire("Failed to delete!", "", "error");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const tdata = data.data;
  console.log(tdata);

  const columns = [
    {
      name: "Product Name",
      selector: (row: RowData) => row.name,
    },
    {
      name: "Price",
      selector: (row: RowData) => row.price,
    },
    {
      name: "Brand",
      selector: (row: RowData) => row.brand,
    },
    {
      cell: (row: RowData) => (
        <button
          className="btn bg-purple-400 ml-2"
          onClick={() => handleUpdate(row)}
        >
          Update
        </button>
      ),
    },
    {
      cell: (row: RowData) => (
        <button
          className="btn bg-red-600"
          onClick={() => handleDelete(row._id as string)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={tdata} />
      {showUpdateModal && selectedProduct && (
        <UpdateModal
          product={selectedProduct}
          onClose={() => setShowUpdateModal(!showUpdateModal)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ProductTable;
