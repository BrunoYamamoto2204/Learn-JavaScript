function fizzBuzz(num) {
    if (!Number.isNaN(num) && num >= 0 && num <= 100) {
        if (num % 3 === 0) {
            if (num % 5 === 0) {
                return "FizzBuzz"
            }

            return "Fizz"
        }

        if (num % 5 === 0) {
            return "Buzz"
        }

        else {
            return num
        }
    }
    else{
        return "Isso não é um número de 0 a 100!"
    }
}

console.log(fizzBuzz(10))