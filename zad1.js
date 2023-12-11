function plusPlus(orig_x) {
    let orig_x_coerced = Number(orig_x);
    x = orig_x_coerced +1;
    return x;
}

function izracunajFaktorijel(num) {
    var result = num;
    if (num === 0 || num === 1) 
    return 1; 
    while (num > 1) { 
    num--;
    result *= num;
    }
    return result;
}
console.log(izracunajFaktorijel(5));