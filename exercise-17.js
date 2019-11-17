function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var strAngka = '';
    strAngka += angka;

    var temp = 1;
    for (var i = 0; i < strAngka.length; i++) {

        temp *= strAngka[i]
    }
    strAngka = String(temp);

    if (strAngka.length > 1) {
        return kaliTerusRekursif(strAngka)
    } else {
        return strAngka
    }
    // return Number(strAngka);

}
// while (strAngka.length > 1) {
//     var temp = 1;
//     for (var i = 0; i < strAngka.length; i++) {
//         // console.log('aw')
//         temp *= strAngka[i]
//     }
//     strAngka = String(temp);
//     // console.log(temp)
// }

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6