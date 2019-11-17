function totalDigitRekursif(angka) {
    // you can only write your code here!
    var strAngka = '';
    strAngka += angka;
    if (strAngka.length === 1) {
        return Number(strAngka);
    } else {
        return Number(strAngka[0]) + totalDigitRekursif(Number(strAngka.substr(1)))
    }
}
// for (var i = 0; i < strAngka.length; i++) {
//     result += Number(strAngka[i]);
// }
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
// console.log(totalDigitRekursif(1542)); // 12
// console.log(totalDigitRekursif(5)); // 5
// console.log(totalDigitRekursif(21)); // 3
// console.log(totalDigitRekursif(11111)); // 5