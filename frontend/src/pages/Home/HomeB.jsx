import React from 'react';
import './dist/css/style.css';
import './dist/css/input.css';
import image0 from './dist/images/0.webp';
import image3 from './dist/images/image3.jpg';
import imagenft from './dist/images/nft.png';
const HomeB = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto xl:max-w-7xl">
        <h3 className="text-[15px] font-semibold text-indigo-500 mb-3 flex items-center after:h-0 after:w-16 after:border-t after:border-t-indigo-500 after:ml-4">Our Blogs</h3>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug md:leading-snug mb-3 max-w-xl" style={{ color: '#363D45' }}>Mawduucyada trendiga ah ee aan wax kaqornay.</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="shadow-md rounded-md border border-slate-200 overflow-hidden group">
            <div className="flex justify-between p-6">
              <div className="font-bold text-lg">Blogy</div>
              <div className="text-sm leading-normal">Virtual <br />Developer</div>
            </div>
            <div className="overflow-hidden h-64">
              <img src={image0} alt="" className="w-full h-full object-cover block group-hover:scale-105 transition-transform" />
            </div>
          </div>
          <div className="shadow-md rounded-md border border-slate-200 overflow-hidden group">
            <div className="flex justify-between p-6">
              <div className="font-bold text-lg">Blogy</div>
              <div className="text-sm leading-normal">3D <br />Designs</div>
            </div>
            <div className="overflow-hidden h-64">
              <img src={image3}  alt="" className="w-full h-full object-cover block group-hover:scale-105 transition-transform" />
            </div>
          </div>
          <div className="shadow-md rounded-md border border-slate-200 overflow-hidden group">
            <div className="flex justify-between p-6">
              <div className="font-bold text-lg">Blogy</div>
              <div className="text-sm leading-normal">NFT<br />Designs</div>
            </div>
            <div className="overflow-hidden h-64">
              <img src={imagenft} alt="" className="w-full h-full object-cover block group-hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeB;
