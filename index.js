// Code your solutions in this file
function writeCards(name) {
    let frank = []
    for (let x = 0; x < name.length; x++) {
        frank[x] = `Thank you, ${name[x]}, for the wonderful surprise gift!`
    }
    return frank

}
function countDown(number) {
    for ( let x = number ;x >= 0; x--) {
        console.log(x);
    }
    
}