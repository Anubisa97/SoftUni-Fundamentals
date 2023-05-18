function sort(a, b, c) {
    let numbers = [a, b, c]
    numbers.sort((a, b) => a - b);
    console.log(numbers[2]);
    console.log(numbers[1]);
    console.log(numbers[0]);
}
sort(5,2,3)