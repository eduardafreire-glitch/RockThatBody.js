
const lines = [
    ["i wanna dance-", 1200],
    ["i wanna dance in the lights", 3000],
    ["i wanna ro-", 1000],
    ["i wanna rock your body", 2600],
    ["i wanna go-", 1000],
    ["i wanna go for ride", 2800],
    ["hope in the music and", 1400],
    ["rock that body", 2000],
    ["rock your body", 1300],
    ["come on, come on", 900],
    ["rock that body", 1000],
    ["rock that body", 1000],
    ["(rock that body)", 1000],
    ["come on, come on", 800],
    ["rock that body", 1000],
];

async function printlyrics() {
    for (const [line, delay] of lines) {
        console.log(line);

        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

printlyrics();
