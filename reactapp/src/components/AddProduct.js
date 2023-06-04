import axios from '../axios.js'
import React, { useState } from 'react';


const AddProduct = (props) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    function addProduct(){
        const params = {name: name,price:price,quantity:quantity};
        axios.post('/add_products/',params)
        .then(res =>{
            document.getElementById("closeModal").click();
        })
    };

    return(
        <>
        {/*  Modal  */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Name</span>
                            </div>
                                <input type="text" className="form-control" placeholder="Product Name" aria-label="Username" aria-describedby="basic-addon1" value={ name } onChange={evt => setName(evt.target.value)} required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Price</span>
                            </div>
                                <input type="number" className="form-control" placeholder="Product Price" aria-label="Username" aria-describedby="basic-addon1" value={ price } onChange={evt => setPrice(evt.target.value)} required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Quantity</span>
                            </div>
                                <input type="number" className="form-control" placeholder="Product Quantity" aria-label="Username" aria-describedby="basic-addon1" value={ quantity } onChange={evt => setQuantity(evt.target.value)} required/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" id="closeModal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={addProduct}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
        {/* MODAL END */}
        </>
    );
}
export default AddProduct