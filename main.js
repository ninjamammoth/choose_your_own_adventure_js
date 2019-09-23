prompt("Welcome Adventurer! Please enter your name and then venture forth into the unkown!")
alert("Welcome to the Quest for Dungeons and Demons")
alert("Succeed or This Game Will Claim Your Souls!")
//Data Storage
var character = {
    name : "Adventurer",
    health : 1500,
    fight : 100,
    run : 1,
    level : 0,
    winStatus : "nil",
    restart : "ok"
}
//Monster Appearance
var monster = {
}
var strings = function(level, type){
    var battle = "Demon Dragon has appeared before you! Will you do Battle, Flee, or restart the game?? (f/ r/ end): " + "\nLevel: " + character.level;
    var fight = "\n\nHealth: " + character.health + "\nLevel: " + character.level + "\nMonster (Health/ Base Damage): " + monster.health[character.level] + " // " + monster.attack[character.level];
    if(type === "battle"){
        return battle;
    }else {
        return fight;
    }
}
//calculations.......not working......health does not get deducted
var inputCorrect = function(input, type){
    if(type === "num"){
        var correction = parseInt(input);
    }else if (type === "string"){
        var correction = input.toLowerCase();
    }
    return correction;
};

var difficulty = function(level){
    if(level === 1)
        character.health = 1500 / level;
        run = 2 / level;
        monster.health = [100 * level];
        monster.attack = [100 * level];
}
//F variable to fight the monster]
//Fight process & Death Process (Death doesnt work)
var options = {
    f : function(){
        while(monster.health[character.level] > 0 && character.health > 0){
            if(inputCorrect("string") === "u") {
                options.u();
            }
            if(inputCorrect("string") === "f"){
                dealt = randomizer(character.fight);
                damage = randomizer(monster.attack[character.level]);
            }
            character.health -= damage;
            monster.health[character.level] -= dealt;
            alert("You dealt " + dealt + " damage!\nYou received " + damage + " damage!" + strings(0, "fight"));
        }
        if(character.health < 0){
            alert("You Have Died")
            return
        }else {
            character.level += 1;
            alert("Dragon Defeated!\nProceed: \n" + strings(0, "fight"));
        }
    },
//Run option - 1 option to run
    r : function(){
        alert("You ran safely to the next level!\nHealth: ");
        character.level += 1;
    },
};
//Dungeon directions and choices
var dungeon = function(path) {
    var optCheck = ["f", "r", "u", "end"];
    while(character.level < 5 && character.health > 0) {
        var run = "run";
        while (run === "run"){
            var opt = prompt(strings(character.level, path));
            opt = inputCorrect(opt, "string");
            run = "nr";
            if(opt === "r"){
                if (character.run <= 1){
                    run = "run";
                    alert("You ran out of energy to run, try again");
                }
            }
        }
        for(var i = 0; i < optCheck.length; i++) {   //input into options
            if(opt === optCheck[i]) {
                options[optCheck[i]]();
            }
        }
    }
};
//3 choices to select from
var intro = function(){
    while(character.restart === "ok"){
        var diff = prompt("Enter a difficulty Level!\n(Easy/Normal/Darksouls)");
        var paths = prompt("\nSelect one of these five paths to see your destiny (1/.../3)");
        paths = inputCorrect(paths, "num");
        difficulty(diff);
        if(paths === 1 || paths === 2 || paths === 3){
            alert("A Dangerous Foe Has Appeared Before You! FIGHT!");
            dungeon("battle");
        }
        winLose(character.winStatus);
    }
};
intro();
console.log("name" + character.name);
console.log("run" + character.run);
console.log("level" + character.level);