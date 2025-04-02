function recursiva(max) {
    if (max >= 10) return;
    max++
    console.log(max)
    recursiva(max)

}
recursiva(0)

function fibonacci(num) {
    if (num === 1) return 1
    if (num === 2) return 1

    else {
        return (fibonacci(num-1) + fibonacci(num-2));
    }
}

console.log()
console.log(fibonacci(8))