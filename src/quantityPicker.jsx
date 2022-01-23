import React, { useState } from "react"

const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(1);

const increase = () => {
    console.log("+ button clicked");
    setQuantity(quantity + 1);
};

const descrease = () => {
    console.log("- button clicked");
   if(quantity > 1) {
       let val = quantity - 1;
       setQuantity(val);
   }
};

    return ( <div className="quantity-picker">
        <button onClick={increase}>+</button>
        <label>{quantity}</label>
        <button onClick={descrease}>-</button>
    </div>
    );
};

export default QuantityPicker;