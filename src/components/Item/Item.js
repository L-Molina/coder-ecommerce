import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    return (
        <article>
            <header className="list-item">
                <h2>{name}</h2>
            </header>
            <picture>
                <img className="list-image" src={img} alt={name}/>
            </picture>
            <section >
                <p className="list-item">
                    Price: ${price}
                </p>
            </section>
            <footer>
                <h3>
                    <Link to={`/detail/${id}`} className="list-button">
                        See the Details
                    </Link>
                </h3>
            </footer>
        </article>
        
    )
}

export default Item