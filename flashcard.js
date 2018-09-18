var basic = require("./BasicCard.js");
var cloze = require("./ClozeCard.js")
var inquirer = require("inquirer");


var sixteenPresidentBasic = new basic("Who was the 16th president?", "Abraham Lincoln", "basic")
var thirdPresidentBasic = new basic("Who was the 3rd president?", "Thomas Jefferson", "basic")
var decBasic = new basic("In what year was the Declaration of Independence ratified?", "1776", "basic")
var whiteHouseBasic = new basic("Who was the first president to live in the White House?", "John Adams", "basic")
var fourthFireWorksBasic = new basic("In what city was the first Fourth of July celebration with a fireworks display was held?", "Boston", "basic")

var civilCloze = new cloze("The American Civil War started in 1861.", "1861", "cloze")
var flagCloze = new cloze("Betsy Ross was credited for creating the first American flag.", "Betsy Ross", "cloze")
var gettyCloze = new cloze('"Four score and seven years ago" appears in the Gettysburg Address.', "Gettysburg Address", "cloze")
var anthemCloze = new cloze("Francis Scott Key wrote the lyrics to the national anthem of the USA.", "Francis Scott Key", "cloze")
var birdCloze = new cloze("The turkey was the bird that Benjamin Franklin said would be more appropriate than the eagle to be the national symbol.", "turkey", "cloze")




var questionsArr = [thirdPresidentBasic, civilCloze, decBasic, flagCloze, whiteHouseBasic, gettyCloze, fourthFireWorksBasic, anthemCloze, sixteenPresidentBasic, birdCloze]

var onQuestion = 0;

presentQuestion();

function presentQuestion() {

    if (onQuestion < 10) {

    


    if (questionsArr[onQuestion].type === "basic") {


        inquirer.prompt([
            {
                type: "input",
                name: "question",
                message: questionsArr[onQuestion].front
            }
        ]).then(function (response) {

            if (response.question === questionsArr[onQuestion].back) {
                console.log("Correct!");

            } else {
                console.log("Wrong!");
                console.log("The correct answer was " + questionsArr[onQuestion].back  + ".");
            }
            onQuestion++;
            presentQuestion();

        });


    } else {

        inquirer.prompt([
            {
                type: "input",
                name: "question",
                message: questionsArr[onQuestion].partial
            }
        ]).then(function (response) {

            if (response.question === questionsArr[onQuestion].cloze) {
                console.log("Correct!");

            } else {
                console.log("Wrong!");
                console.log("The correct answer was " + questionsArr[onQuestion].cloze + ".");

            }
            onQuestion++;
            presentQuestion();
        });

    }

    } else {
        console.log("Game over.");
        return;
    }


}