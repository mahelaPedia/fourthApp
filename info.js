import React from 'react';
import { Si1Password, SiAdblock, SiNike, SiNetflix, SiOpera } from "react-icons/si";



const Products = [
    { id: 3, name: "Nike", price: 300, image: "./images/nikeShoe.png", fa: <Si1Password/>},
    { id: 4, name: "Yeezy", price: 230, image: "./images/yeezyShoe.png",  fa: <SiAdblock/>},
    { id: 1, name: "Adidas", price: 142, image: "./images/adidasShoe.png", fa: <SiNetflix/>},
    { id: 2, name: "Puma", price: 510, image: "./images/pumaShoe.png", fa: <SiOpera/>},
    { id: 5, name: "Adidas", price: 420, image: "./images/adidasShoe1.png", fa: <SiNetflix/>},
    { id: 6, name: "Puma", price: 130, image: "./images/pumaShoe1.png",fa: <SiOpera/>},
    { id: 7, name: "Nike", price: 640, image: "./images/nikeShoe2.png", fa: <Si1Password/>},
    { id: 8, name: "Yeezy", price: 223, image: "./images/yeezyShoe1.png", fa: <SiAdblock/>},

]

export default Products;