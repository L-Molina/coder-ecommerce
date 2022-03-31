import "../ItemListContainer/ItemListContainer.css"

const Item = ({ name, img }) => {
    return (
        <section>
            <picture>
                <img className="list-image" src={img} alt={name}/>
            </picture>
            <h3>{name}<p className="list-button">...</p></h3>
        </section>
        
    )
}

export default Item