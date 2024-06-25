import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"


export default function SinglePlayer (){
    const navigate = useNavigate()
    const {playerId} = useParams()
    
function handleClick (){
    navigate( `/`)
}
console.log(playerId)
    return <>
    <div>
    <h1>SinglePlayer</h1>

<button onClick={handleClick} className="px-4 py-3 bg-grY-800 text-black text-sm font-bold uppercase rounded hover:bg-gray">Return</button>
    </div>
    
    <div>{playerId}
    

    </div>

    </>
    
}