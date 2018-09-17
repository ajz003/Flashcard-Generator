module.exports = BasicCard;

function BasicCard (front, back) {
    this.front = front;
    this.back = back;
}

var firstPresident = new BasicCard("who was the first president", "george washington")

console.log(firstPresident.front);
console.log(firstPresident.back);
