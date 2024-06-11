import React from 'react';
import Image from 'next/image';

const Middle2 = () => {
  return (
    <div className="bg-black text-white p-8">
      <div className="flex flex-col lg:flex-row items-center mb-16 flex-wrap">
        <div className="lg:w-1/2 w-full pr-4 ">
          <h3 className="text-[48px] font-bold mb-10 mt-10 md:mt-64 text-center md:text-left">REWARDING AI CONTRIBUTIONS</h3>
          <div className='text-[20px] text-center md:text-left'>
            <div>An Operating Protocol for AI economics where</div>
            <div>AI development is directly rewarded and</div>
            <div>contributions are attributed on-chain, evolving</div>
            <div>blockchains to asset & attribution ledgers</div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-10 md:mt-64">
          <Image
            src="/Circle.png"
            alt="Circle Image"
            width={600}
            height={600}
            className="w-auto h-auto mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        {[
          { src: '/l1.png', title: 'DATA PROVENANCE', text: ['Ensures clear records of AI development contributions using blockchain,', 'protecting integrity and verifying contributions'] },
          { src: '/l2.png', title: 'CONTRIBUTION ATTRIBUTION', text: ['Recognizes and fairly compensates all forms of AI development contributions,', 'moving beyond traditional asset ledgers'] },
          { src: '/l3.png', title: 'AWARDS SYSTEM', text: ['Rewards contributions with Ores & 10coin recurring and retroactive awards,', 'linking efforts directly to rewards'] }
        ].map((item, index) => (
          <div key={index} className="flex-1 items-start border border-gray-500 p-5 rounded-none mb-4 md:mb-0">
            <div className="mb-4 mr-4 mx-auto md:mx-0">
              <Image
                src={item.src}
                alt={`${item.title} Image`}
                width={50}
                height={50}
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-[20px] font-bold mb-3">{item.title}</h2>
              <div>{item.text.join(" ")}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-8"></div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-center mt-10 md:mt-60 mb-4">
          <div className="mr-4 mx-auto md:mx-0">
            <Image
              src="/play.png"
              alt="Play Image"
              width={450}
              height={450}
              className="w-auto h-auto mt-4"
            />
          </div>
          <div className="flex-1 mr-8 mb-4 text-center md:text-left">
            <h1 className="text-[48px] mb-2 ml-0 md:ml-16">USE CASE: DEVA</h1>
            <div className='ml-0 md:ml-16 text-[20px]'>Deva is a revolutionary AI-driven application within the 10Planet</div>
            <div className='ml-0 md:ml-16 text-[20px]'>ecosystem, harnessing our advanced blockchain infrastructure</div>
          </div>
        </div>
        <hr className="border-gray-500 mb-8 mt-16" />
      </div>
    </div>
  );
}

export default Middle2;
