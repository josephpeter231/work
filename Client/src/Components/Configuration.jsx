import { useState } from "react";
import { Link } from "react-router-dom";
const Configuration = () => {
  const [inputs, setInputs] = useState([{ label: "", value: "" }]);
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState("");
  const [isEditMode1, setIsEditMode1] = useState(true);
  const [isEditMode2, setIsEditMode2] = useState(true);

  const handleAddNewItem = () => {
    setInputs([...inputs, { label: newLabel, value: newValue }]);
    setNewLabel("");
    setNewValue("");
  };

  const handleToggleEdit1 = () => {
    setIsEditMode1(!isEditMode1);
  };

  const handleToggleEdit2 = () => {
    setIsEditMode2(!isEditMode2);
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="header flex flex-1 flex-row bg-blue-600 py-2 mb-10 w-full px-20">
        <div className="flex flex-row justify-center items-center ml-16 w-full">
          <a className="text-white flex flex-row justify-center items-center font-bold text-xl font-sans">
            ACM
            <img
              src="src/assets/acm2.png"
              className="ml-2"
              height={30}
              width={30}
              alt=""
            />
          </a>
        </div>
        <div className="flex w-full justify-center items-center">
          <a
            href=""
            className="text-white text-xl justify-center items-center font-semibold font-sans text-center"
          >
            PROJECT NAME
          </a>
        </div>
        <div className="flex justify-center items-center ml-auto self-end">
          <Link to="/profile">
            <img
              src="src/assets/profile.png"
              height={50}
              width={50}
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-row h-full w-full px-20">
        <div className="flex flex-col h-full border-2 border-gray-200 px-8 w-full">
          <div>
            <h2 className="text-gray-700 font-semibold text-2xl mt-10 underline mb-8">
              CONFIGURATION:
            </h2>
          </div>

          <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-black mb-5">Name:</h2>
            <input
              type="text"
              placeholder="Application Name"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black"
              disabled={!isEditMode1}
            />
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-black mb-5">Version:</h2>
            <input
              type="text"
              placeholder="Application Name"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black"
              disabled={!isEditMode2}
            />
          </div>

          {inputs.map((input, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md mt-5">
              <input
                type="text"
                placeholder={`Enter Field`}
                className="py-2 px-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black mb-4"
                disabled={!isEditMode1}
              />
              <input
                type="text"
                placeholder={`Enter value`}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black"
                disabled={!isEditMode2}
              />
            </div>
          ))}
          <div className="flex mt-4">
            <button
              className={`${
                isEditMode1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-500"
              } px-4 py-2 flex rounded-md mx-2`}
              onClick={handleToggleEdit1}
            >
              {isEditMode1 ? "Edit: Yes" : "Edit: No"}
            </button>
            <button
              className={`${
                isEditMode2
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-500"
              } px-4 py-2 flex rounded-md mx-2`}
              onClick={handleToggleEdit2}
            >
              {isEditMode2 ? "Edit: Yes" : "Edit: No"}
            </button>
          </div>

          <button
            className="bg-blue-600 text-white px-3 py-2 flex rounded-md mt-4 max-w-xs ml-2"
            onClick={handleAddNewItem}
          >
            Add New
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Configuration;
