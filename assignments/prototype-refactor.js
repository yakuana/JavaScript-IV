/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


class GameObject {
    
  constructor(attributes) {
  
  // Date() is the current time 
  this.createdAt = attributes.createdAt; 

  // name in attributes object = this.name 
  this.name = attributes.name; 

  // dimensions in attributes object = this.dimensions 
  this.dimensions = attributes.dimensions; 

  }

  destroy() {
  // Returns the name of the person who has been removed. 
  return `${this.name} was removed from the game.`; 
  } 
}
  
  
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() -> returns the string '<object name> took damage.'
  * inherits GameObject
*/
  
class CharacterStats extends GameObject {
  
  constructor(charAttributes) {
      
      // inherits from GameObject 
      super(charAttributes);

        // new assignments for CharacterStats 
      this.healthPoints = charAttributes.healthPoints; 
  }

  takeDamage() {
      // Returns name + took damage, but does not affect the health points of the object 
      return `${this.name} took damage.`;
  }
}
  
  
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() -> returns the string '<object name> offers a greeting in <object language>.'
  * inherits CharacterStats and therefore also inherits GameObject 
*/

class Humanoid extends CharacterStats {
  
  constructor(humanAttributes) {
      
      // Allows inheritance of everything inside of CharacterStats 
      super(humanAttributes);

      // new assignments for humanoid 
      this.team = humanAttributes.team; 
      this.weapons = humanAttributes.weapons; 
      this.language = humanAttributes.language;
  }
    
  greet() {
      // returns the name of the object and its language
      return `${this.name} offers a greeting in ${this.language}.`
  }
}


/* 
  === Hero 
  * damage -> amount of health points the hero can deduct from an enemy
  * deplete() -> removes 3 * damage health points from an enemy 
*/

class Hero extends Humanoid {
  
  constructor(heroAttributes) {
      
      // Allows inheritance of everything inside of Humanoid   
      super(heroAttributes); 

      // new assignments for hero 
      this.damage = heroAttributes.damage; 
  }
  
  deplete(obj) {

      // subtract damage amount of health points from an object's health points 
      obj.healthPoints -= this.damage * 3; 
    
      // positive health points remaining 
      if (obj.healthPoints > 0) {
      
          // inform user of what happened and the enemy's remaining healthpoints 
          return `${obj.takeDamage()} ${this.name} depleted ${this.damage * 3} health point(s) from ${obj.name}. You have ${obj.healthPoints} remaining.`
      }
      
      // zero or negative health points remaining 
      return `${this.name} killed ${obj.name}! ${obj.destroy()} Super Heroes Never Lose!`; 
  }
}
  


/* 
    === Villian 
    * damage -> amount of health points the hero can deduct from an enemy
    * deplete() -> removes 3 * damage health points from an enemy 
*/
  
class Villian extends Humanoid {
  
  constructor(villianAttributes) {
      
      // Allows inheritance of everything inside of Humanoid   
      super(villianAttributes); 
      
      // new attribute for villian 
      this.pain = villianAttributes.pain; 
  }
  
  hurt(obj) {
  
      // subtract pain amount of health points from an object's healthpoints  
      obj.healthPoints -= this.pain; 
  
      if (obj.healthPoints > 0) {
      return `${obj.takeDamage()} ${this.name} depleted ${this.pain} health point(s) from ${obj.name}. You have ${obj.healthPoints} remaining.`
      }
      
      // health points <= 0 
      return `${this.name} killed ${obj.name}! ${obj.destroy()} Villians Reign Once Again!`; 
  }
}

  

  // Test you work by un-commenting these 3 objects and the list of console logs below: --- Done 
  
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  
  // hero 
  const spongeBob = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 3,
      height: 10,
    },
    healthPoints: 100,
    name: 'SpongeBob SquarePants',
    team: 'Super Hero',
    weapons: [
      'Bubbles',
      'Elastic Arms',
      'Patrick',
    ],
    language: 'Sponge and English',
    damage: 25,
  });
  
  // villian 
  const plankton = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 5,
      height: 3,
    },
    healthPoints: 250,
    name: 'Plankton',
    team: 'Villian',
    weapons: [
      'Computer Wife',
      'Chum Bucket Food',
    ],
    language: 'Sponge and Fish',
    pain: 40,
  });
  
    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    
    
    console.log(spongeBob.name); // SpongeBob SquarePants 
    console.log(spongeBob.weapons); // [ 'Bubbles', 'Elastic Arms', 'Patrick', ]
    console.log(spongeBob.damage); // 25
  
    console.log(plankton.name); // Platon
    console.log(plankton.weapons); // [ 'Computer Wife', 'Chum Bucket Food', ]
    console.log(plankton.pain); // 40
    
  
    console.log(spongeBob.healthPoints); // 100
    
    // SpongeBob SquarePants took damage. Plankton depleted 40 health point(s) from SpongeBob SquarePants. 
    // You have 60 remaining.
    console.log(plankton.hurt(spongeBob)); 
  
    console.log(plankton.healthPoints); // 250 
    
    // Plankton took damage. SpongeBob SquarePants depleted 75 health point(s) from Plankton. 
    // You have 175 remaining.
    console.log(spongeBob.deplete(plankton)); 