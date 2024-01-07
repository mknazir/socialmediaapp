import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectModalState } from "../../Features/ModalSlice";

export default function CreatePost({ onClose }) {
  const showModal = useSelector(selectModalState);

  // State variables for form fields
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "https://api.cloudinary.com/v1_1/${cloudName}/upload dyttbqsqg ",
  });

  const handleCloseModal = () => {
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    // Update the corresponding field in formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCreatePost = () => {
    console.log(formData);

    // Close the modal
    handleCloseModal();
  };

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between py-4 px-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-l font-semibold">
                    Create Post
                  </h3>
                </div>
                <div className="border w-full h-[500px] p-6">
                  <input
                    placeholder="Caption ..."
                    name="title"
                    className="py-4 w-full mb-3 border shadow px-4"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                  <textarea
                    rows={10}
                    className="w-full border shadow p-4 resize-none mb-3"
                    placeholder="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                  <input
                    type="file"
                    name="image"
                    className="py-4 w-full mb-3 border shadow px-4"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCreatePost}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}