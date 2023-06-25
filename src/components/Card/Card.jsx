import "../Card/styles.scss"
import { useNavigate } from "react-router-dom"


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
            <a href={button} target="_blank">
           <button>Jogue Agora!</button>
           </a>
        </div>
    )
}

export default Card