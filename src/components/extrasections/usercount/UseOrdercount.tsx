const UseOrdercount = () => {
  return (
    <div className="stats shadow flex justify-center items-center">
      <div className="stat place-items-center">
        <div className="stat-title font-extrabold">Orders</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">From January 1st to February 1st</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title font-extrabold">Customers</div>
        <div className="stat-value text-secondary">4,200</div>
        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title font-extrabold">Viewers per day</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default UseOrdercount;
