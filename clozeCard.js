function ClozeCard(text, cloze){
    
        this.text = text;
        this.cloze = cloze;
        
        //checking to see if the text includes the cloze. If it does, the other properties can be called
        if(!this.text.includes(this.cloze)){
            var error =  new Error(this.cloze+' does not appear in '+this.text)
            console.log(error)
            
        } else {
            this.partial = function(){
                var newText = this.text.replace(this.cloze,'...');
                console.log(newText)       
            } 
            this.fullText = this.text;
        }
    
}
var newCard = new ClozeCard('Hamilton created the treasury and is on the $10 bill', 'Hamilton')





module.exports = ClozeCard;