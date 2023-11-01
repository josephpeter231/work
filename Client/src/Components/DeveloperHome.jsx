import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="h-full flex flex-col">
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

      <div className=" flex-grow mx-20 mb-12 h-full">
      <div className="w-full flex flex-row flex-grow h-full ">

      

      <div className="flex flex-col w-full h-full border-gray-600  border-2 px-16 mr-2 py-5">

          <div>
            <h1 className="text-black font-bold text-2xl mt-10">PROJECTS </h1>
          </div>
          <div className="w-96  p-2 border-2 border-gray-300  rounded-md flex h-10 mt-5 ">
            <input
              className="w-full py-2 px-3 outline-none text-black"
              type="text"
              placeholder="Search Projects"
            />
          </div>

        <div className="mt-8 border-t-2 p-5 overflow-y-auto">
            <Link to="/developerconfig">
                <div className="flex flex-row items-center mb-4 border-b pb-4">
                <img src="src/assets/Group 5.png" height={60} width={60} alt="" />
                <h2 className="text-black font-medium text-xl ml-6">File Name</h2>
                </div>
            </Link>

            <Link to="/developerconfig">
                <div className="flex flex-row items-center mb-4 border-b pb-4">
                <img src="src/assets/Group 5.png" height={60} width={60} alt="" />
                <h2 className="text-black font-medium text-xl ml-6">File Name</h2>
                </div>
            </Link>

            <Link to="/developerconfig">
                <div className="flex flex-row items-center border-b pb-4">
                <img src="src/assets/Group 5.png" height={60} width={60} alt="" />
                <h2 className="text-black font-medium text-xl ml-6">File Name</h2>
                </div>
            </Link>
        </div>

      </div>

    </div>
    </div>
    </div>
  )
}

export default Home