import React from "react";
import QRCode from "react-qr-code";

const Certificates = () => {
  return (
    <div className="flex mb-4">
      <div className="border-4 border-sky-900 p-2 mt-4 dark:border-sky-300">
        <QRCode
          value="https://drive.google.com/drive/folders/1Yc69g0Xzs03dmEuR7jOPwJtrqMKkWaZD?usp=sharing"
          size={96}
        />
      </div>
    </div>
  );
};

export default Certificates;
