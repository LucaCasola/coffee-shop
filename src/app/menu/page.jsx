import * as React from "react";

export default function Menu(props) {
    return (
        <div className="grid grid-cols-3 gap-40 mx-40 mt-32 font-yeon-sung">
            <div className="flex flex-col items-center">
                <div className = "flex items-center justify-center">
                    <img src="hot_menu.png" alt="tea cup" className="h-20 w-auto pr-4"></img>
                    <h1 className="text-6xl">Hot</h1>
                </div>

                <div className = "flex items-center justify-center text-4xl">
                    <p className="text-4xl">
                                    <br />
                        Cappuccino...<br />
                        Espresso.........<br />
                        Americano......<br />
                        Latte..............<br />
                        Mochaccino... <br />
                        Dopio.............<br />
                        Irish...............<br />
                        Frappe..........<br />
                        Raf................<br />
                    </p>
                    <pre className="text-4xl pl-4 font-yeon-sung">
                        MD &nbsp; &nbsp;LG<br />
                        3.00  4.50<br />
                        2.50  3.50<br />
                        3.00  4.50<br />
                        2.50  3.50<br />
                        2.50  3.50<br />
                        3.00  4.50<br />
                        3.00  4.50<br />
                        3.00  4.50<br />
                        4.00  5.00<br />
                    </pre>
                </div>

            </div>

            <div className="flex flex-col items-center">
                <div className = "flex items-center justify-center text-4xl">
                    <img src="cold_menu.png" alt="snowflake" className="h-20 w-auto pr-4"></img>
                    <h1 className="text-6xl">Cold</h1>
                </div>

                <div className = "flex items-center justify-center text-4xl">
                    <p className="text-4xl">
                        <br />
                        Glace..............<br />
                        Latte..............<br />
                        Mocha......<br />
                        Flat White......<br />
                        Espresso..........<br />
                        Cortado..........<br />
                        Caramel..........<br />
                    </p>
                    <pre className="text-4xl pl-4 font-yeon-sung">
                        MD &nbsp; &nbsp;LG<br />
                        3.00  4.50<br />
                        2.50  3.50<br />
                        3.00  4.50<br />
                        2.50  3.50<br />
                        2.50  3.50<br />
                        3.00  4.50<br />
                        3.00  4.50<br />
                    </pre>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className = "flex items-center justify-center text-4xl">
                    <img src="addons_menu.png" alt="tea cup" className="h-20 w-auto pr-4"></img>
                    <h1 className="text-6xl">Add-ons</h1>
                </div> 

                <div className = "flex items-center justify-center text-4xl">
                    <p className="text-4xl">
                        <br />
                        Milk......................<br />
                        Coconut milk........<br />
                        Vanilla extract.....<br />
                        Almond extract....<br />
                        Maple extract......<br />
                        Whipped cream....<br />
                        Cocoa powder......<br />
                    </p>
                    <pre className="text-4xl pl-4 font-yeon-sung">
                        <br />
                        0.50<br />
                        0.50<br />
                        1.00<br />
                        1.00<br />
                        1.50<br />
                        0.50<br />
                        0.50<br />
                    </pre>
                </div>
            </div>
        </div>
    );
}