// import React from 'react';
import './dist/css/style.css';
import './dist/css/input.css';
// import leoImage from './Sources/image1/leo.png';
import loImage from './Sources/image1/lo.png';
const Hero = () => {
  return (
    <header className="py-16">
      <div className="container px-4 mx-auto xl:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center p-2 pr-6 bg-white shadow-md shadow-black/5 border border-slate-200 space-x-4 rounded-full mb-6">
            <img src={loImage} alt="" className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
              <div className="text-xl font-semibold" style={{ color: '#363D45' }}>Online-Book Reading</div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight md:leading-tight" style={{ color: '#363D45' }}>Nuunbookzon</h1>
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-indigo-500 mb-3 flex items-center after:h-0 after:w-16 after:border-t after:border-t-indigo-500 after:ml-4" style={{ color: '#363D45' }}>Short Bio</h3>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug md:leading-snug mb-3" style={{ color: '#363D45' }}>Soo Dhawaaw Akhriste oo Nala Qeybso Waqtigaaga Qiimaha Badan.</h2>
            <p className="leading-normal">Macaamiil waxaan idiin heynaa nuucya kala duwan oo ah buugaag ku xiiso gali doona oona wali kuu suurta galinaaya inaad kadhaxasho faa'iido aad u qiimo badan oo naftaada io dadka kleba aad uga faa'iideen karto.</p>
            <div className="mt-6 flex items-center space-x-6">
              <a href="#" className="btn btn-primary">Contact Us</a>
              <div className="flex items-center space-x-3">
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg"><i className="ri-instagram-line"></i></a>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg"><i className="ri-twitter-line"></i></a>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg"><i className="ri-youtube-line"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
  );
}

export default Hero;
