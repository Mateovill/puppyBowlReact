import { useNavigate } from "react-router-dom"

export default function PlayerCard ({player}){

const navigate = useNavigate()

function handleClick(){
    navigate( `/single-player/${player.id}`)
}
function deleteclick (){
navigate(`/deleteplayer/${player.id}`)
}
    
    return<div className="bg-white shadow-md rounded-lg px-10 py-10">
        <img
        src={player.imageUrl}
        alt={player.name}
        className="rounded-md h-48"></img>
        <div className="mt-4">
            <h1 className="text-lg uppercase font-bold">{player.name}</h1>
            <p className="mt-2 text-gray-600 text-sm">{player.breed}</p>
        </div>
        <div>
            <button onClick={handleClick} className="px-4 py-3 bg-grY-800 text-black text-sm font-bold uppercase rounded hover:bg-gray">Details</button>
            <button onClick={deleteclick} className="px-4 py-3 bg-grY-800 text-black text-sm font-bold uppercase rounded hover:bg-gray">Delete</button>
        </div>
    </div>
}
