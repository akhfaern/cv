import React from "react";
import QRCode from "react-qr-code";

const References = () => {
  return (
    <div className="flex mb-4">
      <div className="border-4 border-sky-900 p-2 mt-4">
        <QRCode
          value="https://docs.google.com/document/d/1VqmGa2cW3Lgd_BZb5EXHy46jl-ZjgAhxfZXx4qaoKvs/edit?usp=sharing"
          size={96}
        />
      </div>
    </div>
  );
};

export default References;
