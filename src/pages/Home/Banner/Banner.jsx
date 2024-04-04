import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from 'react';



const Banner = () => {
  // initialized aos package
  useEffect(() =>{
    Aos.init({duration: 1000});
  }, [])

  return (
    <div className=''>
      <div className="hero min-h-screen lg:mt-0 relative">
        <img
          className="object-cover w-full h-full absolute top-0 left-0 image-play border border-pink-400"
          src="https://bloximages.chicago2.vip.townnews.com/mississauga.com/content/tncms/assets/v3/editorial/7/3b/73b237a3-04b3-5a2a-972f-167daea1ba57/649c8e6a2445a.image.jpg?resize=1200%2C800"
          alt="background"
        />
        <div className="hero-overlay bg-black bg-opacity-60 absolute top-0 left-0 w-full h-full"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-xl mx-auto px-4">
          <h1 className="mb-5 text-5xl lg:text-7xl font-bold   text-gray-600 ">Best <span className='text-pink-400'>MuslimFesti</span> in town</h1>
           
            {/* <a href="#mission" className="scroll-m-2 duration-900"><button className="btn btn-primary">Get Started</button></a> */}
          </div>
        </div>
     
      </div>
      <div>
 {/*last two divs stay*/}
 <h1 className='text-7xl text-center align-middle pt-10 pb-20 font-bold'>Our <span className='font-extrabold text-pink-400'>Sponsors</span></h1>

 <div className=' gap-7   grid lg:grid-cols-3 grid-cols-1 items-center '>
               <div className="card  w-96  bg-neutral text-neutral-content mt-0 border border-white rounded ">
                   <div className="card-body items-center text-center">
               <img src="https://assets-global.website-files.com/646d1cb425ee4279f23829a7/646d1cb425ee4279f23829d7_Group%206.png" alt="" />
                  
                     <div className="card-actions justify-end">
                
                     </div>
                   </div>
                 </div>
               <div className="card w-96  bg-neutral text-neutral-content mt-0 border border-white rounded ">
                   <div className="card-body items-center text-center">
                    <img src="https://assets-global.website-files.com/646d1cb425ee4279f23829a7/655d54749bef78c05acd7c5f_ON_REV_LOGO_RGB-1-p-500.png" alt="" />
                     <div className="card-actions justify-end">
                      
                     </div>
                   </div>
                 </div>
               <div className="card w-96  bg-neutral text-neutral-content mt-0 border border-white rounded  ">
                   <div className="card-body items-center text-center">
                 <img src="https://assets-global.website-files.com/646d1cb425ee4279f23829a7/655d54f1da16f9cfd9f78ef1_mfest%20sponsor%20logos.png" alt="" />
               
                     <div className="card-actions justify-end">
                   
                     </div>
                   </div>
                 </div>
        </div>

    </div>
 
     

    </div>
    ); 
};

export default Banner;
