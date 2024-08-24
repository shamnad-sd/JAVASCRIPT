const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard', 'Martinez', 'Alaba',
            'Davies', 'Kimmich', 'Goretzka', 'Coman',
            'Muller',
            'Gnarby', 'Lewandowski',
        ], [
            'Burki',
            'Schulz', 'Hummels', 'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
 
// qst-1
let players1 = game.players[0];
let players2 = game.players[1];

console.log("players 1:", players1);
console.log("players 2:", players2);

// qst-2

let GK =players1[0];
let fieldPlayers = players1.slice(1);

console.log("goalkeeper:",GK);
console.log("field players:", fieldPlayers);

// qst-3
let allPlayers =[...players1,...players2]
console.log("all players :",allPlayers);

// qst-4

let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log("players1Final:", players1Final);

// qst-5
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;

console.log("team1:", team1);
console.log("draw:", draw);
console.log("team2:", team2);

// qst-6
let minOdd = Math.min(team1, draw, team2);
let likelyWinner = Object.entries(game.odds).find(([key, value]) => value === minOdd)[0];

console.log(`The team more likely to win is ${game[likelyWinner]}`);


