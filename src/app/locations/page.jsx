import * as React from "react";

//items-center justify-left
export default function Locations(props) {
    return (
        <div>
            <h1 className="text-5xl text-center m-10">Click on the map pointers or street names to highlight the location!</h1>
            <div className="grid grid-cols-3 gap-20 m-32 mt-20">
                <div className="col-start-1 col-span-2">
                    <img src="map.png" alt="map"></img>
                </div>

                <div className="flex flex-col gap-10 items-start text-4xl">
                    <div className="flex justify-between w-full">
                        <label htmlFor="locationCheckBox1">22nd Street</label>
                        <input type="checkbox" id="locationCheckBox1" className="form-checkbox h-10 w-10"/>
                    </div>
                    <div className="flex justify-between w-full">
                        <label htmlFor="locationCheckBox2">Barkwell Lane</label>
                        <input type="checkbox" id="locationCheckBox2" className="form-checkbox h-10 w-10"/>
                    </div>
                    <div className="flex justify-between w-full">
                        <label htmlFor="locationCheckBox3">Kynance Ave</label>
                        <input type="checkbox" id="locationCheckBox3" className="form-checkbox h-10 w-10"/>
                    </div>
                    <div className="flex justify-between w-full">
                        <label htmlFor="locationCheckBox4">Shaw Causeway</label>
                        <input type="checkbox" id="locationCheckBox4" className="form-checkbox h-10 w-10"/>
                    </div>
                    <div className="flex justify-between w-full">
                        <label htmlFor="locationCheckBox5">St Lukes Promenade</label>
                        <input type="checkbox" id="locationCheckBox5" className="form-checkbox h-10 w-10"/>
                    </div>
                    <div className="w-full h-16 bg-gray-200 border-4 border-green-500">
                        <div style={{ width: '0%' }} className="h-full bg-green-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}