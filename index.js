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
