import { useState, useEffect } from "react";
import Swal from "sweetalert2";

type updateproduct = {
  name: string;
  brand: string;
  price: number;
  description: string;
  available_quantity: number;
  rating: number;
  image: string;
};

type UpdateModalProps = {
  product: updateproduct;
  onUpdate: (updatedProduct: updateproduct) => Promise<void>;
  onClose: () => void;
};

const UpdateModal = ({ product, onUpdate, onClose }: UpdateModalProps) => {
  const [formData, setFormData] = useState<updateproduct>({
    name: "",
    brand: "",
    price: 0,
    description: "",
    available_quantity: 0,
    rating: 0,
    image: "",
  });

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue =
      name === "price" || name === "available_quantity" || name === "rating"
        ? parseFloat(value) || 0
        : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await onUpdate(formData);

      onClose();
      await Swal.fire({
        title: "Product updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error(error);
      await Swal.fire("Failed to update product", "", "error");
    }
  };

  return (
    <div className="p-10">
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-green-100 p-8 rounded-lg z-10 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Update Product</h2>
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
              <label className="block font-semibold">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price.toString()}
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
              <label className="block font-semibold">Available Quantity</label>
              <input
                type="number"
                name="available_quantity"
                value={formData.available_quantity.toString()}
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
                value={formData.rating.toString()}
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
              <button
                type="submit"
                className="btn bg-green-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
              <button
                type="button"
                className="btn bg-gray-300 text-black px-4 py-2 rounded ml-2"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
