import { Component } from "react";
import PokemonList from "../PokemonList";
import "./index.css"
class Home extends Component{
    state={
        data:[],
        offset:0,
        currentPage:1
        
    }

       componentDidMount(){
           this.getPokemonData()
       }
       
       componentDidUpdate(){
        this.getPokemonData()
       }

       getPokemonData=async()=>{
        const{offset}=this.state
        const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        const options={
            method:"GET"
        }
        const res=await fetch(url,options)
        if(res.ok){
            const fetchedData=await res.json()
            this.setState({data:fetchedData.results})
        }
       }

    //    showData=()=>{
    //     this.setState(prevState=>({offset:prevState.offset+20}))
    //    }

    pageUp=()=>{
        const{offset,currentPage}=this.state
        this.setState(prevState=>({offset:prevState.offset+20,currentPage:prevState.currentPage+1}))
    }

    pageDown=()=>{
        const{offset,currentPage}=this.state
        this.setState(prevState=>({offset:prevState.offset-20,currentPage:prevState.currentPage-1}))
    }

      
    render(){
        const {data,offset,currentPage}=this.state
        const dataLength=1280
        const page=Math.ceil(dataLength/20)

        
        //
        // window.addEventListener("scroll",()=>{
        //     const{scrollHeight,scrollTop,clientHeight}=document.documentElement;
        //     if(scrollTop+clientHeight>= scrollHeight){
        //         this.showData()
        //     }
        //    })
       

        return(
            <div className="home">
            {/* <h1 className="heading">Pokemon List</h1> */}
            <img className="head-image" src="https://static1.textcraft.net/data1/1/6/16616897271f6b614374d50004d254d40d2cd565da39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255bfef95601890afd80709b478aacf871f2f8479c9206f733f842e.png"/>
             <div className="ul-container">
                <ul className="ul">
                {data.map(each=>(
                    <PokemonList key={each.name} name={each.name}/>
                ))}
                </ul>
             </div>
             <div className="buttons">
                     <button disabled={currentPage === 1} onClick={this.pageDown}  className="btn">Prev</button>
                     <p>{currentPage} of {page}</p>
                     <button disabled={currentPage === page} onClick={this.pageUp} className="btn">Next</button>
                </div>
            </div>
        )
    }
}

export default Home