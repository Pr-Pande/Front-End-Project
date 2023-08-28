import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DATA from "../Data";

const ProductDetails = () => {
    const [cartBtn, setCartBtn] = useState("Add To Cart")
    const prodid = useParams();
    const proDetail = DATA.filter(x => x.id == prodid.id);
    const product = proDetail[0];
    //console.log(product.img);
    const handleCart = (product) => {
        if (cartBtn === "Add To Cart") {
            setCartBtn("Remove From Cart");
            
        }
        else {
            setCartBtn("Add To Cart");
        }
    }

    return (
        <div className="product-details-container" style={{ backgroundColor: "#f5f5f5", padding: "60px", minHeight: "100vh" }}>
            <div className="container my-5 py-3">
                <div className="row" style={{ height: "120px" }}>
                    <div className="col-12 text-center">
                        <h1 className="fw-bold" style={{ color: "#00008b" }}> {product.title} </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={`${product.img}`} className="product-image" alt={product.title} height="300px" />
                    </div>
                    <div className="col-md-6" style={{ alignItems: "space-between"}}>
                        <div>
                            <h3 className="fw-bold"><b> Model : {product.title} </b></h3>
                            <h5 className="fw-bold" style={{ color: "#808080" }}><b> MADE BY : {product.comp} </b></h5>
                            <h5 className="fw-bold" style={{ color: "#483d8b" }}><b> Price : ${product.price} </b></h5>
                            <p className="fw-bold"><b> Some Info About Product </b></p>
                            <p className="fw-bold" style={{ color: "#2f4f4f" }}><b> {product.desc} </b></p>
                        </div>
                        <div className="d-flex mt-2">

                            <Link to={'/'} className="btn btn-outline-primary" style={{ marginRight: "10px" }}>Back To Products</Link>

                            <button onClick={()=>handleCart(product)} className="btn btn-outline-warning">{cartBtn}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails;


