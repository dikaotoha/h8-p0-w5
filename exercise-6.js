function meleeRangedGrouping(str) {
    //your code here
    var result = [];
    var ranged = [];
    var melee = [];
    var strHero = '';
    var cek = false;
    for (var i = 0; i < str.length; i++) {
        if (cek === true) {
            if (str[i] === 'R') {
                ranged.push(strHero);
                strHero = '';
                cek = false;
            } else {
                melee.push(strHero);
                strHero = '';
                cek = false;
            }
        }
        if (str[i] !== '-') {
            strHero += str[i];
        } else {
            cek = true;
        }
        if (str[i] === ',') {
            strHero = '';
        }



    }
    if (str.length !== 0) {
        result.push(ranged);
        result.push(melee);
    }

    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []