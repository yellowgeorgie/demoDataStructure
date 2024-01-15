//
// Data from the course
//
const team = {
    team1: 'Chamberlain',
    team2: 'Bishop',
    players: [
        [
            'Bagtas',
            'Jose',
            'Custard',
            'Strawberry',
            'Banana',
            'Pineapple',
            'Apple',
            'Jameson',
            'Walker',
            'Peter',
            'Arnold',
        ],
        [
            'Bangtan',
            'JohnCooke',
            'JayMain',
            'Gin',
            'Vee',
            'Sugar',
            'Vesper',
            'Bond',
            'Smith',
            'Fred',
            'Lagang',
        ],
    ],
    score: '5:0',
    scored: ['Walker', 'Peter', 'Jameson', 'Apple', 'Walker'],
    date: 'Nov 9th, 2050',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Task 1
const [players1, players2] = team.players;

// Task 2
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

// Task 3
const allPlayers = [...players1, ...players2];

// Task 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//Task 5
const {
    odds: { team1, x: draw, team2 },
} = team;

// Task 6
const printGoals = (...players) => {
    for (let player of players) {
        const playerScore = [...team.scored].filter(el => el === player);
        console.log(`${player} - ${playerScore.length}`);
    }
    console.log(`Total goals scored ${players.length}`);
};

// Task 7
team1 < team2 && console.log('Team 1 is more likely to win');

printGoals('Kimchi', 'Walker', 'Thiago', 'Apple');

// console.log(team1, draw, team2);

// Coding challenge #2

// Task 1
// for (const [ind, player] of team.scored.entries()) {
//     console.log(`Goal ${ind + 1} scored by ${player}`);
// }

// Task 2
const oddVals = Object.values(team.odds);

const oddCheck = () => {
    let sum = 0;
    for (const odd of oddVals) {
        sum += odd;
    }
    console.log(sum / oddVals.length);
};

oddCheck();

// Task 3

for (const [who, odd] of Object.entries(team.odds)) {
    console.log(
        `Odd of ${who === 'x' ? 'draw' : 'victory ' + team[who]}: ${odd}`
    );
}

// Bonus task

const scorers = {};

for (let player of team.scored) {
    scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
}

console.log(scorers);
