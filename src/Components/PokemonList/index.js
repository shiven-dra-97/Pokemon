import { Link } from "react-router-dom"
import "./index.css"

const PokemonList=(props)=>{
    const{name}=props
    return(
        <Link className="text" to={`/pokemon/${name}`}>
        <div className="pokelist">
        <li className="li">
         {name}
        </li>
        </div>
        </Link>
    )
}
export default PokemonList