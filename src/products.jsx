import "./products.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
const [quantity, setQuantity] = useState(1);

    const handQuantityChange = (val) => {
console.log("QP changed", val);    
};    
    
      return (
    <div className="products">
<label className="prod-category">{props.info.category}</label>
    <img src="https://picsum.photos/200" alt="product" />
    <h2>{props.info.title}</h2>    

<div>
    <label className="total">$Total</label>
    <lable className="price">${props.info.price.toFixed(2)}</lable>
    </div>   
    
    <div>
    <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
    <button className="btn-add btn-sm btn-info">
        <i className="fa fa-cart-plus" aria-hidden="true"></i>
    </button>
 </div>
</div>
    );
};

export default Product;