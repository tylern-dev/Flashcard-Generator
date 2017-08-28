var BasicCard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');



var cardType = process.argv[2];
var text = process.argv[3];
var answer = process.argv[4];



if(cardType === 'basic'){
    var newBasicCard = new BasicCard(text,answer);

}


function main(){
    console.log('==============\nCreate your own flash cards\n==============')
    console.log('To begin, please use one of these commands:')
    console.log('-- node cli basic <text> <answer>\n-- node cli cloze <text> <answer>')
}
main();


