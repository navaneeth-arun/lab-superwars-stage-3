const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    // Instead of forloop use Map method
    // Code here
    detailedPlayers= players.map((pName, i) => {
        return{
            name:pName,
            strength:getRandomStrength(),
            image:`images/super-${i+1}.png`,
            type: i%2==0?"hero":"villain"
        }
    })
    return detailedPlayers;
}


// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}



// Build player template
const buildPlayers = (players, type) => {
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    let valid=players.filter(playerData=>{
        if (playerData.type == type) {
            return true;
        }
    })
    let fragment=valid.map((playerData) => {
        return `
        <div class="player">
            <img src="${playerData.image}" alt="">
            <div class="name">${playerData.name}</div>
            <div class="strength">${playerData.strength}</div>    
        </div>
        `;
    });
    return fragment.join("");
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}