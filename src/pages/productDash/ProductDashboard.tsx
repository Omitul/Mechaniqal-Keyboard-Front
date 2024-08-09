import { useState } from "react";
import { useAddProductMutation } from "../../redux/features/products/ProductApi";
import ProductTable from "./ProductTable";

const ProductDashboard = () => {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: Number(""),
    description: "",
    available_quantity: Number(""),
    rating: Number(""),
    image: "",
  });

  const toggleModal = () => {
    if (!showModal) {
      setFormData({
        name: "",
        brand: "",
        price: Number(""),
        description: "",
        available_quantity: Number(""),
        rating: Number(""),
        image: "",
      });
    }
    setShowModal(!showModal);
  };

  if (isLoading) {
    return <p>Loading......</p>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(!showModal);
    try {
      const updatedData = {
        ...formData,
        price: Number(formData.price),
        available_quantity: Number(formData.available_quantity),
        rating: Number(formData.rating),
      };

      await addProduct(updatedData).unwrap();
      console.log("Product added successfully!");
      setFormData({
        name: "",
        brand: "",
        price: Number(""),
        description: "",
        available_quantity: Number(""),
        rating: Number(""),
        image: "",
      });
      setShowModal(!showModal);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-12 mb-28">
      <ProductTable />
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-green-100 p-8 rounded-lg z-10">
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold">Name</label>
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
                <label className="block font-semibold">Price</label>
                <input
                  type="number"
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
                <label className="block font-semibold">
                  Available Quantity
                </label>
                <input
                  type="number"
                  name="available_quantity"
                  value={formData.available_quantity}
                  onChange={handleInputChange}
                  className="form-input mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="form-input mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Rating</label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="form-input mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Image</label>
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
