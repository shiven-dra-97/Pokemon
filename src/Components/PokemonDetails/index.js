import React, { Component, Suspense } from "react";
import withRouter from "../WithRouter.js";
const DetailsCard=React.lazy(()=>import("../DetailsCard/index.js"))
// import DetailsCard from "../DetailsCard/index.js";

class PokemonDetails extends Component{
           state={
            pokemon:{}
           }

        componentDidMount(){
            this.getIndivisualPokemonData()
        }

        getIndivisualPokemonData=async()=>{
            const name=this.props.params.name
            const url=`https://pokeapi.co/api/v2/pokemon/${name}/`
            const options={
                method:"GET"
            }
            const res=await fetch(url,options)
            
            if(res.ok){
                const fetchedPokemon=await res.json()
                const dataToshow={
                    image:fetchedPokemon.sprites.other["official-artwork"].front_default,
                    name:fetchedPokemon.name,
                    abilities:fetchedPokemon.abilities[0].ability.name,
                    height:fetchedPokemon.height,
                    weight:fetchedPokemon.weight,
                    power:fetchedPokemon.moves[0].move.name,
                    types:fetchedPokemon.types[0].type.name

                }    
                this.setState({pokemon:dataToshow})
            }
        }


    render(){
        const{pokemon}=this.state
         console.log(pokemon)

        return(
            <>
            <Suspense fallback={<div>Loading...</div>} >
                <DetailsCard data={pokemon}/>
            </Suspense>
            
            </>
        )
    }
}

export default withRouter(PokemonDetails)