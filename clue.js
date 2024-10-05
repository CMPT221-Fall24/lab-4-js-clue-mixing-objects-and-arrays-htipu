let suspectsArray = ["Adam", "Ben", "Charlie", "Dan", "Ethan", "Frank"];
let weaponsArray = ['knife', 'hammer', 'gun', 'brick', 'axe', 'candlestick', 'rope', 'screwdriver'];
let roomsArray = ['foyer', 'bathroom', 'kitchen', 'master bedroom', 'guest bedroom', 'garage', 'basement', 'laundry room', 'crawlspace', 'living room'];
function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function pickMystery(){
    let mystery = {
        suspect : selectRandom(suspectsArray),
        weapon : selectRandom(weaponsArray),
        room : selectRandom(roomsArray)  
    };
    return mystery;
}

function revealMystery(mystery){
    alert(mystery.suspect + " killed Mr. Marist using the "+ mystery.weapon + " in the " +mystery.room+ '!');
}

document.getElementById('reveal').addEventListener('click', function(){
    const clueGame = pickMystery();
    const finalMessage = revealMystery(clueGame);
});