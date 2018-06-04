// Episode 1

var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

//My name is Bob will be outputted

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// I expect the score to be 3 as the var declared inside the function will take priority

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// I expect ducks, dogs and lions to be outputted on separate lines as the myAnimals inside the function will take priority 

var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree ); 
// I expect the first output to include the name Colin and the second output to include the name Upul.
// the first log will show the var set inside the function, and the second will show the orginal global var.

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
//this function will return Poirot as detectiveInfo set detective name as Poirot

var murderer = 'Rick';

var outerFunction = function() {
  var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
// murderer is declared a globalVariable
// outerFunction() has it's own local murderer variable.
// outerFunction contains the innerFunction() variable which doesn't declare var
// but if reached will re-assign the outerFunction murderer Variable to 'Jerry'.
// the string outputted will print out the globalVariable 'Rick'. The other 
// two murderer variables are only inside the outer and inner functions.

var character = {
  name: 'Mr Green',
  murderWeapon: 'Candlestick',
  room: 'Billiard room'
};

character.name = 'Professor Plum';
character.murderWeapon = 'Rope';
character.room = 'Conservatory';
character.name = 'Mrs White';

var character = {
  name: 'Mr Green',
  murderWeapon: 'Candlestick',
  room: 'Billiard room'
};

var cludo = function(character){
  console.log('The murderer was ' + character.name + ', in the ' + character.room + ' with the ' + character.murderWeapon + '.');

}

cludo(character);

