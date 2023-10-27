import '../App.css'
const Intro = () => {
  return (

    <div className="mx-20 h-full ">
      <div className=" flex flex-row h-full">

        <div className="w-1/3 h-full flex justify-center items-center">
          <img src = "src/assets/acm2.png" height={250} width={250} alt="" className=' '/> 
        </div>
        <div className="w-2/3">
          <h1 className="introHeaderText">Application</h1>
          <h1>Configuration</h1>
          <h1>Management</h1>
        </div>

      </div>
    </div>
  )
}

export default Intro