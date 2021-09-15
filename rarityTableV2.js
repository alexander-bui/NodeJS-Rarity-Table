/* 
Author: alexander-bui

Setup: 
For each trait, [name, weight, [index of traits for that rarity] ]
weight: Cumulative (0 to 1), start with lowest to highest tier

Ex: [common, 0.5] = If roll is between 0 and 0.5, then Common (Inclusive)

Sample Output:
Rand: 0.1597205545460758
Found it: [ 'common', 0.5, [ 'commonSword', 'commonGun', 'commonHat' ] ]
randNumTrait: 1
trait commonGun
Rand: 0.9813008633254117
Found it: [
  'legendary',
  1,
  [ 'legendarySword', 'legendaryGun', 'legendaryHat' ]
]
randNumTrait: 0
trait legendarySword
finalTable:  [ 'commonGun', 'legendarySword' ]
*/

let table = [
    [
    'trait1', [
        ['common', 0.5, ['commonSword','commonGun','commonHat']], // 50% chance
        ['uncommon', 0.8, ['uncommonSword','uncommonGun','uncommonHat']], // 30%
        ['rare', 0.9, ['rareSword','rareGun','rareHat']], // 10%
        ['epic', 0.98, ['epicSword','epicGun','epicHat']], // 8%
        ['legendary', 1, ['legendarySword','legendaryGun','legendaryHat']] // 2%
        ]
    ],
    [
    'trait2', [
        ['common', 0.5, ['commonSword','commonGun','commonHat']],
        ['uncommon', 0.8, ['uncommonSword','uncommonGun','uncommonHat']],
        ['rare', 0.9, ['rareSword','rareGun','rareHat']],
        ['epic', 0.98, ['epicSword','epicGun','epicHat']],
        ['legendary', 1, ['legendarySword','legendaryGun','legendaryHat']]
        ]
    ],
];

var gotRare;
var trait;
let finalTable = [];

function mainGen() {
    // For each trait table
    for (let i = 0; i < table.length; i++) {
        const rand = Math.random();
        console.log("Rand:",rand);
        // Find rarity and push trait into finalTable
        for (let j = 0; j < table[i][1].length; j++) {	
            if (table[i][1][j][1] >= rand) {
                console.log("Found it:",table[i][1][j]);
                gotRare = table[i][1][j][2];
                finalTable.push(getTrait(gotRare));
                break;
            } // Highest Tier - Fail safe
            else if (j >= table[i][1].length - 1) {
                console.log("Fail:",table[i][1][j]);
                gotRare = table[i][1][j][2];
                finalTable.push(getTrait(gotRare));
            }
        };
    };
    console.log("finalTable: ",finalTable);
};

// When rarity is found, determine which trait from pool
function getTrait(rareSet) {
    const randNum = Math.floor(Math.random() * (rareSet.length - 0));
    console.log("randNumTrait:",randNum);
    console.log("trait",rareSet[randNum]);
    return rareSet[randNum];
};

mainGen();