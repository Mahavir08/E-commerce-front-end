import React from "react";

const Loader = () => {
  return (
    <div className="spinner-border text-warning" id="loader" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
