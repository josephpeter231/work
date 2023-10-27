
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="h-full flex flex-col">
      <div className='header flex flex-1 flex-row bg-blue-600 py-2 mb-10  w-full'>
        <div className='flex flex-row justify-center items-center mr-12 ml-16 w- full'>
          <a  className='text-white flex flex-row justify-center items-center font-bold text-xl mr-16 font-sans'>ACM
           <img src="src/assets/acm2.png" className='ml-2' height={30} width={30} alt="" />
          </a>
          <a href="" className='text-white text-xl justify-center items-center font-semibold mr-16 font-sans'>Products</a>
          <a href="" className='text-white text-xl justify-center items-center font-semibold mr-16 font-sans'>Solutions</a>
          <a href="" className='text-white text-xl justify-center items-center font-semibold mr-16 font-sans'>About US</a>
          
        </div>
        <div className=" flex justify-center items-center ml-auto mr-10 self-end">
          <Link to = "/profile">
          <img src="src/assets/profile.png" height={50} width={50} alt="" />
          </Link>
        </div>
        
      </div>

      <div className=" flex-grow mx-20 mb-12 h-full">
      <div className="w-full flex flex-row flex-grow h-full ">

      

      <div className="flex flex-col w-2/3 h-full border-gray-600  border-2 px-16 mr-2">

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

            <div className="flex flex-row  items-center mb-5">
              <img src="src/assets/Group 5.png" height={60} width={60} alt="" />
              <h2 className="text-black font-medium text-xl ml-6">File Name</h2>
            </div>
            <div className="flex flex-row  items-center mb-5">
              <img src="src/assets/Group 5.png" height={60} width={60} alt="" />
              <h2 className="text-black font-medium text-xl ml-6">File Name</h2>
            </div>
            <div className="flex flex-row  items-center">
              <img src="src/assets/Group 5.png" height={60} width={60} alt="" />
              <h2 className="text-black font-medium text-xl ml-6">File Name</h2>
            </div>

          </div>

      </div>


      <div className="flex flex-col w-1/3  border-2 border-blue-600 px-16 h-full j  "> 

        <div>
          <h1 className="text-black font-bold text-2xl  mt-12">NEW PROJECT </h1>
        </div>
        <div className="flex flex-col justify-center items-center h-full ">

          <div className="border-2 border-blue-500 p-3 mt-5">
            <Link to='/config'><img src="src/assets/createNew.png" height={50} width={50} alt="" /></Link>
          </div>
          <h2 className="text-black font-semibold text-2xl mt-5">Create New Config</h2>

          <h4 className="text-gray-400 text-lg font-normal mt-5 text-center">Effortlessly Manage Your Projects</h4>

        </div>
      </div>

    </div>
    </div>
    </div>
  )
}

export default Home