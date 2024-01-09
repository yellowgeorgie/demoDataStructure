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
    score: '4:0',
    scored: ['Walker', 'Peter', 'Jameson', 'Apple'],
    date: 'Nov 9th, 2050',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Task 1
const players1 = team.players[0];
const players2 = team.players[1];

// Task 2
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

// Task 3
const allPlayers = [...players1, ...players2];

// Task 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//Task 5
const { team1, x: draw, team2 } = team.odds;

// Task 6

console.log(team1, draw, team2);
