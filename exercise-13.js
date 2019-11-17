function sorting(arrNumber) {
    // code di sini
    var temp = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = 0; j < arrNumber.length; j++) {
            if (arrNumber[j] > arrNumber[j + 1]) {
                temp = arrNumber[j];
                arrNumber[j] = arrNumber[j + 1];
                arrNumber[j + 1] = temp;
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber) {
    // code di sini
    if (arrNumber.length === 0) {
        return arrNumber
    } else {
        var counter = [];
        var angka = [];
        for (var i = 0; i < arrNumber.length; i++) {
            var cek = false;
            if (i === 0) {
                angka.push(arrNumber[i]);
                counter.push(1);
            } else {
                for (var j = 0; j < angka.length; j++) {
                    if (angka[j] === arrNumber[i]) {
                        cek = true;
                        counter[j] += 1;
                    }
                }
                if (cek === false) {
                    angka.push(arrNumber[i]);
                    counter.push(1);
                }
            }


        }
        var max = counter[0];
        var angkaMax = angka[0]
        var indexMax = 0;
        for (var a = 0; a < angka.length; a++) {
            if (angkaMax < angka[a]) {
                max = counter[a];
                angkaMax = angka[a]
                indexMax = a;
            }
        }

        return 'angka paling besar adalah ' + angkaMax + ' dan jumlah kemunculan sebanyak ' + max + ' kali';
    }

}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''