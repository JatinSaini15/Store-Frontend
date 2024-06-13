import React, {useEffect, useState} from 'react'
import { deleteProduct, listProducts } from '../services/ProductService'
import { useNavigate } from 'react-router-dom'

const ListProductComponent = () => {

    const [product, setProducts] = useState([])
    const [totalExpense, setTotalExpense] = useState(0);


    const navigator = useNavigate();

    useEffect(() => {
        getAllProducts();

    }, [])

    useEffect(() => {
        let total = product.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);
        setTotalExpense(total);
    }, [product])

    function getAllProducts(){
        listProducts().then((response) => {
            setProducts(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewproduct(){
        navigator('/add-product')
    }

    function updateProduct(id){
        navigator(`/edit-product/${id}`)
    }


    function removeProduct(id){
        if(window.confirm('Are you sure you want to remove this item?')) {
            console.log(id);
            deleteProduct(id).then((response) => {
                getAllProducts();
            }).catch(error => {
                console.error(error);
            })
        }
    }
    
  return (
    <div className='container mt-4'>
        <h1 className='text-center'><u>Inventory List</u></h1>
        <button className='btn btn-primary mb-2' onClick = {addNewproduct}>Add Product</button>
        <button className='btn btn-info mb-2 ms-2'>Total Expense: ₹{totalExpense}</button>
        <div className='back'>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>

                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Product Unit</th>
                    <th>Price (₹)</th>
                    <th>Supplier</th>
                    <th>Category</th> 
                    <th>Actions</th>
                
                </tr>
            </thead>
            <tbody>


                {
                    product.map(product =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.productName}</td>
                            <td>{product.quantity}</td>
                            <td>{product.unit}</td>
                            <td>{"\u20B9" + product.price}</td>
                            <td>{product.supplier}</td>
                            <td>{product.category}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateProduct(product.id)}>Edit Item</button><br></br>
                                <button className='btn btn-danger' onClick={() => removeProduct(product.id)}
                                    style={{marginTop: '4px'}}
                                >Remove</button>
                                
                            </td>

                        </tr>)
                }


                <tr>

                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ListProductComponent
