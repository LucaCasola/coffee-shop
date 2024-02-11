import * as React from "react";

export default function AboutUs(props) {
    return (
        <div className="grid grid-cols-3 gap-4 mt-20">
            <div className="col-span-1 ml-40">
                <img src="big_coffee_cup.png" alt="big coffee cup"/>
            </div>
            <div className="col-span-2 mr-60 text-lg">
                Welcome to <span className="italic">True Brew</span>, where
                passion meets perfection in every sip. Established with a love
                for the art of coffee, we are more than just a company – we
                are enthusiasts on a mission to redefine your coffee
                experience.
                <br /> <br />
                At True Brew, we believe in the authenticity of the bean,
                sourcing only the finest coffee from sustainable and ethical
                farms around the world. Our commitment to quality begins at
                the source, ensuring that each cup of True Brew coffee is a
                testament to the craftsmanship that goes into every step of
                the process.
                <br /> <br />
                But True Brew is more than just a coffee company; it's a
                community. We invite you to join us on a journey where every
                coffee break becomes a moment of connection and inspiration.
                <br /> <br />
                Whether you're a seasoned coffee connoisseur or a casual
                enthusiast, True Brew is here to elevate your coffee ritual.
                So welcome to True Brew – where each cup tells a story, and every sip
                is a taste of genuine passion and dedication. Experience the true
                essence of coffee with us.
            </div>
        </div>
    );
}


/*
<div className="flex flex-col"> 
            <div className="flex flex-col self-center mt-24 w-full max-w-[1250px] max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                    
                    <div className="flex overflow-hidden relative flex-col grow items-center px-16 pt-12 pb-8 mt-20 text-center text-black whitespace-nowrap aspect-[0.85] max-md:px-5 max-md:mt-10">
                        <img src="big_coffee_cup.png"/>
                    </div>

                    </div>
                    <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-xl leading-8 text-black max-md:mt-10 max-md:max-w-full">
                            <div className="italic max-md:max-w-full">
                            Welcome to <span className="italic">True Brew</span>, where
                            passion meets perfection in every sip. Established with a love
                            for the art of coffee, we are more than just a company – we
                            are enthusiasts on a mission to redefine your coffee
                            experience.
                            <br />
                            </div>
                            <div className="self-end mt-16 max-md:mt-10 max-md:max-w-full">
                            At True Brew, we believe in the authenticity of the bean,
                            sourcing only the finest coffee from sustainable and ethical
                            farms around the world. Our commitment to quality begins at
                            the source, ensuring that each cup of True Brew coffee is a
                            testament to the craftsmanship that goes into every step of
                            the process.
                            </div>
                            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                            But True Brew is more than just a coffee company; it's a
                            community. We invite you to join us on a journey where every
                            coffee break becomes a moment of connection and inspiration.
                            Whether you're a seasoned coffee connoisseur or a casual
                            enthusiast, True Brew is here to elevate your coffee ritual.
                            </div>
                            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                            So welcome to True Brew – where each cup tells a story, and every sip
                            is a taste of genuine passion and dedication. Experience the true
                            essence of coffee with us.
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>*/