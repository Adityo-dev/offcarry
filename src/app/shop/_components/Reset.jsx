const Reset = ({ resetFilters }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold">Product</h2>
      <button
        onClick={resetFilters}
        className="text-blue-500 hover:text-blue-600"
      >
        Reset
      </button>
    </div>
  );
};

export default Reset;
