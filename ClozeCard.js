module.exports = ClozeCard;

function ClozeCard(text, cloze) {
    if (text.includes(cloze)) {

        this.cloze = cloze;
        this.fullText = text;
        this.partial = this.fullText.replace(cloze, "...");

    } else {
        return console.log("Error.")
    }
    
    
}

var firstPresidentCloze = new ClozeCard("George Washington was the first president", "George Washington")

console.log("Cloze: " + firstPresidentCloze.cloze)

console.log("Partial: " + firstPresidentCloze.partial)

console.log("Full: " + firstPresidentCloze.fullText)

var brokenCloze = new ClozeCard("I like pizza", "tacos");
