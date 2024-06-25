import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPlayers } from "../api";
import { useNavigate } from "react-router-dom"
import PlayerCard from "../components/PlayerCard";
import NewPlayer from "./NewPlayer";

export default function AllPlayers(){
const [players, setPlayers] = useState([])
console.log(players);

const navigate = useNavigate()

function handleClick (){
    navigate('/NewPlayer/')
}
useEffect(() =>{
(async function (){ 
    const recievedPlayers = await fetchPlayers()
    setPlayers(recievedPlayers);
})()
},[])
    
    return (
        <>
        <div className ="flex flex-col justify-center bg-gray-100">
        <div className ="flex justifiy-between items-center px-20 py-5">
            <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
                Puppy Bowl
            </h1>
            <Link to='/new-player' className="px-4 py-3 bg-grY-800 text-black text-sm font-bold uppercase rounded hover:bg-gray">New Player</Link>
        </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {players.map((player)=>{
            return <PlayerCard
            key={player.id}
             player={player}/>
           
        })
       }
       </div>
       <div />
       </>
    )
  
}