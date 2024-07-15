import { useState } from "react";
import DataTable from "react-data-table-component";

const ProductDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    quantity: "",
    rating: "",
    image: "",
  });

  const toggleModal = () => {
    if (!showModal) {
      setFormData({
        name: "",
        brand: "",
        price: "",
        description: "",
        quantity: "",
        rating: "",
        image: "",
      });
    }
    setShowModal(!showModal);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("check", formData);

    setFormData({
      name: "",
      brand: "",
      price: "",
      description: "",
      quantity: "",
      rating: "",
      image: "",
    });

    setShowModal(false);
  };

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

  const data = [
    {
      id: 1,
      name: "omi",
      brand: "Brand A",
      price: "$100",
      description: "Lorem ipsum dolor sit amet.",
      avalablequantity: 2,
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      id: 2,
      name: "aahare",
      brand: "Brand B",
      price: "$150",
      description: "Consectetur adipiscing elit.",
      avalablequantity: 2,

      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
  ];

  return (
    <div className="p-10">
      <DataTable columns={columns} data={data} />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-green-100 p-8 rounded-lg z-10">
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block  font-semibold"> Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block  font-semibold">Price</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="form-input mt-1"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold">Description</label>

                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-input mt-1"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block  font-semibold">
                  Available Quantity
                </label>

                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="form-input mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block  font-semibold">Rating:</label>

                <input
                  type="text"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="form-input mt-1"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block  font-semibold">Image:</label>

                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="form-input mt-1"
                  required
                />
              </div>

              <div className="flex justify-end mt-4">
                <button type="submit" className="btn bg-green-500">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn bg-gray-300 ml-2"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-row items-center justify-center gap-4 mt-4">
        <button className="btn btn-accent" onClick={toggleModal}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ProductDashboard;
