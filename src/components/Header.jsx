import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-5 lg:px-20'>
        { /* ------ Left Side ------ */ }
        <div className='md:w1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:mb-[-30px md:py-[10vw] md:flex-1 md:pl-3 '>
              <p className='text-3xl md:4xl lg:5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Book Appointment <br/> With Trusted Doctors
              </p>
              <div className='flex flex-col md:flex-row items-center text-white text-sm gap-3 text-light '>
                <img className='w-28' src= {assets.group_profile} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appiontment hassle-free.</p>

              </div>
              <a className='flex items-center gap-2 bg-white px-3 py-3 rounded-full  text-gray-600 text-sm  hover:scale-125 transition-all duration-300 right-0.5' href="#speciality">Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
        </div>
         {/* ------- Right Side ------- */}
         <div className='md:w-1/2 '>
            <img className='w-full bottom-0 lg:mt-5 md:mt-24 md:right-0'  src={assets.header_img} alt="" />
         </div>
    </div>
  )
}

export default Header