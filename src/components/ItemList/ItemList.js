import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <div className='list-container'>
            <div className='list-wrap'>
                    {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </div>
        </div>
    )
}

export default ItemList