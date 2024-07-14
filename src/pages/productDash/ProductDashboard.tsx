import DataTable from "react-data-table-component";

const ProductDashboard = () => {
  const columns = [
    {
      name: "Image",
      cell: (row) => (
        <img
          src={row.image}
          alt="Product"
          style={{ width: "50px", height: "auto" }}
        />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
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
      name: "Description",
      selector: (row) => row.Description,
    },
  ];
  const data = [
    {
      id: 1,
      name: "omi",
      brand: "Brand A",
      price: "$100",
      description: "Lorem ipsum dolor sit amet.",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      id: 2,
      name: "aahare",
      brand: "Brand B",
      price: "$150",
      description: "Consectetur adipiscing elit.",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
  ];

  return (
    <div className="p-10">
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
};

export default ProductDashboard;
