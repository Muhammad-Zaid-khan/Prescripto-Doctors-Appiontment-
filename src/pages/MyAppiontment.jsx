import {doctors} from '../assets/assets'

const MyAppiontment = () => {
  return (
    <div>
      <p className='pb-3 text-zinc-700 border-b font-medium mt-12'>My Appiontments</p>
      <div >
        {doctors.slice(0,4).map((item,index)=>(
           <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex py-2 border-b'>
            <div >
               <img className='w-36 bg-indigo-50' src={item.image} alt="" />
            </div>
            <div className='flex-1 text:sm text-zinc-600'>
              <p className='font-semibold text-neutral-700'>{item.name}</p>
              <p className='mb-1'>{item.speciality}</p>
              <p className='font-medium text-neutral-600'>Address:</p>
              <p className='text-xs '>{item.address.line1}</p>
              <p className='text-xs mb-2 '>{item.address.line2}</p>
              <p className='text-sm '><span className='text-sm font-medium text-neutral-600'>Date & Time: </span> 25, January , 2024 | 06:45 pm</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-3  ml-4 text-sm my-auto'>
              <button className='rounded-full cursor-pointer py-2 px-3 bg-slate-300 text-white hover:text-white hover:bg-primary transition-all duration-300'>Pay Online</button>
              <button className='rounded-full cursor-pointer py-2 px-3 bg-slate-300 text-white hover:bg-red-600 transition-all duration-300'>Cancel Appiontment</button>
            </div>
           </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppiontment