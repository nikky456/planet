import React from 'react';
import Image from 'next/image';

const Middle = () => {
  return (
    <div className='bg-black text-white'>
      <div className='text-[48px] text-center p-4 mb-30 mt-48'>
        <div className='text-6xl'>WELCOME TO THE</div>
        <div className='text-6xl'>SINGULARITY</div>
      </div>
      <div className="relative w-full h-[400px]">
        <div className="absolute inset-0 z-10">
          <Image
            src="/grp2.png"
            alt="Group Image 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20">
          <Image
            src="/Ellipse.png"
            alt="Ellipse Image"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="text-[28px] underline flex items-center">#JOINSINGULARITY 
          <Image
            src="/arrow.svg"
            alt="arrow Image"
            width={24}
            height={24}
          
          />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-4 mt-36">
        <div className="lg:w-1/2 w-full flex flex-col items-center">
        <h1 className="lg:hidden text-[48px] mb-16 lg:max-w-[500px] w-full">THE ATTRIBUTION CHALLENGE</h1>
          <Image
            src="/grp4.svg"
            alt="Group Image"
            width={150}
            height={150}
            className="w-1/2 h-auto mt-8 lg:mt-0"
          />
          <div className="text-center text-[16px] mt-4 text-slate-800">individual contributing small data pieces to train large AI models</div>
        </div>
        <div className="lg:w-1/2 w-full mt-16 lg:mt-0 px-4 lg:px-0">
          <div className='text-white hidden lg:block'>
            <h1 className="text-[48px] mb-16 max-w-[500px] ">THE ATTRIBUTION CHALLENGE</h1>
          </div>
          <div className='flex w-full lg:mb-20 flex-col lg:flex-row'>
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
              <h3 className="text-[28px] font-bold mt  border-b border-gray-500 font-abc-monument ">CONTRIBUTORS</h3>
              <div className='mt-6'>
              <div>Thousands of people contribute data</div>
              <div>& knowledge to AIs that are used daily</div>
              </div>
            </div>
            {/* <div className='border-t border-gray-500 mx-4'></div> */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
              <h3 className="text-[28px] font-bold  border-b border-gray-500">ATTRIBUTION</h3>
              <div className='mt-6 text-[16px]'>
              <div>Almost impossible to attribute and</div>
              <div>reward these micro-contributions</div>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col lg:flex-row'>
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
              <h3 className="text-[28px] font-bold border-b border-gray-500">DATA</h3>
              <div className=' mt-6 text-[16px]'>
              <div>Foundation AI models are trained on</div>
              <div>data from billions of writers online</div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
              <h3 className="text-[28px] font-bold  border-b border-gray-500">REVENUE</h3>
              <div className=' mt-6 text-[16px]'>
              <div>Lack of programmatic revenue sharing</div>
              <div>for AI contributors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
