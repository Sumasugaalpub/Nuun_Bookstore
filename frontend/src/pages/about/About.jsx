import React from 'react'
import { BsCloudArrowUp } from 'react-icons/bs';
import { HiLockClosed, HiServer } from "react-icons/hi";

const  About = () => {
  return (
    // start: About
    <section className="py-16">
        <div className="container px-4 mx-auto xl:max-w-7xl"> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-[15px] font-semibold text-indigo-500 mb-3 flex items-center after:h-0 after:w-16 after:border-t after:border-t-indigo-500 after:ml-4">About Us</h3>
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug md:leading-snug mb-3" style={{ color: '#363D45'  , fontSize: '2.7rem'}}>Nuun Online Book Reading waa maktabad kuu suurta galineysa akhrinta buugaagta internetka.</h2>
                    <a href="#" className="btn btn-primary mt-6">Contact Us</a>
                </div>
                <div>
                    <p className="leading-normal" >Akhriste page ka Nuun Online Book Reading waxa aad ka heli doontaa nuucya kala duwan oo ah buugaag ku xiiso gali doona sidoo kle waxa aan kuu suurta gali doonaa inaad aqrisato buuga aad rabto adiga oo jooga meelkasta.</p>
                    <div className="mt-6 flex items-center flex-wrap gap-x-8 gap-y-6">
                        <div className="flex space-x-3">
                            <i className="ri-guide-line text-xl text-indigo-500"></i>
                            <div className="font-semibold">Aqrinta<br/>Bugaagta</div>
                        </div>
                        <div className="flex space-x-3">
                            <i className="ri-bring-to-front text-xl text-indigo-500"></i>
                            <div className="font-semibold">Aqrinta <br/>Qisooyinka</div>
                        </div>
                        <div className="flex space-x-3">
                            <i className="ri-database-2-line text-xl text-indigo-500"></i>
                            <div className="font-semibold">Adeegyo <br/>24 saac</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    // end: About
  );
}




export default About;