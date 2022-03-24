import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return(
        <div className="list-container">
            <h1 className="list-item">{props.greeting}</h1>
        </div>
    )
} 

export default ItemListContainer