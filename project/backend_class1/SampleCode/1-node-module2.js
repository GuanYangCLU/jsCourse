exports.geometricSum = function(a, x, n) {
    if(x === 1) return a*n;
    console.log('in module 2');
    return a*(1 - Math.pow(x, n))/(1 - x);
};

exports.arithmeticSum = function(n) {
    console.log('in module 2');
    return (n + 1)*n/2;
};

exports.quadraticFormula = function(a, b, c) {
    const D = Math.sqrt(b*b - 4*a*c);
    console.log('in module 2');
    return [(-b + D)/(2*a), (-b - D)/(2*a)];
};