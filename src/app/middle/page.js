import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-black p-8 text-center text-white">
      <div className="mb-20 text-[20px] leading-relaxed w-full justify-end flex">
        <div class="text-start">
          <p>
            10Planet provides a full-stack approach to building layer-one
            blockchains,
          </p>
          <p>
            smart contracts, and AI-DApps, offering integrated infrastructure,
          </p>
          <p>
            incentives, and UX/UI to reward AI contributions and support AI
            economies
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full">
          <Image
            src="/Group.png"
            alt="Group Image"
            width={500}
            height={500}
            className="w-full h-auto mb-36
            "
          />
        </div>
      </div>

      <div className="flex justify-center mt-8 max-w-[1200px] w-full mx-auto ">
        <div className="flex items-center lg:items-start w-full flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full mb-12 lg:mb-0 lg:mr-auto">
            <div
              className="w-full bg-cover bg-center relative bg-blend-multiply max-h-[300px] bg-[#282B30] mx-auto"
              style={{
                backgroundImage: `url("/Mask.png")`,
                height: "500px",
              }}
            >
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  src="/g1.png"
                  alt="Inner Group Image"
                  width={200}
                  height={200}
                  className=" h-auto" // Adjust size as needed
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full ml-8 text-left flex lg:flex-col overflow-x-auto">
            <div className="lg:mb-20 flex-shrink-0 w-full">
              <div className="mb-4">
                <Image
                  src="/f1.png"
                  alt="Contribution Image"
                  width={40}
                  height={40}
                  className="inline-block mb-4"
                />
                <div className="font-bold text-[20px] mb-4">
                  INCENTIVIZED CONTRIBUTION
                </div>
                <div>10Planet offers ways to thrive and get rewarded for</div>
                <div>your contribution to Als and AI economies</div>
              </div>
            </div>

            <div className="lg:mb-20 flex-shrink-0 w-full">
              <Image
                src="/f3.png"
                alt="UX & DX Image"
                width={40}
                height={40}
                className="inline-block mb-4"
              />
              <div className="font-bold text-[20px] mb-4">
                BEAUTIFUL UX & DX
              </div>
              <div className="text-[16px]">{/* Add your content here */}</div>
              <div>Seamless user & developer experience, making it</div>
              <div>easy to engage with AI-DApps and infrastructure</div>
            </div>

            <div className="lg:mb-20 flex-shrink-0 w-full">
              <Image
                src="/f4.png"
                alt="Rewards Image"
                width={40}
                height={40}
                className="inline-block mb-4"
              />
              <div className="font-bold text-[20px] mb-4">
                MERITOCRATIC REWARDS
              </div>
              <div className="text-[16px]">
                <div>Earn $10COIN (10P) directly for your contributions.</div>
                <div>ensuring a straightforward and equitable reward</div>
                <div>process</div>
              </div>
            </div>

            <div className="lg:mb-20 flex-shrink-0 w-full">
              <Image
                src="/f2.png"
                alt="Compatibility Image"
                width={40}
                height={40}
                className="inline-block mb-4"
              />
              <div className="font-bold text-[20px] mb-4">
                EVM & IBC COMPATIBLE
              </div>
              <div className="text-[16px]">
                <div>Familiar to Web3 developers and compatible</div>
                <div>with Sovereign Chains</div>
              </div>
            </div>
          </div>
          <div class="lg:hidden">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
