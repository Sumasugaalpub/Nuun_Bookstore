import React from 'react';
import './dist/css/style.css';
import './dist/css/input.css';
const More= () => {
  return (
    // start: More
    <section className="py-16 bg-slate-50">
        <div className="container px-4 mx-auto xl:max-w-7xl">
            <div className="flex sm:items-center justify-between flex-col sm:flex-row space-y-8 sm:space-y-0">
                <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-indigo-500">100+</div>
                    <div className="leading-normal text-[15px]">Books <br/>Available</div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-indigo-500">50+</div>
                    <div className="leading-normal text-[15px]">Happy  <br/>Readers</div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-indigo-500">80+</div>
                    <div className="leading-normal text-[15px]">Positive <br/>Reviews</div>
                </div>
            </div>
        </div>
    </section>
    // end: More
  );
}

export default More;
