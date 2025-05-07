'use client';

import { useState } from 'react';

export default function Form10() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div id="form" className="bg-black text-white">
      <div className="w-full py-20 px-6 md:px-8 min-h-screen flex flex-col justify-center">
        <div className="mx-auto max-w-lg w-full">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-4 text-cyan-400">
            [INITIATE_CONTACT]
          </h2>
          <div className="w-32 h-1 bg-cyan-400 mx-auto mb-10 shadow-[0_0_15px_rgba(0,255,255,0.5)]"></div>
          <p className="text-center text-gray-400 mb-10 text-md font-mono">
            // Query_System: Send your data packet. We will respond ASAP.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full mx-auto bg-gray-900 p-8 sm:p-10 rounded-none border-2 border-cyan-500 shadow-[0_0_25px_rgba(0,255,255,0.3)] relative">
            <div className={`transition-opacity duration-300 ${isSubmitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 gap-y-5 mb-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-mono uppercase text-cyan-300 mb-2">First_Name:</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full p-3 pl-4 bg-black border border-cyan-600 text-white rounded-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 font-mono"
                      placeholder="> Enter First Name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-mono uppercase text-cyan-300 mb-2">Last_Name:</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full p-3 pl-4 bg-black border border-cyan-600 text-white rounded-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 font-mono"
                      placeholder="> Enter Last Name"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-mono uppercase text-cyan-300 mb-2">Email_Address:</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 pl-4 bg-black border border-cyan-600 text-white rounded-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 font-mono"
                    placeholder="> user@domain.tech"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-5">
                <label htmlFor="subject" className="block text-sm font-mono uppercase text-cyan-300 mb-2">Subject_Line:</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3 pl-4 bg-black border border-cyan-600 text-white rounded-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 font-mono"
                    placeholder="> Inquiry Topic"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-mono uppercase text-cyan-300 mb-2">Message_Body:</label>
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full p-4 bg-black border border-cyan-600 text-white rounded-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 resize-none font-mono"
                    placeholder="> Your message details here..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold py-3.5 px-4 rounded-none transition duration-200 ease-in-out transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#00A3C4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-300 border-2 border-black"
              >
                [TRANSMIT_DATA]
              </button>
            </div>
            <div className={`transition-opacity duration-300 ${isSubmitted ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 p-4 border-2 border-cyan-500`}>
              <h3 className="text-4xl font-mono font-bold text-cyan-400 mb-3">// TRANSMISSION_OK</h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
