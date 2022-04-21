import Item from '../Item/Item'
import { memo } from 'react'
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <div className='list-container'>
            <div className='list-wrap' onClick={() => console.log('Hice click en ItemList')}>
                    {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </div>
        </div>
    )
}

export default memo(ItemList, (oldProps, newProp) => {})