import "../Card/styles.scss"

const Card = ({image, name, release, description, plataform, genero, button}) => {
    return(
        <div className="card">
        <div className="imagecontainer">
            <img src={image} alt=""/>
        </div>
        <div className="textcontainer">
            <h3>{name}</h3>
            <h2>{description}</h2> 
            <p>Lançamento: {release}</p>
            <p>Plataforma: {plataform}</p>
            <p>Gênero: {genero}</p>
        </div>
            <button href={button}>Compre Aqui!</button>
        </div>
    )
}

export default Card