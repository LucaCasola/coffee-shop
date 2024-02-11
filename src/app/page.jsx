import * as React from "react";

export default function MyComponent(props) {
  return (
    <div className="flex flex-col bg-white">
      
      <div className="flex space-y-9 flex-col mt-20 ml-28 max-w-full text-black w-[904px] max-md:mt-10">
        <div className="text-8xl leading-[87px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          TIME TO DISCOVER
          <br />
          TRUE BREW
        </div>

        <div className="mt-9 text-3xl leading-6 max-md:max-w-full">
          The same flavor-rich recipe that has kept on brewing since 1872
        </div>

        {/*Buttons*/} 
        <div className="flex space-x-9">
          <a href="/menu">
            <button type="button" className="w-1/7 h-20 text-black bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-3xl px-5 py-2.5 me-2 mb-2">
              View Menu
            </button>
          </a>

          <a href="/aboutUs">
          <button type="button" className="w-1/17 h-20 
            text-black bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-3xl px-5 py-2.5 me-2 mb-2">Learn More About Us</button>
          </a>
        </div>
      </div>

      <img className="h-auto max-w-full" src="/coffee_beans.png" alt="image description"/>
    </div>
  );
}


