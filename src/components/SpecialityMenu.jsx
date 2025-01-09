import { specialityData } from "../assets/assets"
import { Link } from "react-router-dom"

const SpecialityMenu = () => {
  return (
    <div  id="speciality" className="flex flex-col gap-4 items-center py-14 text-gray-800">
      <h1 className="items-center font-medium text-3xl" > Find by Speciality </h1>
      <p className="sm:1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appiontment hassle-free. </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map( (item, index)=>(
            <Link onClick={ ()=> scrollTo(0,0) } className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-300" key={index} to={`/doctors/${item.speciality}`} >
               <img src={item.image} alt="" />
               <p className="w-16 sm:w-24 mb-2 text-center m-auto py-1"> {item.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu