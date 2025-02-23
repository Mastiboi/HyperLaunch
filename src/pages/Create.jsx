import { div } from 'framer-motion/client'
import React from 'react'
import { useState } from "react";

const Create = () => {

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview uploaded image
    }
  };

  const [isOn, setIsOn] = useState(false);
  
    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
  
  return (
    <div className="pt-24 bg-black text-white md:pt-28 pb-10 font-['Product Sans']">
      <div className="flex flex-col items-center rounded-[30px] bg-[#23232333] border border-[#343434] text-white p-10 w-auto max-w-6xl mx-auto relative">
      <h1 className="text-3xl md:text-5xl font-semibold text-center uppercase">Create Solana Token</h1>
      <p className="text-md md:text-xl text-gray-400 text-center mt-4">Easily Create your own Solana SPL Token in just 7+1 steps without Coding.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        <div className="grid grid-cols-1 gap-6 mt-6">
          <label htmlFor="imageUpload" className="cursor-pointer">
            <div className="bg-[#232323] w-full p-6 md:p-10 justify-items-center rounded-[30px] mt-6 text-center">
              {image ? (
                <img src={image} alt="Uploaded" className="mx-auto rounded-lg w-40 h-40 object-cover" />
              ) : (
                <img src="./imageupload.svg" alt="Upload" className="mx-auto" />
              )}
              <p className="text-3xl font-semibold mt-2">Upload Image</p>
              <p className="text-[#7D7D7D] text-xl mt-1">Most tokens require a 1000x1000 logo</p>
            </div>
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>

          <div className="bg-[#232323] w-full p-6 md:p-10 rounded-[30px] mt-6 text-left space-y-8">
            <p className="text-2xl font-semibold mb-4">Add Link for Token Metadata</p>

            <div className="flex flex-col">
              <label className="text-lg">Twitter or X Link</label>
              <input type="text" placeholder="Twitter URL" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Telegram Link</label>
              <input type="text" placeholder="Telegram URL" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Website Link</label>
              <input type="text" placeholder="Website URL" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="bg-[#232323] w-full p-6 md:p-10 rounded-[30px] mt-6 space-y-4">
            <div className="flex flex-col">
              <label className="text-lg">Token Name</label>
              <input type="text" placeholder="Token Name" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Token Symbol</label>
              <input type="text" placeholder="Your Token Symbol" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Decimals</label>
              <input type="text" placeholder="9" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Supply</label>
              <input type="text" placeholder="1000000000" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Description <span className='text-red-600'>*</span></label>
              <input type="text" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
            </div>
            <div className="inline-flex">
              <div>Modify Creator Information <span className='text-[#7d7d7d]'>(optional)</span>

                <div className="flex items-center space-x-4">
                  {/* Toggle Switch */}
                  <div
                    className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition ${
                      isOn ? "bg-[#83f8ff]" : "bg-white"
                    }`}
                    onClick={() => setIsOn(!isOn)}
                  >
                    <div
                      className={`w-6 h-6 bg-black rounded-full shadow-md transform transition ${
                        isOn ? "translate-x-6.5" : "translate-x-[-3px]"
                      }`}
                    />
                  </div>

                  {/* Display Text When Toggled On */}
                  {isOn && (
                    <div>
                      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>

                        <div className="flex flex-col">
                          <label className="text-lg">Creator Name</label>
                          <input type="text" placeholder="Creator Name" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-lg">Creator Website</label>
                          <input type="text" placeholder="Creator Website" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                        </div>
                      </div>
                    </div>
                  )
                }
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      

    <p className="text-4xl md:text-6xl font-semibold text-center uppercase pt-20 pb-10">
      How to Create Solana Token
    </p>


    <div className="relative flex flex-col md:flex-row items-center overflow-hidden z-5 justify-between min-h-screen bg-black py-5">
      <div className="relative md:left-50 md:bottom-20 bg-[#232323] p-6 md:p-8 opacity-90 rounded-[20px] border border-[#343434] text-white shadow-xl max-w-lg w-full md:w-1/2 overflow-y-auto max-h-[80vh]">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
          HOW TO USE SOLANA TOKEN CREATOR
        </h2>
        <ol className="list-decimal space-y-3 pl-5 text-sm md:text-lg font-['Product Sans'] leading-relaxed font-normal">
          <li>Connect your Solana wallet.</li>
          <li>Write the name you want for your Token.</li>
          <li>Indicate the symbol (max 8 characters).</li>
          <li>Select the decimals quantity (0 for Whitelist Token, 6 for utility token).</li>
          <li>Write the description you want for your SPL Token.</li>
          <li>Upload the image for your token (PNG).</li>
          <li>Put the supply of your Token.</li>
          <li>Click on "Create," accept the transaction, and wait until your token is ready.</li>
        </ol>
      </div>
      
      <img 
        src="./rightsystem.svg" 
        alt="Logo" 
        className="hidden md:block relative left-7 bottom-40 w-[70%] lg:w-[60%] h-auto mt-6 md:mt-0"
      />
    </div>


  </div>

  )
}

export default Create
