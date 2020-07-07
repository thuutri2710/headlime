import React from 'react';

function Price() {
    return (
        <section className="w-full">
            <div className="flex justify-between items-start text-white max-w-6xl mx-auto">
                <div className="w-full md:w-1/3 border border-gray-700 flex justify-center items-center flex-col px-8 py-12 mx-auto rounded">
                    <h4 className="text-xl font-bold">Monthly</h4>
                    <div className="flex justify-center items-start content-start">
                        <span className="text-2xl font-bold">$</span>
                        <span className="text-6xl font-bold leading-none">9</span>
                    </div>
                    <span className="text-sm text-gray-600 font-thin">
                        Billed per month
                    </span>
                    <div className="px-8">
                        <ul className="usps text-base font-medium my-8">
                            <li className="li-item mb-4 pl-6">Cancel any times</li>
                            <li className="li-item mb-4 pl-6">Hundreds of headlines</li>
                            <li className="li-item mb-4 pl-6">Tested to ensure quality</li>
                            <li className="li-item mb-4 pl-6">Easily save and export</li>
                            <li className="li-item mb-4 pl-6">Lifetime money back guarantee</li>
                        </ul>
                    </div>
                    <button className="w-full text-black font-bold btn bg-yellow-500 px-6 py-3 rounded">Get Access</button>
                </div>
                <div className="w-full md:w-1/3 border-2 border-indigo-700 flex justify-center items-center flex-col px-8 py-10 ml-8 rounded">
                    <h4 className="text-xl font-bold">Lifetime</h4>
                    <div className="flex justify-center items-start content-start">
                        <span className="text-2xl font-bold">$</span>
                        <span className="text-6xl font-bold leading-none">89</span>
                    </div>
                    <span className="text-sm text-gray-600 font-thin">
                        Billed once!
                    </span>
                    <div className="w-full">
                        <div className="text-right text-xs text-gray-500 mb-2">60 spots left</div>
                        <div className="w-full h-2 bg-gray-900 rounded">
                            <div className="w-2/5 h-full bg-green-400 rounded"></div>
                        </div>
                    </div>
                    <div className="px-8">
                        <ul className="usps text-base font-medium my-8">
                            <li className="li-item mb-4 pl-6">Lifetime access!</li>
                            <li className="li-item mb-4 pl-6">Hundreds of headlines</li>
                            <li className="li-item mb-4 pl-6">Tested to ensure quality</li>
                            <li className="li-item mb-4 pl-6">Easily save and export</li>
                            <li className="li-item mb-4 pl-6">Lifetime money back guarantee</li>
                        </ul>
                    </div>
                    <button className="w-full text-white gradient-border font-bold btn bg-blue-600 px-6 py-3 rounded">Get Lifetime Access</button>
                </div>
                <div className="w-full md:w-1/3 border-2 flex justify-center items-center flex-col px-8 py-10 ml-8 opacity-25">
                    {/* <div className="absolute insert-x-0 top-0">
                        <span className="text-white rounded-full bg-gray-600 text-sm leading-5 font-semibold ">GONE IN FIRST 12H!</span>
                    </div> */}
                    <h4 className="text-xl font-bold">Early Bird</h4>
                    <div className="flex justify-center items-start content-start">
                        <span className="text-2xl font-bold">$</span>
                        <span className="text-6xl font-bold leading-none">49</span>
                    </div>
                    <span className="text-sm text-gray-600 font-thin">
                        Billed once!
                    </span>
                    <div className="w-full">
                        <div className="text-right text-xs text-gray-500 mb-2">0 of 200 left</div>
                        <div className="w-full h-2 bg-gray-900 rounded">
                        </div>
                    </div>
                    <div className="px-8">
                        <ul className="usps text-base font-medium my-8">
                            <li className="li-item mb-4 pl-6">Lifetime access!</li>
                            <li className="li-item mb-4 pl-6">Hundreds of headlines</li>
                            <li className="li-item mb-4 pl-6">Tested to ensure quality</li>
                            <li className="li-item mb-4 pl-6">Easily save and export</li>
                            <li className="li-item mb-4 pl-6">Lifetime money back guarantee</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Price;