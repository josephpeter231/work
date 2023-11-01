import { Link } from "react-router-dom";
import { useFormik } from "formik";

const Configuration = () => {
  const formik = useFormik({
    initialValues: {
      Name:"",
      version:"",
      fields: [
        {
          fieldLabel: "",
          fieldValue: "",
          editAccess: false,
        },
      ],
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  const addNewField = () => {
    formik.setFieldValue("fields", [
      ...formik.values.fields,
      {
        fieldLabel: "",
        fieldValue: "",
        editAccess: false,
      },
    ]);
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="header flex flex-1 flex-row bg-blue-600 py-2 mb-10 w-full px-20">
        <div className="flex flex-row  ml-16 w-full">
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
        <div className="flex w-full  items-center">
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
              height={70}
              width={70}
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
            <input
              type="text"
              placeholder="Application Name"
              name="Name"
              onChange={formik.handleChange}
              value={formik.values.Name}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black"
            />
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-black mb-5">Version:</h2>
            <input
              type="text"
              placeholder="Application Version"
              name="version"
              onChange={formik.handleChange}
              value={formik.values.version}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black"
            />
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
              />
              <input
                type="text"
                placeholder={`Enter value`}
                name={`fields[${index}].fieldValue`}
                onChange={formik.handleChange}
                value={field.fieldValue}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black"
              />
              <div className="flex items-center space-x-2 mt-3">
                <h2 className="text-black font-semibold text-md">Edit Access:</h2>
                <span className="text-black">No</span>
                <label
                  className={`${
                    field.editAccess ? "bg-blue-500" : "bg-gray-300"
                  } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-gray-400 rounded-full cursor-pointer transition-colors duration-200 ease-in-out`}
                >
                  <input
                    type="checkbox"
                    name={`fields[${index}].editAccess`}
                    onChange={formik.handleChange}
                    checked={field.editAccess}
                    className="opacity-0 w-0 h-0"
                  />
                  <span
                    className={`${
                      field.editAccess ? "translate-x-5" : "translate-x-0"
                    } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition-transform duration-200 ease-in-out`}
                  ></span>
                </label>
                <span className="text-black">Yes</span>
              </div>
            </div>
          ))}

          <div>
            <button
              className="bg-blue-600 text-white px-3 py-2 flex rounded-md max-w-xs my-4 "
              onClick={addNewField}
            >
              Add New 
            </button>

            <button
              className="bg-red-600 text-white px-3 py-2 flex rounded-md max-w-xs "
              onClick={formik.handleSubmit}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
