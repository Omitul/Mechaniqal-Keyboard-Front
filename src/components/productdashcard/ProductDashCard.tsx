const ProductDashCard = ({ table }) => {
  const { id, name, job, color } = table;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          {/* Only render header row when id exists (assuming id is a unique identifier) */}
          {id && (
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          )}
        </thead>
        {/* body */}
        <tbody>
          {/* Render table rows */}
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{job}</td>
            <td>{color}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDashCard;
