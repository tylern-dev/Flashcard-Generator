// var BasicCard = require('./basicCard.js');
// var ClozeCard = require('./clozeCard.js');

//new card button
//front card button
//back card button
//full text button

var cardFront = $('#card-front');
var cardBack = $('#card-back');

$('#add-card').on('click',function(event){
    console.log(cardFront[0].value.trim())
    console.log(cardBack[0].value.trim())
})