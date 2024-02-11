import * as React from "react";
import Card from "@/components/card";

export default function Shop(props) {
    return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-4 gap-6">
            <Card imgSrc="/shop/shirt.png" altText="t-shirt" itemName="Dragon Coffee t-shirt" price="$19.99" />
            <Card imgSrc="/shop/coffee_mug.png" altText="coffee mug" itemName="Coffee Mug" price="$19.99" />
            <Card imgSrc="/shop/coffee_beans.png" altText="coffee beans in bag" itemName="Half-pound Coffee Beans" price="$15.99" />
            <Card imgSrc="/shop/coffee_bags.png" altText="coffee beans" itemName="Double Roast" price="$45.99" />
            <Card imgSrc="/shop/tea_bags.png" altText="tea bags in box" itemName="Tea Bags (40)" price="$23.99" />
            <Card imgSrc="/shop/shirt2.png" altText="t-shirt" itemName="I Love Coffee t-shirt" price="$19.99" />
            <Card imgSrc="/shop/sweater.png" altText="sweater" itemName="Cute Coffee sweater" price="$29.99" />
            <Card imgSrc="/shop/shirt3.png" altText="t-shirt" itemName="Day Without Coffee t-shirt" price="$19.99" />
        </div>
    </div>
    );
}