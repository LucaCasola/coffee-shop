import * as React from "react";
import Navbar from '@/components/navbar';

export default function MyComponent(props) {
  return (
    <div className="flex flex-col bg-white">
        <Navbar />
      <div className="flex flex-col mt-24 ml-28 max-w-full text-black w-[904px] max-md:mt-10">
        <div className="text-8xl leading-[87px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          TIME TO DISCOVER
          <br />
          TRUE BREW
        </div>
        <div className="mt-9 text-3xl leading-6 max-md:max-w-full">
          The same flavor-rich recipe that has kept on brewing since 1872
        </div>
      </div>
      
      <img
        loading="lazy"
        srcSet="..."
        className="mt-16 w-full aspect-[3.45] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
}