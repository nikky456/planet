import React from 'react';
import Image from 'next/image';

const Button = ({ text }) => {
  return (
    <button className="h-[60px] p-3 pr-5 gap-1 mb-2 mx-1 rounded-full bg-[#151719] text-white opacity-100 flex items-center">
      <div className="size-10 rounded-full bg-[#282B30]"></div>
      <span className="ml-2 block whitespace-nowrap">{text}</span>
    </button>
  );
};

const BelowNav = () => {
  return (
    <div className='bg-black'>
      <div className='text-orange-600 font-normal leading-7 tracking-tight pt-20 mb-16 text-center text-[16px] rounded-full'>
        THE DIGITAL PLANET OF HUMANS & AIS
      </div>
      <div className='flex justify-center mt-4 mb-28 px-4'>
        <div className='text-[90px] font-lakonet text-center max-w-[1000px]'>LAYER ONE BLOCKCHAIN FOR AI ECONOMIES</div>
      </div>
      <div className='flex justify-center mt-4 px-4'>
        <Image
          src="/Sphere.png"
          alt="Sphere"
          className="w-full max-w-xl"
          width={1152}
          height={1152}
          style={{ maxHeight: '1152px', maxWidth: '1152px' }}
        />
      </div>
      <div className='text-white font-abc-monument text-center text-[32px] sm:text-[48px] mx-auto mt-28 px-4'>
        <div>
          INTEGRATED AI ECONOMIES MADE SIMPLE.
        </div>
        <div>
          THE ONLY PLATFORM DESIGNED FOR
        </div>
        <div>
          SEAMLESS BLOCKCHAIN, SMART
        </div>
        <div>
          CONTRACTS, & AI-DAPPS INTEGRATION
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="mb-8 text-[32px] sm:text-[48px] font-abc-monument text-white text-center mt-40">
          <div>
            GOVERNORS DRIVING
          </div>
          <div>
            10PLANET'S INNOVATION
          </div>
        </div>
        <div className="flex flex-wrap  justify-center">
          <Button text="Multicoin MP" />
          <Button text="Paul Veradittakit // Pantera MP" />
          <Button text="Alex Pack // Hack MP" />
          <Button text="Saurabh Sharma // Jump Crypto/Capital GP" />
          <Button text="Dovey Wan" />
          <Button text="mi // dao5 GP, prev Polychain GP" />
          <Button text="Yat Siu, Simon Doherty, Adrian Lo // Animoca" />
          <Button text="Kyle Samani // Multicoin MP" />
          <Button text="Paul Veradittakit" />
          <Button text="Lex Pack // Hack MP" />
          <Button text="Saurabh Sharma // Jump Crypto/Capital GP" />
          <Button text="Dovey Wan // Primitive MP" />
          <Button text="Yat Siu, Simon Doherty, Adrian-Lo---Animoca-" />
          <Button text="Kyle-Samani-Multicoin-MP-" />
          <Button text="Tekin Salimi // dao5 GP, prev Polycha" />
          <Button text="-Paul-Veradittakit-/-/--Pantera-MP-" />
          <Button text="a // Jump Crypto/Capital GP" />
          <Button text="Dovey Wan // Primitive MP" />
          <Button text="Tekin Salimi // dao5 GP, prev Polychain GP" />
          <Button text="Alex Pack // Hack" />
          <Button text="Yat Siu, Simon Doherty, Adri" />
          <Button text="Multicoin MP" />
          <Button text="Paul Veradittakit // Pantera MP" />
          <Button text="Alex Pack // Hack MP" />
          <Button text="Saurabh Sharma // Jump Crypto/Capital GP" />
          <Button text="Dovey W" />
          <Button text="Tekin Salimi // dao5 GP, prev Polychain GP" />
          <Button text="Yat Siu, Simon Doherty, Adrian Lo // Animoca" />
        </div>
        <hr className="border-gray-500 mb-8 mt-16" />
      </div>
    </div>
  );
};

export default BelowNav;
