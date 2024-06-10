import React from 'react';
import Image from 'next/image';

const Middle2 = () => {
  return (
    <div className="bg-black text-white p-8">
      <div className="flex items-center mb-16">
        <div className="w-1/2 pr-4">
          <h3 className="text-[48px] font-bold mb-10 mt-64">REWARDING AI CONTRIBUTIONS</h3>
          <div className='text-[20px]'>
          <div className='text-20px'>An Operating Protocol for AI economics where</div>
          <div className='text-20px'>AI development is directly rewarded and</div>
          <div className ='text-20px'>contributions are attributed on-chain, evolving</div>
          <div className ='text-20px'>blockchains to asset & attribution ledgers</div>
          </div>
        </div>
        <div className="w-1/2 mt-64">
          <Image
            src="/Circle.png"
            alt="Circle Image"
            width={450}
            height={450}
            className="w-auto h-auto mx-auto"
          />
        </div>
      </div>
      <div className="flex">
        {[
          { src: '/l1.png', title: 'DATA PROVENANCE', text: ['Ensures clear records of AI development contributions using blockchain,', 'protecting integrity and verifying contributions'] },
          { src: '/l2.png', title: 'CONTRIBUTION ATTRIBUTION', text: ['Recognizes and fairly compensates all forms of AI development contributions,', 'moving beyond traditional asset ledgers'] },
          { src: '/l3.png', title: 'AWARDS SYSTEM', text: ['Rewards contributions with Ores & 10coin recurring and retroactive awards,', 'linking efforts directly to rewards'] }
        ].map((item, index) => (
          <div key={index} className="flex-1 items-start border border-gray-500 p-5 rounded-none">
            <div className="mb-20 mr-4">
              <Image
                src={item.src}
                alt={`${item.title} Image`}
                width={50}
                height={50}
              />
            </div>
            <div className="text-left">
              <h2 className="text-[20px] font-bold mt-55 mb-3">{item.title}</h2>
              {/* {item.text.map((line, i) => ( */}
                {/* <div key={i}>{line}</div> */}
              {/* ))} */}

              <div>{item.text.join(" ")}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-8"></div>
      <div className="mb-8">
        <div className="flex items-center mt-60 mb-4">
          <div className="mr-4">
            <Image
              src="/play.png"
              alt="Play Image"
              width={450}
              height={450}
              className="w-auto h-auto mt-4"
            />
          </div>
          <div className="flex-1 mr-8 mb-4">
            <h1 className="text-[48px] mb-2 ml-16">USE CASE: DEVA</h1>
            <div className='ml-16 text-[20px]'>Deva is a revolutionary AI-driven application within the 10Planet</div>
            <div className='ml-16 text-[20px]'>ecosystem, harnessing our advanced blockchain infrastructure</div>
          </div>
        </div>
        <hr className="border-gray-500 mb-8 mt-16" />
      </div>
      <div className="flex mb-16 ">
        {[
          { src: '/t1.png', title: 'AI PERSONALIZATION HUB' },
          { src: '/t2.png', title: 'INTERACTIVE AI CHATS' },
          { src: '/t3.png', title: 'KARMA REWARDS SYSTEM' }
        ].map((item, index) => (
          <div key={index} className="flex-1 text-center p-4">
            <div className="flex items-center mb-4">
              <div>
                <Image
                  src={item.src}
                  alt={`${item.title} Image`}
                  width={50}
                  height={50}
                  className="mx-auto mb-1"
                />
              </div>
              <div className="text-[20px] font-bold ml-3">{item.title}</div>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Middle2;
