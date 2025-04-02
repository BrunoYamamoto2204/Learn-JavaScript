function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.round(r)
}

const max = 1;
const min = 50;
rand = 10;

while (rand !== 10) { // Nem roda porque a condição já começa falsa
    rand = random(min, max);
    console.log(rand);
}

console.log("-".repeat(50))

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);