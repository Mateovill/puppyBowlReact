const Baseurl = 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/'

export async function fetchPlayers(){
    try {
        const response = await fetch(`${Baseurl}/players`)
        const result = await response.json() //
        
        if(result.success){
            return result.data.players //it is coming from the URL, the data and players are following a hierchary in the data
      
        }
    } catch (error) {
        console.log(error)
    }
}

export async function addNewPlayer(player){
    
    try {
        const response = await fetch(`${Baseurl}/players/`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: player.name,
                breed: player.breed,
                imageUrl: player.imageUrl,
              }),
            }
        );

        const json = await response.json();

        if(json.success) {
            return json.data.players;
        }

    } catch(error) {
        console.error("Error Adding Player", error);
    }

}

export async function deletePuppy(playerId){
    try {
        const response = await fetch(
            `${Baseurl}/players/${playerId}`,
            {
                method: 'DELETE',
            }
        )
        const json = await response.json();
        if(json.success){
            console.log('Player Deleted');
        }
    } catch (error) {
        console.error('Error Deleting Player', error);
        }
}