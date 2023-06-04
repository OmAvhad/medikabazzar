import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import ProductTable from './components/GetProducts';
import AddProduct from './components/AddProduct';
function App() {

    const [products,setProducts] = useState([]);
    
    return ( 
        <>
        {/* As a heading  */}
        <nav className="navbar navbar-light bg-light">
            <h3 className="navbar-brand">Products</h3>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">ADD PRODUCTS</button>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
            </form>
        </nav>
        {/* Heading End  */}
        <AddProduct products={products} setproduct={setProducts}/>
        <ProductTable products={products} setproduct={setProducts}/>
        </>

    );
}

export default App;