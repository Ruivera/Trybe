const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* Exe 1 */
const dragonAttack = (dragon) => {
    const { strength } = dragon;
    const dragonDmg = Math.floor(Math.random() * (strength - 15 + 1) + 15);
    return dragonDmg;
};
console.log(dragonAttack(dragon));

/* Exe 2 */
const warriorAttack = (warrior) => {
    const { strength, weaponDmg} = warrior;
    const warriorDamage = Math.floor(Math.random() *
        (strength * weaponDmg - strength + 1) + strength);
    return warriorDamage;
};
console.log(warriorAttack(warrior));

/* Exe 3 */
const mageAttackDetails = (mage) => {
    const { intelligence, mana } = mage;
    const turnStats = {
        manaSpent: 0,
        damageDealt: 'Não possui mana suficiente',
    };

    const mageDamage = Math.floor(Math.random() * (intelligence * 2 - intelligence) + intelligence);
    if (mana > 15) {
        turnStats.manaSpent = 15;
        turnStats.damageDealt = mageDamage;
    }
    return turnStats;
};
console.log(mageAttackDetails(mage));

/* Bonus Parte 2 */
const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: (callback) => {
        const warriorDamage = callback(warrior);
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warriorDamage;
    },
    mageTurn : (callback) => {
        const mageTurnStats = callback(mage);
        const mageDamage = mageTurnStats.damageDealt;
        mage.damage = mageDamage;
        mage.mana -= mageTurnStats.manaSpent;
        dragon.healthPoints -= mageDamage
    },
    dragonTurn : (callback) => {
        const dragonDamage = callback(dragon);
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -=dragonDamage;
        dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttackDetails);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());
