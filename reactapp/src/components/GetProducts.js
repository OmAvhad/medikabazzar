import React,{useEffect} from 'react';
import axios from '../axios.js'


const GetProducts = (props) => {

    const { products,setproduct} = props
    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("type")
    const name = queryParameters.get("name")
    console.log(type);
    console.log(name);

    useEffect(()=>{
        console.log("change found")
        // async function fetchData(){
        //     const request = await axios.get('/get_products/')
        //     setproduct(request.data)
        //     return request;
        // }
        async function fetchData(){
            const params = {name: 'Pankaj',
        email: "pankaj@gmail.com",
            password: "Pankaj@483",
            mobile: "9987035170"};
            const response = await axios.get('http://127.0.0.1:8000/api/get-product')
            // setproduct(request.data)
            // return request;
            console.log(response);
        }
        fetchData();
        // if [] run once when page loads
    }, []); 

    return(
        <>
        <div>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            {products.map((product,index)=>(
                <tbody key={index}>
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                </tbody>
            ))}
        </table>
        </div>  
    
        </>
    );
}

export default GetProducts