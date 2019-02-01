const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadrEq(a, b, c);
alert(result);

function solveQuadrEq(a, b, c) {
    const diskr = calcDisk(a, b, c);
    if (a === 0){
        return 'Це не квадратне рівняння';
    }
    if (diskr < 0){
        return 'Коренів немає';
    }else{
         if (diskr === 0){
        const x = -1 * b / (2 * a);
        return 'x = ' + x;
         }else{
            const x1 = (-1 * b + Math.sqrt(diskr)) / (2*a);
            const x2 = (-1 * b - Math.sqrt(diskr)) / (2*a);
            return 'x1 = ' + x1 + ', x2 = ' + x2 ;
         }

    }
}
function calcDisk(a, b, c) {
    return b * b - 4 * a * c;
    
}