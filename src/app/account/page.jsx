import * as React from "react";

export default function Account(props) {
    return (
        <div className="flex items-center justify-center min-h-screen mt-[-6rem]">
            <div className="grid grid-cols-3 grid-rows-3 text-4xl">
                <div className="row-span-2 justify-self-end mr-20">
                    <img src="big_profile_pic.png" alt="profile picture"></img>
                </div>

                <div className=""><strong>First name: </strong>Luca</div>
                <div className=""><strong>Phone: </strong>  123-456-7676</div>
                <div className=""><strong>Last name: </strong> Casola</div>
                <div className=""><strong>Email: </strong> luca078@gmail.com</div>
                <div className="col-start-2 col-span-2 flex">
                    <label htmlFor="myCheckbox" className="ml-2">I agree to receive promotional emails: &nbsp;</label>
                    <input type="checkbox" id="myCheckbox" className="form-checkbox h-10 w-10"/>
                </div>
            </div>
        </div>
    );
}