function changeVocals(str) {
    //code di sini]
    var arrStrChangeVocal = [];
    var result = '';
    for (var i = 0; i < str.length; i++) {
        arrStrChangeVocal.push(str[i])
    }
    for (var i = 0; i < arrStrChangeVocal.length; i++) {
        if (arrStrChangeVocal[i] === 'a') {
            arrStrChangeVocal[i] = 'b';
        } else if (arrStrChangeVocal[i] === 'A') {
            arrStrChangeVocal[i] = 'B';
        } else if (arrStrChangeVocal[i] === 'i') {
            arrStrChangeVocal[i] = 'j';
        } else if (arrStrChangeVocal[i] === 'I') {
            arrStrChangeVocal[i] = 'J';
        } else if (arrStrChangeVocal[i] === 'u') {
            arrStrChangeVocal[i] = 'v';
        } else if (arrStrChangeVocal[i] === 'U') {
            arrStrChangeVocal[i] = 'V';
        } else if (arrStrChangeVocal[i] === 'e') {
            arrStrChangeVocal[i] = 'f';
        } else if (arrStrChangeVocal[i] === 'E') {
            arrStrChangeVocal[i] = 'F';
        } else if (arrStrChangeVocal[i] === 'o') {
            arrStrChangeVocal[i] = 'p';
        } else if (arrStrChangeVocal[i] === 'O') {
            arrStrChangeVocal[i] = 'P';
        }
        result += arrStrChangeVocal[i];
    }
    // console.log(result)
    return result;
}

function reverseWord(str) {
    //code di sini
    var arrStrRev = [];
    var result = '';
    for (var i = str.length - 1; i >= 0; i--) {
        arrStrRev.push(str[i])
    }
    for (var j = 0; j < arrStrRev.length; j++) {
        result += arrStrRev[j];
    }
    return result;
}

function setLowerUpperCase(str) {
    //code di sini
    var hurufBesar = str.toUpperCase();
    var hurufKecil = str.toLowerCase();
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === hurufBesar[i]) {
            result += hurufKecil[i];
        } else {
            result += hurufBesar[i];
        }
    }
    return result;
}

function removeSpaces(str) {
    //code di sini
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var change = changeVocals(name);
    var reverse = reverseWord(change);
    var setLower = setLowerUpperCase(reverse);
    var result = removeSpaces(setLower);
    return result;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

/**
 * Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf 
setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
 */