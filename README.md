# NodeJS-Rarity-Table
Module to generate traits for NFTs

How to Run: node rarityTableV2.js

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
