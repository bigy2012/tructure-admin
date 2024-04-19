"use client";

import { GetInventoryById } from "@/common/baseApi";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { postData } from "./action";

export default function formInventory({ params }) {
  const [datas, setData] = useState([]);
  const inputRef = useRef(null);
  let title = "";

  useEffect(() => {
    if (parseInt(params.id) > 0) {
      const getData = GetInventoryById(params.id);
      const pushData = () => {
        getData.then(res => {
          setData(res);
        });
      };
      pushData();
    }
  }, []);

  if (params.id == 0 || params.id == "add") {
    title = "Create Inventory";
  } else {
    title = "Edit Inventory";
  }

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = event => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleOpenFileDialog = () => {
    inputRef.current.click();
  };

  async function onSubmit(event) {
    event.preventDefault();

    const {
      products_img,
      item_name,
      description,
      price,
      quantity,
      category_id
    } = event.target;

    const data = {
      products_img: products_img.value,
      name: item_name.value,
      description: description.value,
      price: price.value,
      category_id: category_id.value,
      quantity: quantity.value
    };

    const res = postData(data, "POST");

    res.then((res) => console.log(res))
    
    // window.location = "/";
  }

  return (
    <div>
      <div className="">
        <h1 className="text-xl font-bold">
          {title}
        </h1>
      </div>

      <div className="mt-5">
        <div className="bg-white p-5 rounded-lg">
          <form onSubmit={onSubmit}>
            <div>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex">
                  <div className="mt-4 mr-3">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="image"
                    >
                      อัพโหลดรูปภาพ
                    </label>
                    <div
                      className="bg-gray-50 p-2 w-[200px] h-[150px] border-2 border-dashed "
                      onClick={handleOpenFileDialog}
                    >
                      {selectedImage
                        ? <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Selected"
                            className="mt-2 w-full h-[120px] object-cover object-top "
                          />
                        : <div className="font-bold text-7xl text-gray-300 text-center flex justify-center mt-7">
                            +
                          </div>}
                    </div>

                    <input
                      type="file"
                      id="image"
                      name="products_img"
                      ref={inputRef}
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                      className=" focus:outline-none  focus:border-transparent hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <div>
                  <label for="item_name">ชื่อสินค้า</label>
                  <input
                    type="text"
                    id="item_name"
                    className="p-2 border w-full focus:outline-blue-300"
                    name="item_name"
                    placeholder="ชื่อสินค้า..."
                    required
                    value={datas && datas.length > 0 ? datas[0].name : null}
                    onChange={event => {
                      const value = event.target.value;
                      setData([{ item_name: value }]);
                    }}
                  />
                </div>
                <div>
                  <label for="price">ราคา</label>
                  <input
                    type="text"
                    id="price"
                    className="p-2 border w-full focus:outline-blue-300"
                    name="price"
                    required
                    placeholder="ราคา..."
                    value={datas && datas.length > 0 ? datas[0].price : null}
                    onChange={event => {
                      const value = event.target.value;
                      if (/^\d+$/.test(value) || value === "") {
                        setData([{ price: value }]);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div>
                  <label for="quantity">จำนวน</label>
                  <input
                    type="text"
                    id="quantity"
                    required
                    className="p-2 border w-full focus:outline-blue-300"
                    name="quantity"
                    placeholder="จำนวน..."
                    value={datas && datas.length > 0 ? datas[0].quantity : null}
                    onChange={event => {
                      const value = event.target.value;
                      if (/^\d+$/.test(value) || value === "") {
                        setData([{ quantity: value }]);
                      }
                    }}
                  />
                </div>
                <div>
                  <label for="category_id">หมวดหมู่สินค้า</label>
                  <select
                    required
                    className="p-2 border w-full focus:outline-blue-300"
                    name="category_id"
                    id="category_id"
                  >
                    <option value="1">หมวด 1</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 mt-5">
                <div>
                  <label for="description">รายละเอียดสินค้า</label>
                  <textarea
                    required
                    rows="5"
                    cols="3"
                    name="description"
                    id="description"
                    className="p-2 border w-full focus:outline-blue-300"
                    placeholder="รายละเอียดสินค้า..."
                    onChange={event => {
                      const value = event.target.value;
                      setData([{ description: value }]);
                    }}
                  >
                    {datas && datas.length > 0 ? datas[0].quantity : null}
                  </textarea>
                </div>
              </div>
              <div className="flex justify-end mt-3">
                <button
                  type="submit"
                  className="bg-green-400 rounded-full px-5 py-2 text-white"
                >
                  บันทึก
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
