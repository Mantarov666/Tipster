




export const getAll = () => {
    return (fetch('http://localhost:3030/jsonstore/matches')
                .then(res=>res.json()))
}


export const getOne = (matchId) =>{
    return (fetch(`http://localhost:3030/jsonstore/matches/${matchId}`)
    .then(res=>res.json()))
}