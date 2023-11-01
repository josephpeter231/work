import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";

const Configuration = () => {
  const [editMode, setEditMode] = useState(false);

  const obj = {
    Name: "SSSS",
    version: "1.234",
    fields: [
      {
        fieldLabel: "aaa",
        fieldValue: "bbb",
        editAccess: "yes",
      },
      {
        fieldLabel: "cc",
        fieldValue: "dd",
        editAccess: "no",
      },
    ],
  };

  const formik = useFormik({
    initialValues: obj, // Set initial values from obj
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
      setEditMode(false); // Exit edit mode after saving
    },
  });

  

  const editSaveModeToggle = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="header flex flex-1 flex-row bg-blue-600 py-2 mb-10 w-full px-20">
        <div className="flex flex-row  ml-16 ">
          <a className="text-white flex flex-row justify-start items-center font-bold text-xl font-sans">
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
            className="text-white text-xl  items-center font-semibold font-sans text-center"
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

      <div className="w-full px-20">
        <div className="flex flex-col border-2 border-gray-200 w-full px-8 mb-7 pb-8">
          <div>
            <h2 className="text-gray-700 font-semibold text-2xl mt-10 underline mb-8">
              CONFIGURATION:
            </h2>
          </div>

          <div className="p-4 bg-gray-100 rounded-md shadow-md mb-5">
            <h2 className="text-xl font-semibold text-black mb-5">Name:</h2>
            <div className="py-2 px-2 rounded border border-gray-300  text-black ">{obj.Name}</div>
          </div>

          <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-black mb-5">Version:</h2>
            <div className="py-2 px-2 rounded border border-gray-300  text-black ">{obj.version}</div>
          </div>

          {formik.values.fields.map((field, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md mt-5">
              
              <input
                type="text"
                name={`fields[${index}].fieldLabel`}
                placeholder="Field Label"
                onChange={formik.handleChange}
                value={field.fieldLabel}
                className="py-2 px-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black mb-4"
                disabled={!editMode || field.editAccess === "no"} 
              />
              <input
                type="text"
                placeholder="Enter value"
                name={`fields[${index}].fieldValue`}
                onChange={formik.handleChange}
                value={field.fieldValue}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black"
                disabled={!editMode || field.editAccess === "no"} 
              />
              
            </div>
          ))}

           

          <div className="mt-4">
            {editMode ? (
              <button
                className="bg-green-600 text-white px-4 py-2 block rounded-md max-w-xs"
                onClick={() => {
                  editSaveModeToggle();
                  formik.handleSubmit();
                }}
              >
                Save Changes
              </button>
            ) : (
              <button
                className="bg-red-600 text-white px-8 py-2 flex rounded-md max-w-xs"
                onClick={editSaveModeToggle}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
