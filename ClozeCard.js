

var ClozeCard = function (text, cloze, type) {

    if (text.includes(cloze)) {

        this.cloze = cloze;
        this.fullText = text;
        this.partial = this.fullText.replace(cloze, "...");
        this.type = type;

    } else {
        return console.log("Error in " + text + ". Your first argument does not contain the second argument.")
    }
    
    
}



module.exports = ClozeCard;