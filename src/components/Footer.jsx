import logo from "../../src/assets/logo.png"
import facebook from "../../src/assets/facebook.png"
import twitter from "../../src/assets/twitter.png"
import instagram from "../../src/assets/instagram.png"

const Footer = () => {
  return (
    <div className='bg-slate-700 text-white'>
            <div className="max-w-[1024px] mx-auto text-colorText grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 align-items-center py-5">
                <div className='text-center sm:text-left flex flex-col items-center col-span-3 sm:col-span-1'>
                    <h1 className='font-semibold mb-2'>More Links</h1>
                    <div className='text-sm flex flex-col gap-y-1'>
                        <button to="/">Home</button>
                        <button to="/">Services</button>
                        <button to="/">About us</button>
                        <button to="/">Contact us</button>
                        <button to="#">Career</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center col-span-3 sm:col-span-1 mt-6 sm:mt-0 md:mt-0'>
                    <img className='h-20 w-20' src={logo} alt="" />
                    <p className='text-lg font-bold text-green-400'>HawkTech</p>
                    <div className='flex justify-center gap-x-2 mt-2'>
                        <img className='w-6 h-6' src={facebook} alt="" />
                        <img className='w-6 h-6' src={twitter} alt="" />
                        <img className='w-6 h-6' src={instagram} alt="" />
                    </div>
                </div>
                <div className="col-span-3 sm:col-span-2 md:col-span-1 mt-6 sm:mt-6 md:mt-0">
                    <p className="text-xs text-center font-semibold">Who we are</p>
                    <h1 className='text-xs text-center text-colorText px-1 sm:px-3'>Your trusted platform for innovative and seamless tech solutions, designed to empower businesses and individuals to achieve their goals effortlessly.</h1>
                    <div className='text-sm text-center mt-5 '>
                        <p>© 2024 <br /> HawkTech <br /> All Rights Reserved.</p>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer