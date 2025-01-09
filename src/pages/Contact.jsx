import {assets} from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className="text-center text-gray-500 text-2xl ">
        <p>ABOUT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm '>
        <img  className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-4 justify-start '> 
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-400 text-sm '>00000 Willms Station <br/>
          Suite 000, Washington, USA</p>
          <p className='text-gray-400 text-sm '>Tel: (000) 000-0000 <br/>
          Email: prescriptodev@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-400 text-sm '>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 hover:bg-black text-sm hover:text-white rounded-lg  transition-all duration-300 cursor-pointer '>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact