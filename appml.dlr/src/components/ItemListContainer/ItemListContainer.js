import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";


const ItemListContainer = (prop) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts().then(Response => {
            setProductos(Response)


        })
    }, [])


    // const nuevoProducto = productos.map(productos => <div>{productos.name}{productos.price}</div>)






    return (
        <div>
            <h1>{prop.greeting}</h1>
            <ItemList productos={productos.name} />

            {/* {productos.map(productos => <p key={productos.id}>{productos.name}</p>)} */}
            {/* {nuevoProducto} */}
        </div >
    )
}

export default ItemListContainer