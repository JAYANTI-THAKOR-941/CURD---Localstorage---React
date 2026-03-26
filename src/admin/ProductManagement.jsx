import { useEffect, useState } from "react";

const ProductManagement = ()=>{

    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [image,setImage] = useState("");

    const [products,setProducts] = useState(()=>{
        const myAllProducts = localStorage.getItem('myProducts');
        return myAllProducts ? JSON.parse(myAllProducts) : [];
    });


    const handleSubmit = (e)=>{
        e.preventDefault();

        const newProduct = {
            name:name,
            description:description,
            price:price,
            image:image
        }
        setProducts([...products,newProduct]);
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
    }    


    useEffect(()=>{
        localStorage.setItem('myProducts',JSON.stringify(products));
    },[products])

    return(
        <>
            <h1>Product Management</h1>

            <form onSubmit={handleSubmit}>
                <h2>Add New Product</h2>
                <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="text" placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)} />
                <input type="text" placeholder="Enter price" value={price} onChange={(e)=>setPrice(e.target.value)} />
                <input type="text" placeholder="Enter image" value={image} onChange={(e)=>setImage(e.target.value)} />
                <button>Add New Product</button>
            </form>
        </>
    )
}

export default ProductManagement;