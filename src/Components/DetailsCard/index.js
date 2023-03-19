import "./index.css"
const DetailsCard = props => {
    const { data } = props
    const{image,name,power,height,weight,types,abilities}=data
    return (
        <div className="detailsCard">
            <div className="content">
                <img className="pokemon" src={image} alt={name} />
                <hr className="hr"/>
                <p className="paragraph">Name: {name}</p>
                <p className="paragraph">Type: {types}</p>
                <p className="paragraph">Ability: {abilities}</p>
                <p className="paragraph">Power: {power}</p>
                <p className="paragraph">Height: {height}</p>
                <p className="paragraph">Weight: {weight}</p>
            </div>
              
        </div>
    )
}
export default DetailsCard