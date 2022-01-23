import "./catalog.css";
import React, {useState, useEffect} from "react";
import Product from "./products";


const Catalog = () => {
    //create a data state variable to contain an array
    

    const loadData =()=>{
        console.log("catalog loaded!");
        // get data from the service
        let service= new DataService(); //create an instance of a class
        let data=service.getCatalog();
        console.log("The data", data);
    };
    
    // when the component loads, execute the arrow fn
    useEffect(()=>{
        loadData();
    }, []);
    return (
    <div className="catalog-page">
        <h3>Check out our selection!</h3>
        <div className="product-container">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        </div>
        

    </div>
    );
};

export default Catalog;

