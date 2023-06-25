import "../Card/styles.scss"

const Card = ({image, name, release, description}) => {
    return(
        <div className="card">
        <div className="imagecontainer">
            <img src={image} alt=""/>
        </div>
        <div className="textcontainer">
            <h3>{name}</h3>
            <h2>{description}</h2> 
            <p>Lançamento: {release}</p>
            
        </div>
        </div>
    )
}

export default Card