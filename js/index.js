const num = parseInt(prompt("Enter"))

alert("loop method: " + fibLoop(num));
alert("recursion: " + fibRecursion(num));
alert("arrey: " + fibArrey(num));

function fibLoop(n) {

    let A = 0;
    let B = 1;
    let C = 1;

    for (n = 2; n <= num; n++) {
        C = A + B;
        A = B;
        B = C;
    }
    return C;
}
function fibRecursion(n) {
    if (n <= 2) {
        return 1;
    }
    return fibRecursion(n - 1) + fibRecursion(n - 2);
}

function fibArrey(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}
