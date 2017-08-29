var BasicCard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');
var fs = require('fs');



var command = process.argv[2];
var text = process.argv[3];
var flashcardNumber = process.argv[3];
var answer = process.argv[4];
var answerOrSideOfCard = process.argv[4]
var basicCardArray = [];


if(command === 'basic'){
    var newBasicCard = new BasicCard(text,answer);
    basicCardArray.push(newBasicCard);
    console.log(basicCardArray)
    newBasicCard = JSON.stringify(newBasicCard, null, 2)
    fs.appendFile('flashcards.txt', newBasicCard)

}


function main(){
    console.log('==============\nCreate your own flash cards\n==============')
    console.log('To begin, please use one of these commands:')
    console.log('-- node cli basic "<text>" "<answer>"\n-- node cli cloze <text> <answer>')
}

if(basicCardArray.length===0){
    console.log('You have no flashcards')
    main();
}else{
    console.log('You have '+basicCardArray.length+' flash cards')
    console.log('to view the front of flash card type the following:')
    console.log('-- node cli flashcard <num> <front or back>')
    if(command === 'flashcard'){
        var flashcardNum = basicCardArray[textOrNum-1]
        if(answerOrSideOfCard === 'front'){
            flashcardNum.front
        } else if(answerOrSideOfCard === 'back'){
            flashcardNum.back
        }
    }
}




