export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-green-500 text-black text-xl">

            <div className="flex items-center">
                <img src="/coffee_cup.png" alt="coffee cup" className="h-13"/>
                <h1>True Brew</h1>
            </div>

            <div className="flex space-x-10">
                <div className="flex">
                    <a href="/" className="mr-6 active:text-blue-500">Homepage</a>
                    <a href="/aboutUs" className="mr-6 active:text-blue-500">About Us</a>
                    <a href="/shop" className="mr-6 active:text-blue-500">Shop</a>
                    <a href="/menu" className="mr-6 active:text-blue-500">Menu</a>
                    <a href="/locations" className="mr-6 active:text-blue-500">Locations</a>
                </div>
                <div className="flex space-x-3">
                    <img src="/profile_pic.png" alt="profile pic" className="h-15 w-auto"/>
                    <a href="/account">Luca</a>
                </div>
                <div className="flex">
                    <a href="/shoppingCart" className="ml-6"> <img src="/shopping_cart.png" alt="shopping cart" className="h-15 w-auto"/> </a>
                </div>
            </div>
        </nav>
    );
}