import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="spinner-container">
      {loading && <ClipLoader size={100} className="custom-spinner" />}
    </div>
  );
};

export default Spinner;
