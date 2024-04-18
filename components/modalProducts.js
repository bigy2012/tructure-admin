"use client";

import React, { useEffect, useState } from "react";
import { GetInventoryById } from "../common/baseApi";

const Modal = ({ isOpen, onClose, productId }) => {
  if (!isOpen) return null;
  const [datas, setData] = useState([]);

  useEffect(() => {
    const getData = GetInventoryById(productId);
    const pushData = () => {
      getData.then(res => {
        setData(res);
      });
    };
    pushData();
  }, []);


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />
        <div className="relative bg-white rounded-lg w-1/2 p-5">
          <div className="absolute top-2 right-2">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div>
            {/* Modal content */}
            <h2 className="text-xl font-bold mb-4">รายละเอียด</h2>
            {datas.map((data, i) =>
              <p>
                {data.name}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
