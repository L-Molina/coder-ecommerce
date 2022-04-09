import './ItemDetail.css'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="list-item">
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="list-image"/>
            </picture>
            <section className="list-item">
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
            </footer>
        </article>
    )
}

export default ItemDetail