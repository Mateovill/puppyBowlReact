import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { deletePuppy } from "../api";

export default function Delete(){
    const navigate = useNavigate();
    const {playerId} = useParams();

    useEffect(() => {
        async function removePlayer(){
            console.log("Player is being deleted", playerId)
            await deletePuppy(playerId)
        }
        removePlayer();
        setTimeout(() => {navigate('/')}, 3000);
    }, []);
    return (
        <h1>Deleting Puppy </h1>
    )
}